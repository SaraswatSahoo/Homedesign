import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import * as THREE from "three";

const ROOM_SIZE = 1.8;

export default function Furniture({
  position,
  onDrag,
  orbitControlsRef,
  furnitureName
}: {
  position?: [number, number, number];
  onDrag?: (pos: [number, number, number]) => void;
  orbitControlsRef: any;
  furnitureName: string;
}) {

  const { scene } = useGLTF(`./models/${furnitureName}.glb`);
  const [isPicked, setIsPicked] = useState(false);
  const [pos, setPos] = useState<[number, number, number]>(position ?? [0, 0.4, 0]);
  const { camera, gl } = useThree();

  const getPointerPosition = (event: MouseEvent): [number, number, number] => {
    const rect = gl.domElement.getBoundingClientRect();

    // Convert screen coordinates to normalized device coordinates (-1 to +1)
    const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    // Create raycaster
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), camera);

    // Define horizontal plane at y = 0.4
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -0.4);

    // Get intersection point
    const intersectionPoint = new THREE.Vector3();
    raycaster.ray.intersectPlane(plane, intersectionPoint);

    // Clamp to room bounds
    intersectionPoint.x = Math.min(Math.max(intersectionPoint.x, -ROOM_SIZE), ROOM_SIZE);
    intersectionPoint.z = Math.min(Math.max(intersectionPoint.z, -ROOM_SIZE), ROOM_SIZE);

    return [intersectionPoint.x, 0.4, intersectionPoint.z];
  };

  const moveWithPointer = (event: PointerEvent) => {
    if (isPicked) {
      const newPos = getPointerPosition(event);
      setPos(newPos);
      onDrag?.(newPos);
    }
  };

  useEffect(() => {
    if (isPicked) {
      window.addEventListener("pointermove", moveWithPointer);
      orbitControlsRef?.current && (orbitControlsRef.current.enabled = false);
    } else {
      window.removeEventListener("pointermove", moveWithPointer);
      orbitControlsRef?.current && (orbitControlsRef.current.enabled = true);
    }
    return () => window.removeEventListener("pointermove", moveWithPointer);
  }, [isPicked]);

  useEffect(() => {
    if (position) setPos(position);
  }, [position]);

  return (
    <primitive
      object={scene}
      position={pos}
      scale={1}
      onPointerDown={(e: React.PointerEvent) => {
        e.stopPropagation(); // prevent clicks from reaching background
        setIsPicked(true);
      }}
      onPointerUp={(e: React.PointerEvent) => {e.stopPropagation(); setIsPicked(false)}}
    />
  );
}

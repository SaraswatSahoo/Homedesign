import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";
import { useRef, useState } from "react";

const ROOM_SIZE = 1.8; // Define room half-width/depth

function clampPosition(pos: [number, number, number]): [number, number, number] {
  const clampedX = Math.min(Math.max(pos[0], -ROOM_SIZE), ROOM_SIZE);
  const clampedZ = Math.min(Math.max(pos[2], -ROOM_SIZE), ROOM_SIZE);
  return [clampedX, pos[1], clampedZ];
}

export default function Furniture({ position, onDrag, orbitControlsRef }: { position?: [number, number, number]; onDrag?: any; orbitControlsRef: any; }) {
  const { scene } = useGLTF('./models/DoubleBed.glb');

  const [targetPos, setTargetPos] = useState(position ?? [0, 0.4, 0]);
  const currentPos = useRef(targetPos);

  const bind = useDrag(({ offset: [x, y], first, last }) => {
    if (orbitControlsRef && orbitControlsRef.current) {
      orbitControlsRef.current.enabled = !(first || !last); // Disable orbit on drag start/end
    }

    const clampedPos = clampPosition([x, 0.4, y]);
    setTargetPos(clampedPos);
    onDrag?.(clampedPos);
  });

  useFrame(() => {
    currentPos.current = [
      lerp(currentPos.current[0], targetPos[0], 0.1),
      lerp(currentPos.current[1], targetPos[1], 0.1),
      lerp(currentPos.current[2], targetPos[2], 0.1),
    ];
  });

  function lerp(start: number, end: number, alpha: number): number {
    return start + (end - start) * alpha;
  }

  return <primitive object={scene} position={position} scale={0.5} {...bind()} />;
}

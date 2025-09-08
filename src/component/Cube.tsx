import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Cube({ color, size, position }: { color?: string, size?: [number, number, number], position?: [number, number, number] }) {

    const ref:any = useRef(null);

    useFrame((state, delta) => {
        if(ref.current){
            ref.current.rotation.x += delta;
            ref.current.rotation.y += delta;
        }
    })

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size}/>
      <meshStandardMaterial color={color} />
      <OrbitControls enableZoom={false}/>
    </mesh>
  )
}
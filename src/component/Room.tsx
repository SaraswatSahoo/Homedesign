import { OrbitControls, useGLTF } from "@react-three/drei"

export default function Room({ scale, position }: { scale?: number, position?: [number, number, number] }) {

    const { scene } = useGLTF("/models/room.glb");

    return(
        <>
            <primitive object={scene} scale={scale} position={position} />
            <OrbitControls enableZoom={true} />
        </>
    )
    
}
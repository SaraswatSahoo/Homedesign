import { useGLTF } from "@react-three/drei";

export default function RoomContent({roomScene, scale, position, rotation, setSelectedWall}: {roomScene: string, scale?: number, position?: [number, number, number], rotation?: [number, number, number], setSelectedWall: any}) {

    const { scene } = useGLTF(roomScene);

    function changeColor(e:any){
        e.stopPropagation();
        const object = e.object;
        if(object.material){
            setSelectedWall(object);
        }
    }

  return (
    <>
        <primitive object={scene} scale={scale} position={position} rotation={rotation} onPointerDown={(e:any)=>{changeColor(e)}} />
    </>
  )
}
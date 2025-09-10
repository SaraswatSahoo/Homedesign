import { OrbitControls, useGLTF } from "@react-three/drei"
import { useEffect, useState } from "react";

export default function Room({ scale, position, rotation, roomNumber }: { scale?: number, position?: [number, number, number], rotation?: [number, number, number], roomNumber: number }) {

    const [ roomScene, setRoomScene ] = useState("/models/livingroom.glb");

    useEffect(()=>{
        if(roomNumber == 1) setRoomScene("./models/livingroom.glb");
        else if(roomNumber == 2) setRoomScene("./models/bedroom.glb");
        else if(roomNumber == 3) setRoomScene("./models/kitchen.glb");
    },[roomNumber]);

    const { scene } = useGLTF(roomScene);

    return(
        <>
            <primitive object={scene} scale={scale} position={position} rotation={rotation} onPointerDown={(e:Event)=>{console.log(e)}}/>
            <OrbitControls enableZoom={true} />
        </>
    )
    
}
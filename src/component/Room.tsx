import { OrbitControls } from "@react-three/drei"
import { Suspense, useEffect, useState } from "react";
import RoomContent from "./RoomContent";

export default function Room({ scale, position, rotation, roomNumber, setSelectedWall }: { scale?: number, position?: [number, number, number], rotation?: [number, number, number], roomNumber: number, setSelectedWall: any }) {

    const [ roomScene, setRoomScene ] = useState("");

    useEffect(()=>{
        if(roomNumber == 1) setRoomScene("./models/livingroom.glb");
        else if(roomNumber == 2) setRoomScene("./models/bedroom.glb");
        else if(roomNumber == 3) setRoomScene("./models/kitchen.glb");
    },[roomNumber]);

    return(
        <>
            <Suspense fallback={null}>
                <RoomContent key={roomNumber} roomScene={roomScene} scale={scale} position={position} rotation={rotation} setSelectedWall={setSelectedWall}/>
                <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
            </Suspense>
        </>
    )
    
}
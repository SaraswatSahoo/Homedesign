import { Canvas } from "@react-three/fiber"
import "./App.css"
import * as THREE from "three";
import Room from "./component/Room";
import ToggleButtons from "./component/ToggleButtons";
import BottomBar from "./component/BottomBar";
import { Suspense, useEffect, useState } from "react";


export default function App(){

  const [ roomNumber, setRoomNumber ] = useState(1);
  const [ room, setRoom ] = useState("Living Room");
  const [ selectedWall, setSelectedWall ] = useState(null as any);
  const [ wallColor, setWallColor ] = useState("");

  useEffect(()=>{
    if(roomNumber == 1) setRoom("Living Room")
    else if(roomNumber == 2) setRoom("Bedroom")
    else if(roomNumber == 3) setRoom("Kitchen")
  },[roomNumber])

  useEffect(()=>{
    if(selectedWall && wallColor){
      selectedWall.material.color.set(wallColor);
    }
  },[wallColor, selectedWall]);

  return(
    <div className=" flex flex-col items-center h-screen justify-center bg-black">
      <div className=" h-full w-full mt-[20px]">
        <Suspense fallback={null}>
          <Canvas>
            <directionalLight position={[1, 2, 3]} intensity={1.5}/>
            <ambientLight intensity={1.5}/>
            <Room setSelectedWall={setSelectedWall} roomNumber={roomNumber} scale={1.2} position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
          </Canvas>
        </Suspense>
      </div>
      <div className=" mt-[30px]">
        <ToggleButtons room={room} roomNumber={roomNumber} setRoomNumber={setRoomNumber}/>
      </div>
      <div className="w-[40%] m-[30px]">
        <BottomBar setWallColor={setWallColor}/>
      </div>
    </div>
  )
}
import { Canvas } from "@react-three/fiber"
import "./App.css"
import Room from "./component/Room";
import ToggleButtons from "./component/ToggleButtons";
import BottomBar from "./component/BottomBar";
import { useEffect, useState } from "react";


export default function App(){

  const [ roomNumber, setRoomNumber ] = useState(1);
  const [ room, setRoom ] = useState("Living Room")

  useEffect(()=>{
    if(roomNumber == 1) setRoom("Living Room")
    else if(roomNumber == 2) setRoom("Bedroom")
    else if(roomNumber == 3) setRoom("Kitchen")
  },[roomNumber])  

  return(
    <div className=" flex flex-col items-center h-screen justify-center bg-black">
      <div className=" h-full w-full mt-[20px]">
        <Canvas>
          <directionalLight position={[1, 2, 3]} intensity={1.5}/>
          <ambientLight intensity={1.5}/>
          <Room roomNumber={roomNumber} scale={1.2} position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]}/>
        </Canvas>
      </div>
      <div className=" mt-[30px]">
        <ToggleButtons room={room} roomNumber={roomNumber} setRoomNumber={setRoomNumber}/>
      </div>
      <div className="w-[40%] m-[30px]">
        <BottomBar />
      </div>
    </div>
  )
}
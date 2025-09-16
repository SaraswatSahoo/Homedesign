import { Canvas } from "@react-three/fiber"
import "./App.css";
import ToggleButtons from "./component/ToggleButtons";
import BottomBar from "./component/BottomBar";
import { Suspense, useEffect, useRef, useState } from "react";
import RoomDesign1 from "./component/RoomDesign1";
import { Grid, OrbitControls } from "@react-three/drei";
import Furniture from "./component/Furniture";


export default function App(){

  const [ roomNumber, setRoomNumber ] = useState(1);
  const [ room, setRoom ] = useState("Living Room");
  const [ selectedWall, setSelectedWall ] = useState(null as any);
  const [ wallColor, setWallColor ] = useState("");
  const [ furniture, setFurniture ] = useState(null as any);
  const orbitControlsRef = useRef(null);

  useEffect(()=>{
    if(roomNumber == 1) setRoom("Living Room")
    else if(roomNumber == 2) setRoom("Bedroom")
    else if(roomNumber == 3) setRoom("Kitchen")
  },[roomNumber])

  useEffect(()=>{
    if(selectedWall && wallColor){
      selectedWall.material.color.set(wallColor);
      setSelectedWall(null);
      setWallColor("");
    }
  },[wallColor, selectedWall]);

  return(
    <div className=" flex flex-col items-center h-screen justify-center bg-black">
      <div className=" h-full w-full mt-[20px]">
        <Suspense fallback={null}>
          <Canvas camera={{ position: [10, 10, 10] }}>
            <directionalLight position={[1, 2, 3]} intensity={1.5}/>
            <ambientLight intensity={1.5}/>
            <RoomDesign1 setSelectedWall={setSelectedWall} room={room}/>
            <Grid args={[5, 5]} cellColor='lightblue' cellThickness={1}/>
            {furniture && (
              <Furniture
                position={furniture}
                onDrag={(pos: [number, number, number]) => setFurniture(pos)}
                orbitControlsRef={orbitControlsRef}
              />
            )}
            <OrbitControls ref={orbitControlsRef}/>
          </Canvas>
        </Suspense>
      </div>
      <div className=" mt-[30px]">
        <ToggleButtons room={room} roomNumber={roomNumber} setRoomNumber={setRoomNumber}/>
      </div>
      <div className="w-[40%] m-[30px]">
        <BottomBar setWallColor={setWallColor} setFurniture={setFurniture}/>
      </div>
    </div>
  )
}

import { Canvas } from "@react-three/fiber"
import "./App.css";
import ToggleButtons from "./component/ToggleButtons";
import BottomBar from "./component/BottomBar";
import { Suspense, useEffect, useRef, useState } from "react";
import RoomDesign1 from "./component/RoomDesign1";
import { Grid, OrbitControls } from "@react-three/drei";
import Furniture from "./component/Furniture";
import SaveResetButton from "./component/SaveResetButton";


export default function App(){

  const [ roomNumber, setRoomNumber ] = useState(1);
  const [ room, setRoom ] = useState("Living Room");
  const [ selectedWall, setSelectedWall ] = useState(null as any);
  const [ wallColor, setWallColor ] = useState("");
  const [ wall1Color, setWall1Color ] = useState("#778979");
  const [ wall2Color, setWall2Color ] = useState("#ccdcc1");
  const [ furniture, setFurniture ] = useState(null as any);
  const orbitControlsRef = useRef(null);

  useEffect(() => {

    if (!room) return;

    const savedDesign = JSON.parse(localStorage.getItem("roomDesigns") || "{}");
    const design = savedDesign[room];

    console.log("Loaded design:", design);

    if (design) {

      setWall1Color(design.wall1Color);
      setWall2Color(design.wall2Color);
      setFurniture(design.furniture || null);

    } else {
      
      if (room === "Living Room") {
        setWall1Color("#778979");
        setWall2Color("#ccdcc1");
      } else if (room === "Bedroom") {
        setWall1Color("#a3c4bc");
        setWall2Color("#f7ede2");
      } else if (room === "Kitchen") {
        setWall1Color("#dbe7e4");
        setWall2Color("#f1f3f2");
      }
      setFurniture(null);

    }

  }, [room]);

  function resetRoom(rname?: string) {

    if (rname === "Living Room") {
      setWall1Color("#778979");
      setWall2Color("#ccdcc1");
    } else if (rname === "Bedroom") {
      setWall1Color("#a3c4bc");
      setWall2Color("#f7ede2");
    } else if (rname === "Kitchen") {
      setWall1Color("#dbe7e4");
      setWall2Color("#f1f3f2");
    }
    setFurniture(null);

  }
  

  useEffect(()=>{
    if(roomNumber == 1) setRoom("Living Room")
    else if(roomNumber == 2) setRoom("Bedroom")
    else if(roomNumber == 3) setRoom("Kitchen")
  },[roomNumber])

  useEffect(()=>{
    if(selectedWall && wallColor){
      if(selectedWall.name == "wall1") setWall1Color(wallColor);
      else if(selectedWall.name == "wall2") setWall2Color(wallColor);
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
            <RoomDesign1 setSelectedWall={setSelectedWall} wall1Color={wall1Color} wall2Color={wall2Color}/>
            <Grid args={[5,5]} cellColor='lightblue' cellThickness={0.1}/>
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
      <div className="mt-[20px]">
        <SaveResetButton wall1color={wall1Color} wall2color={wall2Color} furniture={furniture} room={room} resetRoom={resetRoom}/>
      </div>
      <div className="w-[40%] m-[30px]">
        <BottomBar setWallColor={setWallColor} setFurniture={setFurniture} />
      </div>
    </div>
  )
}

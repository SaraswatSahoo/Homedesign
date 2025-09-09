import { Canvas } from "@react-three/fiber"
import "./App.css"
import Room from "./component/Room";

export default function App(){

  return(
    <div className=" flex flex-col items-center justify-center h-screen bg-black">
        <Canvas>
          <directionalLight position={[1, 2, 3]} intensity={1.5}/>
          <ambientLight intensity={1.5}/>
          <Room scale={1.5} position={[0, 0, 0]}/>
        </Canvas>
    </div>
      
  )
}
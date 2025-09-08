import { Canvas } from "@react-three/fiber"
import "./App.css"
import Cube from "./component/Cube";

export default function App(){

  return(
    <div className=" flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className=" text-3xl font-bold flex items-center justify-center">Hello World</div>
      <div>
        <Canvas>
          <directionalLight position={[1, 2, 3]} intensity={1.5}/>
          <ambientLight intensity={1.5}/>
          <Cube color="blue" size={[1.5, 1.5, 1.5]} position={[0, 0, 0]}/>
      </Canvas>
      </div>
    </div>
      
  )
}
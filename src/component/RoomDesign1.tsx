import { useEffect, useState } from "react";

function RoomDesign1({ setSelectedWall, room }: {setSelectedWall?: (wall: any) => void, room: string}) {

    const [ wall1Color, setWall1Color ] = useState("#778979");
    const [ wall2Color, setWall2Color ] = useState("#ccdcc1");

    useEffect(()=>{
        if(room == "Living Room"){
            setWall1Color("#778979");
            setWall2Color("#ccdcc1");
        } else if(room == "Bedroom"){
            setWall1Color("#a3c4bc");
            setWall2Color("#f7ede2");
        } else if(room == "Kitchen"){
            setWall1Color("#dbe7e4");
            setWall2Color("#f1f3f2");
        }
    },[room]);
    
  return (
    <>
        {/* Floor block */}
        <mesh position={[0, 0, 0]}>
            <boxGeometry args={[5, 0.2, 5]} />
            <meshStandardMaterial color="#C19A6B" />
        </mesh>

        {/* Wall 1 block */}
        <mesh position={[-0.1, 2.4, -2.6]} name="wall1" onPointerDown={(e)=>{setSelectedWall && setSelectedWall(e.object)}}>
            <boxGeometry args={[5.2, 5, 0.2]} />
            <meshStandardMaterial color={wall1Color} />
        </mesh>

        {/* Wall 2 block (adjacent) */}
        <mesh position={[-2.6, 2.4, 0]} name="wall2" onPointerDown={(e)=>{setSelectedWall && setSelectedWall(e.object)}}>
            <boxGeometry args={[0.2, 5, 5]} />
            <meshStandardMaterial color={wall2Color} />
        </mesh>
    </>
      
  );
}

export default RoomDesign1;

function RoomDesign1({ setSelectedWall, wall1Color, wall2Color}: {setSelectedWall?: (wall: any) => void, wall1Color: string, wall2Color: string}) {
   
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

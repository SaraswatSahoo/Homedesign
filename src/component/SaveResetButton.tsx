import { useState } from "react";

export default function SaveResetButton({ wall1color, wall2color, furniture, room, resetRoom }: { wall1color: string, wall2color: string, furniture: any, room: string, resetRoom: (rname:string) => void }) {

    const[ savedDesign, setSavedDesign ] = useState({} as any);

    function SaveDesign() {

        const prevDesign = JSON.parse(localStorage.getItem("roomDesigns") || "{}");
        setSavedDesign(prevDesign);
        const newDesign = {
          ...savedDesign,
          [room]: {
            wall1Color: wall1color,
            wall2Color: wall2color,
            furniture: furniture ,
          }
        }
        setSavedDesign(newDesign);
        localStorage.setItem("roomDesigns", JSON.stringify(newDesign));
        alert("Design Saved!");
        
    }

    function ResetDesign() {
        const prevDesign = JSON.parse(localStorage.getItem("roomDesigns") || "{}");
        setSavedDesign(prevDesign);
        const newDesign = {
          ...savedDesign,
          [room]: null
        }
        setSavedDesign(newDesign);
        localStorage.setItem("roomDesigns", JSON.stringify(newDesign));
        resetRoom(room);
        alert("Design Reset!");
    }

    return(
        <div className=" text-white flex text-[20px] justify-center items-center space-x-2 font-semibold">
            <button className="border rounded-[10px] p-[10px]" onClick={()=>SaveDesign()}>Save Design</button>
            <button className="border rounded-[10px] p-[10px]" onClick={()=>ResetDesign()}>Reset Design</button>
        </div>
    )
}
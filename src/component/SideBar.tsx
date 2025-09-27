import { Circle } from "lucide-react"
import { roomData } from "../data/roomData"

export default function SideBar({setWallColor, room, onAddFurniture}:{setWallColor: any, room: string, onAddFurniture: any}) {

    return(
        <div className=" text-white border-white border-2 rounded-[15px] text-[20px] font-semibold space-y-2 p-[20px]">
            <div>
                Change Color of Walls
                <div className=" mt-[10px]">
                    <div className=" flex justify-center items-center space-x-1">
                        {roomData.map((data, index)=>{
                            if(data.name === room){
                                return(
                                    <div key={index} className=" flex justify-center items-center space-x-1">
                                        {data.wallcolor.map((color, idx)=>{
                                            return(
                                                <button key={idx} onClick={()=>{setWallColor(color)}}>
                                                    <Circle size={35} fill={color}/>
                                                </button>
                                            )
                                        })}
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
            <div>
                Add Furniture to Room
                <div className=" mt-[10px]">
                    {roomData.map((data, index)=>{
                        if(data.name === room){
                            return(
                                <div key={index} className=" flex flex-col text-[18px] justify-center items-center space-y-3">
                                    {data.furniture.map((furn, idx)=>{
                                        return(
                                            <button key={idx} className="border rounded-[10px] p-[10px] w-full" onClick={() => onAddFurniture(furn)}>{`Add ${furn}`}</button>
                                        )
                                    })}
                                </div>
                            )
                        }
                    }
                    )}
                </div>
            </div>
        </div>
    )
}
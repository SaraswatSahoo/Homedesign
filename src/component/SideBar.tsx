import { Circle } from "lucide-react"

export default function SideBar({setWallColor, room, onAddFurniture}:{setWallColor: any, room: string, onAddFurniture: any}) {

    const roomData = [
        {
            name: "Living Room",
            wallcolor: ["#E6B17E", "#F9F7F4", "#2C6E91", "#556B2F", "#FFD27F"],
            furniture: ["Sofa", "Cabinet"],
        },
        {
            name: "Bedroom",
            wallcolor: ["#A3C4BC", "#F7EDE2", "#D4A5A5", "#9BC1BC", "#E2F0CB"],
            furniture: ["Bed", "Wardrobe", "Dresser"],
        },
        {
            name: "Kitchen",
            wallcolor: ["#D3E4CD", "#F1F3F2", "#FFB4A2", "#90BE6D", "#F9C74F"],
            furniture: ["Stove"],
        }
    ]

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
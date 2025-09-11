import { Circle, SofaIcon } from "lucide-react";

export default function BottomBar({setWallColor}:{setWallColor: any}){
    return(
        <div className=" text-white text-[20px] font-semibold border rounded-[20px] flex items-center justify-around">
            <div className=" p-[20px]">
                <div className=" p-[10px]">WALL COLOR</div>
                <div className=" flex justify-center items-center space-x-1">
                    <button onClick={()=>{setWallColor("#0077B6")}}>
                        <Circle size={35} fill="#0077B6"/>
                    </button>
                    <button onClick={()=>{setWallColor("#91AEC1")}}>
                        <Circle size={35} fill="#91AEC1"/>
                    </button>
                    <button onClick={()=>{setWallColor("#0A8754")}}>
                        <Circle size={35} fill="#0A8754"/>
                    </button>
                    <button onClick={()=>{setWallColor("#FFCF56")}}>
                        <Circle size={35} fill="#FFCF56"/>
                    </button>
                    <button onClick={()=>{setWallColor("#92140C")}}>
                        <Circle size={35} fill="#92140C"/>
                    </button>
                </div>
            </div>
            <div className=" flex flex-col justify-center items-center p-[20px] space-y-2">
                <div>
                    <SofaIcon size={45} />
                </div>
                <div className="text-[15px]">ADD FURNITURE</div>
                <div className=" flex text-[15px] justify-center items-center space-x-2">
                    <div className="border rounded-[10px] p-[10px]">ADD SOFA</div>
                    <div className="border rounded-[10px] p-[10px]">ADD BED</div>
                </div>
            </div>
        </div>
    )
}
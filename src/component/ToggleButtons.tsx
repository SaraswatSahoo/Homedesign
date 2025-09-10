import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";

export default function ToggleButtons({room, roomNumber, setRoomNumber}:{room:string, roomNumber:number, setRoomNumber:any}){
    return(
        <div className=" flex justify-center items-center space-x-10">
            <button onClick={()=>{!(roomNumber==1) && setRoomNumber(roomNumber - 1)}} className="">
                <ArrowLeftCircleIcon size={50} fill="white"/>
            </button>
            <div className=" text-white text-[25px] font-semibold">
                {room}
            </div>
            <button onClick={()=>{!(roomNumber==3) && setRoomNumber(roomNumber + 1)}}>
                <ArrowRightCircleIcon size={50} fill="white"/>
            </button>
        </div>
    )
}
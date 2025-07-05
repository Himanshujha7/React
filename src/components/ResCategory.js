
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ItemList from "./ItemList";
import { useState } from "react";
const ResCategory = ({data, showItems, setIsActive}) => {
    const handleToggle = () =>{
        setIsActive();
    }
    console.log(data);
  return (
    <div>
        <div className="flex flex-col gap-10 items-center justify-center bg-white">
            <button  onClick={handleToggle} className="flex justify-between w-full my-4 bg-white px-4 gap-10 p-5">
                <span className="font-bold text-2xl" >
                    {data.title}
                    ({data.itemCards.length})
                </span>
                {showItems? <FaChevronUp className="text-gray-500 text-2xl" /> : <FaChevronDown className="text-gray-500 text-2xl" />}
            </button>
            <div>
                {showItems && 
                    <ItemList  items={data.itemCards}/>}
            </div>
        </div>
    </div>
  )
}

export default ResCategory

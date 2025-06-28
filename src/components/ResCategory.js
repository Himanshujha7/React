import { IoIosArrowDown } from "react-icons/io";
const ResCategory = ({data}) => {
    console.log(data);

  return (
    <div className="flex flex-col gap-10 items-center justify-center">
        <div className="flex justify-between w-full mx-auto my-4 bg-white px-4 gap-10 p-5 ">
            <span className="font-bold text-lg">
                {data.title}
                ({data.itemCards.length})
            </span>
            <span ><IoIosArrowDown size={25}/></span>
        </div>
    </div>
  )
}

export default ResCategory

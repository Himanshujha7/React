import { IoStar } from "react-icons/io5";
import UserContext from "../utility/UserContext";
import { useContext } from "react";


const ResCard = (props) => {
    const {resData} = props;
    const {name, image, cuisines, rating, deliveryTime, costForTwo,} = resData;

    const {loggedInUser} = useContext(UserContext);

    return (
        <div className="m-4 p-4 gap-2 w-[300px] rounded-lg shadow-md border border-slate-100 transition duration-300 hover:border-slate-300 hover:bg-gray-100">
            <img className="rounded-md "
                alt="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+image}/>
            <h3 className="font-bold py-2 text-slate-800 text-lg">{name}</h3> 
            <div className="flex justify-between">
                <h5 className=" bg-green-500 w-12 text text-amber-50 rounded-3xl font-medium items-center justify-center flex gap-1 text-sm">{rating}<IoStar /></h5>
                <h4 className="font-sans py-0.5 text-slate-800 font-medium">{deliveryTime} mins</h4>
            </div> 
            <h4 className="font-sans py-2 text-slate-600 text-sm">{cuisines}</h4> 
            <h4 className="font-medium py-2 text-slate-600">{costForTwo}</h4> 
            
            

        </div>

    )
}

export const withPromotedLabel = (ResCard) => {
    return (props) => {
        const {resData} = props;
        const {open} = resData;

        return (
            <div>
                <label className="absolute z-[1] px-4 py-0.5 bg-orange-700 text-amber-50 font-medium text-sm">{open}</label>
                <ResCard {...props}/>
            </div>
        )

    }
}
export default ResCard;
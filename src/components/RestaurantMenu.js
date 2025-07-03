import { useState } from "react";
import useRestaurantMenu from "../utility/useRestaurantMenu";
import ResCategory from "./ResCategory";
import {Shimmer} from "./Shimmer";
import { useParams } from "react-router";


const RestaurantMenu = () => {
    const [isActive, setIsActive] = useState(null);


    const {resId} = useParams();

    const resMenu = useRestaurantMenu(resId);

    
    if(resMenu === null ){
        return <Shimmer />;
    }
       
    const {name, cuisines, costForTwoMessage, city, sla, avgRating, areaName} = resMenu?.cards[2]?.card?.card?.info || {};
    
    

    const categories = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c.card?.card?.["@type"] === 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    console.log(categories);

    return (
        <div className="flex flex-col items-center justify-center m-8 p-4"> 
            <div className="flex flex-col border gap-y-2 border-slate-300 m-2 px-20 py-10 w-1/2 rounded-2xl shadow-md ">
                <div className="flex items-baseline gap-2">
                    <h1 className="text-5xl font-bold px-2 text-gray-900 ">{name}</h1>
                    <p className="text-md text-gray-400 ">{city}</p>
                    <p className="text-md text-gray-400 px-4">{areaName}</p>
                </div>
                <p className="text-md px-2 text-orange-600">{cuisines.join(", ")}</p>
               
                
                <p className="bg-green-500 font-medium text-amber-50 rounded-2xl m-2 px-2 w-10 flex items-center justify-center">{avgRating}</p>
                <p className="font-bold px-2 py-1">{costForTwoMessage}</p>
                <p className="px-2 py-1 font-medium text-slate-700">Delivery Time:{sla.deliveryTime}</p>
            </div>

            <h2 className="font-bold text-3xl m-8 flex items-start justify-start">Deals for you</h2>
            <div className="w-1/2 bg-gray-100">
                
                {
                    categories.map((category, index) => (
                        <ResCategory
                            showItems={isActive===index}
                            setIsActive={()=>setIsActive(isActive === index ? null : index)}
                            key={category?.card?.card.categoryId}
                            data={category?.card?.card}
                        />
                    ))
                }
            </div>
        </div>
    )

}

export default RestaurantMenu;
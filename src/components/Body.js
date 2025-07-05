import ResCard, {withPromotedLabel} from "./ResCard";
import { useState, useEffect, useContext} from "react";
import {Shimmer} from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utility/useOnlineStatus";
import { IoSearch } from "react-icons/io5";
import UserContext from "../utility/UserContext";


const Body = () => {
    //state variable
    //for this we use hooks
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    const PromotedResCard = withPromotedLabel(ResCard);

    

    const [query, setQuery] =useState("");

    useEffect(()=>{
        fetchData();
        },[]
    );

    const {loggedInUser, setUserName} = useContext(UserContext);

    const fetchData = async () => {
        const data= await fetch(
           "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING" || []
        )
        const json =await data.json();
        //console.log(json);

        const rest = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        console.log(rest);

        const formattedRestaurants = rest.map((res) => ({
            id: res.info.id,
            name: res.info.name,
            image: res.info.cloudinaryImageId,
            cuisines: res.info.cuisines.join(", "),
            rating: res.info.avgRating,
            deliveryTime: res.info.sla?.deliveryTime,
            costForTwo : res.info.costForTwo,
            open : res.info.aggregatedDiscountInfoV3?.header,
        }));
        setListOfRestaurants(formattedRestaurants);
        setFilteredList(formattedRestaurants);
    };

    //normal js variable;
    // let listOfRestaurants = [];
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return (<h1>Oh NO! Your Internet is down!</h1>);
    

    
    return listOfRestaurants.length === 0 ? (<Shimmer/>) : (
        <div className="flex flex-col gap-10 justify-center">
            <div className="flex items-center justify-center">
                <div className="flex m-8 p-4 gap-4">
                    
                    <input
                        type="text"
                        placeholder="Got a 3am craving?.."
                        className="w-full border border-emerald-100 rounded-2xl bg-white  py-2 shadow-2xl placeholder:text-slate-400 text-slate-700 text-sm pl-3 pr-10 transition duration-300 focus:outline-none focus:border-slate-400 hover:border-slate-300  "
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="bg-gray-700 px-4 py-1 text-amber-50 font-semibold flex items-center gap-2 rounded-xl cursor-pointer shadow-2xl transition duration-00 hover:bg-gray-600 " onClick={() =>{
                        const filterquery = listOfRestaurants.filter(
                        (res) => res.name.toLowerCase().includes(query.toLowerCase())
                        );
                        setFilteredList(filterquery);
                        }}>Search <IoSearch className="text-lg" />
                    </button>
                </div>
                
            </div>
            <div className="flex justify-between ">
                <div className="flex justify-end items-start px-4 py-2 ">
                    <button className="bg-orange-400 px-4 py-2 text-amber-50 font-medium rounded-xl cursor-pointer shadow-xl transition duration-200 hover:bg-orange-300" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                    (res) => res.rating >=4.5
                    ); setListOfRestaurants(filteredList)}}>Top Rated Restaurants </button>
                </div>
                <div className="flex justify-end items-start px-4 py-2 ">
                        <input value={loggedInUser} onChange={(e) => setUserName(e.target.value)} placeholder="Enter Username" className="p-2 border border-slate-400 rounded-xl shadow-lg"/>
                </div>
            </div>

            <div className="m-4 p-8 flex flex-wrap">
                {filteredList.map((res) => (
                    <Link to={"/restaurant/" + res.id } key ={res.id} className="no-link-style">

                        {res.open ? (<PromotedResCard resData={res} />) : (<ResCard resData={res}/>)}
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default Body;
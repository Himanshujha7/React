import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import {Shimmer} from "./Shimmer";

const Body = () => {
    //state variable
    //for this we use hooks
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [query, setQuery] =useState("");

    useEffect(()=>{
        fetchData();
        },[]
    );
    console.log("rendered");

    const fetchData = async () => {
        const data= await fetch(
           "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING" || []
        )
        const json =await data.json();
        console.log(json);

        const rest = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        const formattedRestaurants = rest.map((res) => ({
            id: res.info.id,
            name: res.info.name,
            image: res.info.cloudinaryImageId,
            cuisines: res.info.cuisines.join(", "),
            rating: res.info.avgRating,
            deliveryTime: res.info.sla?.deliveryTime,
        }));
        setListOfRestaurants(formattedRestaurants);
    };

    //normal js variable;
    // let listOfRestaurants = [];

    

    
    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="search">
                <input
                    type="text"
                    placeholder="Got a 3am craving?.."
                    className="search-input"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="search-btn" onClick={() =>{
                    const filterquery = listOfRestaurants.filter(
                    (res) => res.name.toLowerCase().includes(query.toLowerCase())
                    );
                    setListOfRestaurants(filterquery);
                }}>Search</button>
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                    (res) => res.rating >=4.5
                ); setListOfRestaurants(filteredList)}}>Top Rated Restaurants </button>
            </div>

            <div className="res-container">
                {listOfRestaurants.map((res) => (<ResCard key={res.id} resData={res}/>))}
            </div>
        </div>
    )
}
export default Body;
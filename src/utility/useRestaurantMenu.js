import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utility/constants";

const useRestaurantMenu = (resId) =>{
    const [resMenu, setResMenu] =useState(null);

    //fetch data

    useEffect(() => {
        fetchData()
    },[]);

    const fetchData = async () => {
        const data = await fetch(MENU_API_URL + resId);

        const json = await data.json();

        setResMenu(json.data);

    }

    return resMenu;
}  

export default useRestaurantMenu;
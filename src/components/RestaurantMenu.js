import useRestaurantMenu from "../utility/useRestaurantMenu";
import {Shimmer} from "./Shimmer";
import { useParams } from "react-router";


const RestaurantMenu = () => {

    const {resId} = useParams();

    const resMenu = useRestaurantMenu(resId);

    
    if(resMenu === null ){
        return <Shimmer />;
    }
       
    const {name, cuisines, costForTwoMessage, city, sla} = resMenu?.cards[2]?.card?.card?.info || {};

    const {itemCards}=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};

    return (
        <div className="restaurant-menu"> 
            <div className="restaurant-info">
                <h1>{name}</h1>
                <p>{cuisines.join(", ")}</p>
                <p>{city}</p>
                <p>{costForTwoMessage}</p>
                <p>Delivery Time: {sla?.slaString}</p>
            </div>

            <h2 className="menu-title"> Menu </h2>
            <div className="menu-grid">
                {itemCards.map((item) => {
                    const info = item.card.info;
                    const price = (info.defaultPrice / 100 || info.price / 100);
                    const imageId = info.imageId;
                    const name = info.name;
                    const description = info.description;

                return (
                    <div className="menu-card" key={info.id}>
                        <img
                            src={
                            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                            imageId
                        }
                        alt={name}
                        />
                        <h3>{name}</h3>
                        <p>Rs. {price}</p>
                        <p>{description}</p>
                    </div>
                );
                })}
            </div>
        </div>
    )

}

export default RestaurantMenu;
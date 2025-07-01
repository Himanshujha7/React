import { imageUrl } from "../utility/constants";

const ItemList = ({items}) => {
    console.log(items);

    return <div>
            {items.map((item) => (
                <div key ={item.card.info.id} className="flex flex-col p-4 m-2  border-b border-slate-300">
                    <div className="flex justify-between">
                        <div>
                            <div className="flex flex-col ">
                                <span className="font-bold px-2 text-xl text-gray-700 ">{item.card.info.name}</span>
                                <span className="font-medium px-2 py-1 text-gray-900 text-lg">Rs. {item.card.info.defaultPrice? item.card.info.defaultPrice/100 : item.card.info.price/100}</span>
                            </div>
                            <div >
                                {item.card.info.ratings.aggregatedRating.rating?
                                <div className="flex p-2 gap-1">
                                    <p className="font-black text-green-800">{item.card.info.ratings.aggregatedRating.rating}</p> 
                                    <p className="font-bold text-gray-400">({item.card.info.ratings.aggregatedRating.ratingCountV2})</p>
                                </div>
                                : ""}
                            </div>
                            <p className="text-sm font-medium text-gray-500 p-2">{item.card.info.description}</p>
                        </div>
                        <img className="w-[150px] h-[150px]" src={imageUrl + item.card.info.imageId}  /> 
                    </div>
                </div>
            ))}
        </div>

}
export default ItemList;
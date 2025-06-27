const ResCard = (props) => {
    const {resData} = props;
    const {name, image, cuisines, rating, deliveryTime} = resData;


    return (
        <div className="m-4 p-4 gap-2 w-[300px] rounded-lg shadow-md border border-slate-100 transition duration-300 hover:border-slate-300">
            <img className="rounded-md "
                alt="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+image}/>
            <h3 className="font-bold py-2 text-slate-800 text-lg">{name}</h3>  
            <h4 className="font-sans py-0.5 text-slate-600">{cuisines}</h4> 
            <h5 className="py-1 bg-green-500 w-10 text text-amber-50 rounded-3xl font-medium items-center justify-center flex">{rating}*</h5>
            <h4 className="font-sans py-0.5 text-slate-800 font-medium">{deliveryTime} mins</h4>

        </div>

    )
}
export default ResCard;
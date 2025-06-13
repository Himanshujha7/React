const ResCard = (props) => {
    const {resData} = props;
    const {name, image, cuisines, rating, deliveryTime} = resData;


    return (
        <div className="res-card">
            <img className="res-logo"
                alt="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+image}/>
            <h3>{name}</h3>  
            <h4>{cuisines}</h4> 
            <h5 className="rating-badge">{rating} stars</h5>
            <h4>{deliveryTime} mins</h4>

        </div>

    )
}
export default ResCard;
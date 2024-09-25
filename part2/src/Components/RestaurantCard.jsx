import { CDN_URL } from '../Utils/constants';
import './RestaurantCard.css';

const RestaurantCard = (props) => {
    const {resData} = props;
  return (
    <div className="res-card">
        <img className="res-logo" src={CDN_URL+resData.data.cloudinaryImageId} />
        <h3>{resData.data.name}</h3>
        <h3>{resData.data.avgRating}</h3>
        <h3>{resData.data.deliveryTime}</h3>
        <h3>{resData.data.price}</h3>
        <h4>₹{resData.data.costForTwo/100} FOR TWO</h4>
    </div>
  )
}

export default RestaurantCard
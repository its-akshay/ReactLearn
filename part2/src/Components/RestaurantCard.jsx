import { CDN_URL } from '../Utils/constants';
import './Index.css'

const RestaurantCard = (props) => {
    const {resData} = props;
  return (
    <div className="res-card">
        <img className="res-logo" src={CDN_URL+resData.info.cloudinaryImageId} />
        <h3>{resData.info.areaName}</h3>
        <h3>{resData.info.avgRating}</h3>

        <h3>{resData.info.id}</h3>
        <h3>{resData.info.name}</h3>
        <h4>₹{resData.info.costForTwo/100} FOR TWO</h4>
    </div>
  )
}

export default RestaurantCard
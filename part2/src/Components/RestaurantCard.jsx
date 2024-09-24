import React from 'react';
import './RestaurantCard.css';

const RestaurantCard = (props) => {
    const {resData} = props;
  return (
    <div className="res-card">
        <img className="res-logo" src={resData.image} />
        <h3>{resData.name}</h3>
        <h3>{resData.receipe}</h3>
        <h3>{resData.rating}</h3>
        <h3>{resData.deliveryTime}</h3>
        <h3>{resData.price}</h3>
    </div>
  )
}

export default RestaurantCard
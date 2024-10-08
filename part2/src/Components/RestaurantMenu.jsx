// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../Utils/constants";
import useRestaurant from "../Utils/useRestaurant";

const RestaurantMenu = () => {

    const { id } = useParams(); // Destructure to get id
    const res = useRestaurant(id);

    return (
        <div className="menu">
            <h1>Restaurant id : {id}</h1>
           
            <h2>{res?.cards?.[0].card.card.description}</h2>
            <img className="menu-image" src={CDN_URL + res?.cards?.[3].card.card.info.cloudinaryImageId} />
            <h3>{res?.cards?.[3].card.card.info.id} </h3>
            <h3>{res?.cards?.[3].card.card.info.areaName} </h3>
            <ul>
                {res?.cards?.[3].card.card.info.cuisines.map((item, id) => (
                    <li key={id}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;


// {res?.cards?.[3].card.card.brands.text}
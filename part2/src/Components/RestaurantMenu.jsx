import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../Utils/constants";

const RestaurantMenu = () => {
    const [res, setRes] = useState({});
    const { id } = useParams(); // Destructure to get id

    useEffect(() => {
        getRestaurantInfo();
    }, []); // Ensure useEffect runs when id changes

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json = await data.json();
        console.log(json.data);
        setRes(json.data);
    }

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
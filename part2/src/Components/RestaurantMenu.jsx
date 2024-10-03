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
        <>
            <h1>Restaurant id : {id}</h1>
            {/* Check if 'res' has a valid 'tid' property */}
            {/* <h2>{res?.cards?.[0]?.card?.card?.text}</h2> */}
            <h2>{res?.cards?.[0].card.card.description}</h2>
            <img src ={CDN_URL+ res?.cards?.[4].card.card.info.cloudinaryImageId} />

        </>
    );
};

export default RestaurantMenu;

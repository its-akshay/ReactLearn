import { useState, useEffect } from "react";

const useRestaurant = (resId) =>{
    const [res, setRes] = useState({});
    useEffect(() => {
        getRestaurantInfo();
    }, []); // Ensure useEffect runs when id changes

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json = await data.json();
        setRes(json.data);
    }
    return res;
}

export default useRestaurant;
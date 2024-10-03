import RestaurantCard from './RestaurantCard'
import { useEffect, useState } from 'react'
import { SWIGGY } from '../Utils/constants';
import Shimmer from './Shimmer';

function filterData(searchInput, listOfRest) {
    if (!listOfRest || !Array.isArray(listOfRest)) {
        console.error("listOfRest is undefined or not an array");
        return [];
    }
    return listOfRest.filter((res) =>
        res.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
}

export const Body = () => {
    const [listOfRest, setListOfRest] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        try {
            const data = await fetch(SWIGGY);
            const json = await data.json();

            // Debugging the entire structure of the fetched JSON
            console.log("Fetched data structure:", json);

            // Validate that restaurants exist in the expected location
            const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

            // If restaurants data exists and is an array, set the state
            if (restaurants && Array.isArray(restaurants)) {
                console.log("Fetched restaurants:", restaurants); // Debugging log
                setListOfRest(restaurants);
                setAllRestaurants(restaurants);
            } else {
                console.error("Failed to retrieve restaurants or restaurants not an array");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    console.log("Initial render");

    return (
        <div className="body">
            <button
                className="res-filter"
                onClick={() => {
                    if (Array.isArray(allRestaurants)) {
                        const filteredList = allRestaurants.filter((rest) => rest.info.avgRating > 4.5);
                        setListOfRest(filteredList);
                    } else {
                        console.error("allRestaurants is not an array");
                    }
                }}
            >
                Top rated rest
            </button>

            <button
                className="res-filter"
                onClick={() => {
                    if (Array.isArray(allRestaurants)) {
                        const filteredList = allRestaurants.filter((rest) => rest.info.avgRating < 4);
                        setListOfRest(filteredList);
                    } else {
                        console.error("allRestaurants is not an array");
                    }
                }}
            >
                Low rated rest
            </button>

            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="search"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button
                    className="search-btn"
                    onClick={() => {
                        const data = filterData(searchInput, allRestaurants);
                        setListOfRest(data);
                    }}
                >
                    Search
                </button>
            </div>

            <div className="res-container">
                {
                    (!listOfRest || listOfRest.length === 0) ? (
                        <Shimmer />

                    ) : (
                        listOfRest.map((rest) => (
                            // Add null/undefined check for data and id before rendering

                            rest.info && rest.info.id ? (

                                <RestaurantCard key={rest.info.id} resData={rest} />
                            ) : (
                                console.error("Missing", rest)
                            )
                        ))
                    )
                }
            </div>
        </div>
    );
}

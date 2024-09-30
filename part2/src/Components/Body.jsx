import RestaurantCard from './RestaurantCard'
import { useEffect, useState } from 'react'
import { SWIGGY } from '../Utils/constants';

function filterData(searchInput, listOfRest) {
    if (!listOfRest || !Array.isArray(listOfRest)) {
        console.error("listOfRest is undefined or not an array");
        return [];
    }
    const res = listOfRest.filter((res) =>
        res.data.name.toLowerCase().includes(searchInput.toLowerCase()));
    return res;

}

export const Body = () => {
    const [listOfRest, setListOfRest] = useState([]);
    // const [listOfRest, setListOfRest] = useState([]);
    const [allRestaurants, setallRestaurants] = useState([])
    //below have passed the default value for searchInput
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        getRestaurants();
    }, []);
    async function getRestaurants() {
        const data = await fetch(SWIGGY)
        const json = await data.json();
        console.log(json.data.cards[2].id);
        setListOfRest(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        // setallRestaurants(json?.data?.cards[2]?.data?.data.cards);
        setallRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    console.log("Initial render")





    return (

        <div className="body">

            <button className="res-filter" onClick={() => {
                const filteredList = allRestaurants.filter((rest) => rest.data.avgRating > 4);
                setListOfRest(filteredList);
            }}>
                Top rated rest
            </button>

            <button className="res-filter" onClick={() => {
                const filteredList = allRestaurants.filter((rest) => rest.data.avgRating < 4);
                setListOfRest(filteredList);
            }}>
                Low rated rest
            </button>

            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="search"
                    value={searchInput}
                    onChange={(e) => { setSearchInput(e.target.value) }}
                />
                <button
                    className="search-btn"
                    // onClick={() => {
                    //     if (searchInput === "false") {
                    //         setSearchInput("true")
                    //     } else {
                    //         setSearchInput("false")
                    //     }
                    // }}
                    onClick={() => {
                        const data = filterData(searchInput, allRestaurants);
                        setListOfRest(data);
                    }}
                >Search </button>
            </div>


            <div className="res-container">
                {
                    (!listOfRest || listOfRest.length === 0) ? (
                        <h1>No restaurant matching filter</h1>
                    ) : (
                        listOfRest.map((rest) => (
                            <RestaurantCard key={rest.data.id} resData={rest} />
                        ))
                    )
                }

            </div>
        </div >
    )
}

/*
for search function

Initial issue - say i want to find the apple and banana then it will serach like apple and then bananan in that apple like apple and apple.banana
*/
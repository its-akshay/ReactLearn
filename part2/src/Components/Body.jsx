import RestaurantCard from './RestaurantCard'
import { restaurantList } from '../Utils/mockData'
import { useState } from 'react'

export const Body = () => {
    const [listOfRest, setListOfRest] = useState(restaurantList);
    //below have passed the default value for searchInput
    const [searchInput, setSearchInput] = useState("KFC");

    return (

        <div className="body">

            <button className="res-filter" onClick={() => {
                const filteredList = restaurantList.filter((rest) => rest.data.avgRating > 4);
                setListOfRest(filteredList);
            }
            }>Top rated rest
            </button>

            <button className="res-filter" onClick={() => {
                const filteredList = restaurantList.filter((rest) => rest.data.avgRating < 4);
                setListOfRest(filteredList);
            }
            }>Low rated rest
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
                    onClick={() => {
                        if (searchInput === "false") {
                            setSearchInput("true")
                        } else {
                            setSearchInput("false")
                        }
                    }}
                >Search </button>
            </div>
            <h1>
                {searchInput}
            </h1>


            <div className="res-container">
                {
                    listOfRest.map((rest) => (
                        <RestaurantCard key={rest.data.id} resData={rest} />
                    ))
                }
            </div>
        </div >
    )
}

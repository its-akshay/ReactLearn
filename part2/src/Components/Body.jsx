import RestaurantCard from './RestaurantCard'
import { restaurantList } from '../Utils/mockData'
import { useState } from 'react'

function filterData(searchInput, listOfRest){
    const res =  listOfRest.filter((res)=> res.data.name.includes(searchInput))
    return res;
    
}

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
                    // onClick={() => {
                    //     if (searchInput === "false") {
                    //         setSearchInput("true")
                    //     } else {
                    //         setSearchInput("false")
                    //     }
                    // }}
                    onClick = {()=>{
                        const data = filterData(searchInput,listOfRest);
                        setListOfRest(data);
                    }}
                >Search </button>
            </div>
            

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

/*
for search function

Initial issue - say i want to find the apple and banana then it will serach like apple and then bananan in that apple like apple and apple.banana
*/
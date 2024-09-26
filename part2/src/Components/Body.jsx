import RestaurantCard from './RestaurantCard'
import { restaurantList } from '../Utils/mockData'
import { useState } from 'react'

export const Body = () => {
    const [listOfRest, setListOfRest] = useState(restaurantList);

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


            <div className = "search-container">
                <input type="text" className="search-input" placeholder="search" />
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

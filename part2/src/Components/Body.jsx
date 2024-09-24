import RestaurantCard from './RestaurantCard'


export const Body = ({resList}) => {
  return (
    <div className="body">
        <div className="res-search">
            search
        </div>
        <div className="res-container">
            {
                resList.map((restaurant)=>(
                    <RestaurantCard key ={restaurant.id} resData = {restaurant} />
                ))
            }
        </div>
    </div>
  )
}

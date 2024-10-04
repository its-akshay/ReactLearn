// whenever we loads the data we see

import './Index.css'

const Shimmer = () => {
  return (
    <>
      <div className="restaurantList">

        {Array(10).fill("").map((e,index) => (<div key={index} className="shimmer-card"></div>))}
      </div>
      <h1>Shimmer is loading</h1>
    </>
  )
}

export default Shimmer
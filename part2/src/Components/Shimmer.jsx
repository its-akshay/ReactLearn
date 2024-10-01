// whenever we loads the data we see



const Shimmer = () => {
  return (
    <>
      <h1>Shimmer is loading</h1>
      <div className="restaurantList">
        {
          Array(10)
            .fill("")
            .map((e) => <div className="shimmer-card"></div>)

        }
      </div>

    </>
  )
}

export default Shimmer
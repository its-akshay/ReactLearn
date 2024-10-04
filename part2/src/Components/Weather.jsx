import { useEffect, useState } from "react"
import './Index.css'
import { WEATHER } from "../Utils/constants"
//unable to find any weather api so used the github api
const Weather = () => {
    const [weather, setWeather] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            setTimeout(async () => {
                // const res = await fetch("https://goweather.herokuapp.com/weather/indore")
                const res = await fetch(WEATHER)

                
                const data = await res.json();
                console.log(data)
                setWeather(data);
            }, 2000)
        }
        fetchData();
    }, [])

    return (
        <div>
            <div className="Weather-component">
                {weather ? weather.city.name : "Loading..."}
                <br />
                {weather ? weather.list[0].weather[0].description : "Loading..."}
                <br />
                {weather ? weather.list[0].main.temp : "Loading..."}
                
            </div>
        </div>
    )

}

export default Weather;




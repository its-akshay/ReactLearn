import { useEffect, useState } from "react"
import "./Weather.css"
//unable to find any weather api so used the github api
const Weather = () => {
    const [weather, setWeather] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            setTimeout(async () => {
                // const res = await fetch("https://goweather.herokuapp.com/weather/indore")
                const res = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=22.719568&lon=75.857727&appid=2e5924a5b437f0213aeed9a20187d3e6&units=imperial")

                
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




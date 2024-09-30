import { useEffect, useState } from "react"

//unable to find any weather api so used the github api
const Weather = () => {
    const [weather, setWeather] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            setTimeout(async () => {
                const res = await fetch("https://goweather.herokuapp.com/weather/indore")
                const data = await res.json();
                console.log(data)
                setWeather(data);
            }, 2000)
        }
        fetchData();
    }, [])

    return (
        <div>
            <div>
                {weather ? weather.temperature : "Loading..."}
                <br />
                {weather ? weather.description : "Loading..."}
                
            </div>
        </div>
    )

}

export default Weather;




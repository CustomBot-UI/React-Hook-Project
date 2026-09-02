import Search from "../serach";
import { useState } from "react";
import { useEffect } from "react";

export default function Weather() {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    async function fetchWeatherData(param) {

        setLoading(true);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(param)}&appid=89c6119325470eab674991f7ae1ba5cd`);
            const data = await response.json();
            console.log(data, "data");
            if (response.ok) {
                setWeatherData(data);
            }
        }
        catch (e) {
            console.log("Error fetching weather data:", e);
        }
        finally {
            setLoading(false);
        }


    }

    async function handleSearch(search) {
        fetchWeatherData(search);

    }

    function getCurrentDate() {
        return new Date().toLocaleDateString('en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });
    }

    useEffect(() => {
        fetchWeatherData("London");
    }
        , []);

    console.log(weatherData, "weatherData");

    return <div className="App">
        <Search
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
        />
        {
            loading ? <div className = "Loading">Loading...</div> : <div>
                <div className="city-name">
                    <h2>{weatherData?.name},
                        <span>{weatherData?.sys?.country}</span>
                    </h2>
                </div>
                <div className="date">
                    <span>{getCurrentDate()}</span>

                </div>
                <div> {weatherData?.main?.temp} </div>
                <p className="description"> {weatherData?.weather?.[0]?.description || ""} </p>
                <div className = "weather-info">
                    <div>
                        <p className = "wind">{weatherData?.wind?.speed} m/s</p>
                        <p>Wind Speed</p>
                    </div>
                </div>
                <div>
                    <p className = "humidity">{weatherData?.main?.humidity} %</p>
                    <p>Humidity</p>
                </div>
            </div>
        }
        Weather
    </div>
}

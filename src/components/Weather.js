import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/action/weatherActions";

const Weather = () => {
  const { weatherData, error, isLoading } = useSelector((state) => state.weather);

  const dispatch = useDispatch();

  const [city, setCity] = useState("");

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchWeather(city));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter city name" value={city} onChange={handleCityChange} />
        <button type="submit">Get Weather</button>
      </form>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div>
          {weatherData && !error ? (
            <>
              <h2>{weatherData.name}</h2>
              <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(0)}°C</p>
              <p>humidity : {weatherData.main.humidity}%</p>
            </>
          ) : (
            <>
              <h2>{error?.message}</h2>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Weather;

import axios from "axios";
export const FETCH_WEATHER_REQUEST = "FETCH_WEATHER_REQUEST";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE";

export const fetchWeatherRequest = () => ({
  type: FETCH_WEATHER_REQUEST,
});

export const fetchWeatherSuccess = (weather) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: weather,
});

export const fetchWeatherFailure = (error) => ({
  type: FETCH_WEATHER_FAILURE,
  payload: error,
});

// Currying function

export const fetchWeather = (city) => async (dispatch) => {
  try {
    dispatch(fetchWeatherRequest());
    const api = axios.create({
      baseURL: "https://api.openweathermap.org/data/2.5/",
      params: {
        appid: process.env.REACT_APP_WEATHER_API,
        q: city,
      },
    });
    const response = await api.get("/weather");
    dispatch(fetchWeatherSuccess(response.data));
  } catch (error) {
    dispatch(fetchWeatherFailure(error.response.data));
  }
};

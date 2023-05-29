const initialState = {
  weatherData: null,
  isLoading: false,
  error: null,
};
const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WEATHER_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "FETCH_WEATHER_SUCCESS":
      return { ...state, weatherData: action.payload, isLoading: false };
    case "FETCH_WEATHER_FAILURE":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default weatherReducer;

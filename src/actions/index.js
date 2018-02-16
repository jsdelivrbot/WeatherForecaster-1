import axios from 'axios';

const API_KEY = "fad5c540397c4174fb08db61d2cae209";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},ca`;
    const request = axios.get(url);
    // thank for redux-promise,
    // the request pass into payload is automatically converted into data instead of promise
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
import axios from 'axios';

const API_KEY='95f1e583205ea73a14fe572ef730145d';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    //  npm install --save axios
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
import axios from "axios";
import { place } from "../interfaces/components/PlacesInterface";

const paramsMapbox = {
    'access_token': process.env.REACT_APP_MAPBOX_KEY,
    'limit': 5,
    'language': 'en'
}


const paramsCurrentWeather = {
    'key': process.env.REACT_APP_WEATHERAPI_KEY,
    'days': 7
}


export const findCity = async (place:string = '') => {
    try {
        const resp = await axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
            { params: paramsMapbox }
        )
        let array: place[] = resp.data.features.map((place: { id: string; place_name: string; center: number[]; }) => ({
            id: place.id,
            name: place.place_name,
            lng: place.center[0],
            lat: place.center[1],
        }));
        getWeatherWeek(array[0].lat,array[0].lng)
        return array;
        // getCurrentWeather(array[0].lat,array[0].lng)
        // getWeatherTwoDays(array[0].lat,array[0].lng)
    } catch (error) {
        return [];
    }
}


export const getCurrentWeather = async (lat: number, lon: number) => {

    try {
        const resp = await axios.get(
            `http://api.weatherapi.com/v1/current.json`,
            { params: { ...paramsCurrentWeather, 'q': (lat + ',' + lon) } }
        )

        // console.log(resp.data.current)

    } catch (error) {
        console.log(error);
    }

}

export const getWeatherWeek = async (lat: number, lon: number) => {

    try {
        const resp = await axios.get(
            `http://api.weatherapi.com/v1/forecast.json`,
            { params: { ...paramsCurrentWeather, 'q': (lat + ',' + lon) } }
        )

        console.log(resp.data)

    } catch (error) {
        console.log(error);
    }

}

export const getWeatherTwoDays = async (lat: number, lon: number) => {

    try {
        const resp = await axios.get(
            `http://api.weatherapi.com/v1/forecast.json`,
            { params: { ...paramsCurrentWeather, 'q': (lat + ',' + lon), 'days': 2 } }
        )

        console.log(resp.data.forecast.forecastday[0].hour)
        console.log(resp.data.forecast.forecastday[1].hour)

    } catch (error) {
        console.log(error);
    }

}

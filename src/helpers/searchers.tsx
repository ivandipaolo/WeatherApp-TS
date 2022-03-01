import axios from "axios";
import moment from "moment";
import { place } from "../interfaces/components/PlacesInterface";

const paramsMapbox = {
    'access_token': process.env.REACT_APP_MAPBOX_KEY,
    'limit': 5,
    'language': 'en'
}

const headersAmbee = {
    'x-api-key': process.env.REACT_APP_AMBEE_KEY!,
    'Content-type': 'application/json'
}

export const findCity = async (place: string = '') => {
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
        return array;
    } catch (error) {
        return [];
    }
}

export const getWeatherWeek = async (lat: number, lon: number) => {
    const today = new Date()
    let from = moment(today.setDate(today.getDate())).format('YYYY-MM-DD HH:MM:SS');
    let to = moment(today.setDate(today.getDate() + 7)).format('YYYY-MM-DD HH:MM:SS');
    try {
        const resp = await axios.get(
            `https://api.ambeedata.com/weather/forecast/by-lat-lng`,
            {
                params: { lat, 'lng': lon, 'filter': 'daily', from, to },
                headers: {
                    ...headersAmbee
                }
            }
        )
        console.log(resp)
    } catch (error) {
        console.log(error);
    }
}

export const getWeatherTwoDays = async (lat: number, lon: number) => {
    const today = new Date()
    let from = moment(today.setDate(today.getDate())).format('YYYY-MM-DD HH:MM:SS');
    let to = moment(today.setDate(today.getDate() + 2)).format('YYYY-MM-DD HH:MM:SS');
    try {
        const resp = await axios.get(
            `https://api.ambeedata.com/weather/forecast/by-lat-lng`,
            {
                params: { lat, 'lng': lon, 'filter': 'hourly', from, to },
                headers: {
                    ...headersAmbee
                }
            }
        )
        console.log(resp)
    } catch (error) {
        console.log(error);
    }
}

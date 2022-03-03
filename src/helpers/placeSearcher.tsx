import axios from "axios";
import { place } from "../interfaces/components/PlacesInterface";

const paramsMapbox = {
    'access_token': process.env.REACT_APP_MAPBOX_KEY,
    'limit': 5,
    'language': 'en'
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
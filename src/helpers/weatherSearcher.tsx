import axios from "axios";
import moment from "moment";

const headersAmbee = {
    'x-api-key': process.env.REACT_APP_AMBEE_KEY!,
    'Content-type': 'application/json'
}


export const getWeatherCurrent = async (lat: number, lon: number) => {
    try {
        const resp = await axios.get(
            `https://api.ambeedata.com/weather/latest/by-lat-lng`,
            {
                params: { lat, 'lng': lon},
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

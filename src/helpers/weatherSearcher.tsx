import axios from "axios";
import moment from "moment";
import { Current, Week } from '../interfaces/redux/WeatherInterface';

const paramsOpenWeather = {
    'appid': process.env.REACT_APP_OPENWEATHER_KEY
}

export const getWeather = async (lat: number, lon: number) => {
    try {
        const resp = await axios.get(
            `https://api.openweathermap.org/data/2.5/onecall`,
            {
                params: { ...paramsOpenWeather, lat, lon, minutely: ['minutely', 'alerts'] }
            }
        )

        const {
            current: {
                feels_like: feelsLike,
                humidity,
                temp,
                weather: [
                    {
                        description,
                        icon,
                        main
                    }
                ]
            },
            daily,
            hourly
        } = resp.data;
        
        const current: Current = {
            feelsLike,
            humidity,
            temp,
            description,
            icon,
            main
        };

        const week: Week = daily.map((day: { feels_like: { day: number; }; temp: { min: number; max: number; }; weather: { description: string; icon: string; main: string; }[]; }) => ({
            feelsLike: day.feels_like.day,
            tempMin: day.temp.min,
            tempMax: day.temp.max,
            description: day.weather[0].description,
            icon: day.weather[0].icon,
            main: day.weather[0].main,
        }))

        const twoDays = hourly.map((hour: { feels_like: number; temp: number; weather: { description: string; icon: string; main: string; }[]; }) => ({
            feelsLike: hour.feels_like,
            temp: hour.temp,
            description: hour.weather[0].description,
            icon: hour.weather[0].icon,
            main: hour.weather[0].main,
        }))

        return ({
            current,
            week,
            twoDays
        })
    } catch (error) {
        console.log(error);
    }
}

/* eslint-disable no-undef */
import { WeatherInterface, TwoDays } from '../../interfaces/redux/WeatherInterface';
import {
    ActionType,
    Types
} from '../types/types';

const initialState: WeatherInterface = {

    current: {
        feelsLike: 0,
        humidity: 0,
        temp: 0,
        description: "",
        icon: "",
        main: "",
    },
    twoDays: [{
        apparentTemperature: 0,
        precipProbability: 0,
        summary: "",
        temperature: 0,
        windSpeed: 0,
        time: 0,
    }],
    week: [{
        feelsLike: 0,
        tempMin: 0,
        tempMax: 0,
        description: "",
        icon: "",
        main: ""
    }]
}

export const weatherReducer = (state = initialState, action = {} as ActionType) => {
    switch (action.type) {
        case Types.setCurrentWeather:
            return {
                ...state,
                current: action.payload
            };
        case Types.setTwoDaysWeather:
            return {
                ...state,
                twoDays: action.payload
            };
        case Types.setWeekWeather:
            return {
                ...state,
                week: action.payload
            };
        default:
            return state;
    }
};

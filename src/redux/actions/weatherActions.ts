
import { Types, ActionType } from '../types/types';
import { Current, TwoDays, Week } from '../../interfaces/redux/WeatherInterface';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
// import { getWeatherCurrent, getWeatherTwoDays } from '../../helpers/weatherSearcher';

export const startSetCurrentWeather = (lat: number, lng: number): ThunkAction<void, {}, {}, AnyAction> => async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
    // const current = await getWeatherCurrent(lat, lng);
    // const twoDays = await getWeatherTwoDays(lat,lng)
    // const week = await getWeatherWeek(lat,lng)
    // dispatch(setCurrentWeather(current));
    // dispatch(setTwoDaysWeather(twoDays));
    // dispatch(setWeekWeather(week));

};

export const setCurrentWeather = (data: Current) => ({
    type: Types.setCurrentWeather,
    payload: data
});

export const setTwoDaysWeather = (data: TwoDays) => ({
    type: Types.setTwoDaysWeather,
    payload: data
});

export const setWeekWeather = (data: Week) => ({
    type: Types.setWeekWeather,
    payload: data
});

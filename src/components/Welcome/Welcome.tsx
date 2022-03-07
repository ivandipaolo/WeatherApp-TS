import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import { RootState } from '../../redux/store/store';

import { StyledMessage, StyledWelcome } from './StyledWelcome';
import { WeatherIcon } from '../WeatherIcon';
import { kelvinToCelcius } from '../../helpers/unitConvertion';
import { getWeather } from '../../helpers/weatherSearcher';
import { setCurrentWeather } from '../../redux/actions/weatherActions';

import locationIcon from '../../assets/locationIcon.png';

export const Welcome = () => {
    const [location, setLocation] = useState<boolean>()
    const [error, setError] = useState<string>()

    const { current } = useSelector((state: RootState) => state.WeatherInterface)
    const { dt, feelsLike, temp, main, id, icon } = current;
    const date = dayjs(new Date(dt * 1000))

    const dispatch = useDispatch();

    const handleSuccess = async (position: { coords: { latitude: any; longitude: any; }; }) => {
        const { latitude, longitude } = position.coords;
        setLocation(true);
        const weather = await getWeather(latitude, longitude);
        if (weather) {
            dispatch(setCurrentWeather(weather.current));
        }
    };

    const handleError = (error: { message: any; }) => {
        setError(error.message);
    };

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
        }
    }, [])

    return (
        <>
            {
                location
                    ?
                    <StyledWelcome>
                        <div id='info'>
                            <div>
                                <h1>Your current weather is:</h1>
                            </div>
                        </div>
                        <div id='weather'>
                            <p>Today</p>
                            <div id='temperature'>
                                <WeatherIcon id={id} icon={icon} size={150} />
                                <div>
                                    <h4><span>Feels-Like:</span> {kelvinToCelcius(feelsLike)}°</h4>
                                    <h5><span>Temperature:</span> {kelvinToCelcius(temp)}°</h5>
                                </div>
                            </div>
                            <h5>{main}</h5>
                        </div>
                        <div id="date">
                            <p>{date.format('MMM, dddd YYYY')}</p>
                            <h3>{date.format('HH:mm')}</h3>
                        </div>
                    </StyledWelcome >
                    : error
                        ?
                        <StyledMessage>
                            <WeatherIcon id={200} icon='n' size={200} />
                            <h1>There was a problem getting your curren position but don't worry, you can search for a place to see its weather.</h1>
                        </StyledMessage>
                        :
                        <StyledMessage>
                            <img src={locationIcon} />
                            <h1>Please, let us have access to your current possition in order to show you your current weather.</h1>
                        </StyledMessage>
            }
        </>
    )
}

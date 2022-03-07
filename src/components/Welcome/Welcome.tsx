import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import { RootState } from '../../redux/store/store';

import { StyledMessage } from './StyledWelcome';
import { WeatherIcon } from '../WeatherIcon';
import { kelvinToCelcius } from '../../helpers/unitConvertion';
import { getWeather } from '../../helpers/weatherSearcher';
import { setCurrentWeather, setWeekWeather, setTwoDaysWeather } from '../../redux/actions/weatherActions';

import locationIcon from '../../assets/locationIcon.png';
import { ForecastSwitch } from '../ForecastSwitch/ForecastSwitch';
import { ForecastWeek } from '../ForecastWeek/ForecastWeek';
import { ForecastTwoDays } from '../ForecastTwoDays/ForecastTwoDays';
import { StyledCurrentWeather } from '../CurrentWeather/StyledCurrentWeather';

export const Welcome = () => {
    const [location, setLocation] = useState<boolean>()
    const [error, setError] = useState<string>()

    const { current } = useSelector((state: RootState) => state.WeatherInterface)
    const { forecast } = useSelector((state: RootState) => state.uiInterface)

    const { dt, feelsLike, temp, main, id, icon } = current;
    const date = dayjs(new Date(dt * 1000))

    const dispatch = useDispatch();

    const handleSuccess = async (position: { coords: { latitude: any; longitude: any; }; }) => {
        const { latitude, longitude } = position.coords;
        setLocation(true);
        const weather = await getWeather(latitude, longitude);
        if (weather) {
            dispatch(setCurrentWeather(weather.current));
            dispatch(setWeekWeather(weather.week));
            dispatch(setTwoDaysWeather(weather.twoDays));
        }
    };

    const handleError = (error: { message: any; }) => {
        setError(error.message);
    };

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {
                location
                    ?
                    <>
                        <StyledCurrentWeather>
                            <div id='info'>
                                <div>
                                    <h1>Your current weather is:</h1>
                                    <p>{date.format('MMM, dddd YYYY')}</p>
                                </div>
                                <h3>{date.format('HH:mm')}</h3>
                            </div>
                            <div id='weather'>
                                <p>Today</p>
                                <div id='temperature'>
                                    <WeatherIcon id={id} icon={icon} size={100} />
                                    <div>
                                        <h4><span>Feels-Like:</span> {kelvinToCelcius(feelsLike)}°</h4>
                                        <h5><span>Temperature:</span> {kelvinToCelcius(temp)}°</h5>
                                    </div>
                                </div>
                                <h5>{main}</h5>
                            </div>
                        </StyledCurrentWeather>
                        <div>
                            <ForecastSwitch />
                            {
                                forecast === 'DAYS'
                                    ? <ForecastWeek />
                                    : <ForecastTwoDays />
                            }
                        </div>
                    </>
                    : error
                        ?
                        <StyledMessage>
                            <WeatherIcon id={200} icon='n' size={200} />
                            <h1>There was a problem getting your curren position but don't worry, you can search for a place to see its weather.</h1>
                        </StyledMessage>
                        :
                        <StyledMessage>
                            <img src={locationIcon} alt='locationIcon' />
                            <h1>Please, let us have access to your current possition in order to show you your current weather.</h1>
                        </StyledMessage>
            }
        </>
    )
}

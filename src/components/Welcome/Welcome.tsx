import { useState, useEffect } from 'react';
import { StyledCurrentWeather } from '../CurrentWeather/StyledCurrentWeather';
import { useSelector, useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import { RootState } from '../../redux/store/store';
import { WeatherIcon } from '../WeatherIcon';
import { kelvinToCelcius } from '../../helpers/unitConvertion';
import { getWeather } from '../../helpers/weatherSearcher';
import { setCurrentWeather } from '../../redux/actions/weatherActions';

export const Welcome = () => {
    const [geolocation, setGeolocation] = useState<boolean>(false)
    const { current } = useSelector((state: RootState) => state.WeatherInterface)
    const { selectedPlace } = useSelector((state: RootState) => state.placeInterface)
    const { dt, feelsLike, temp, main, id, icon } = current;
    const date = dayjs(new Date(dt * 1000))

    const dispatch = useDispatch();

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async function (position) {
                setGeolocation(true);
                const weather = await getWeather(position.coords.latitude, position.coords.longitude);
                if (weather) {
                    dispatch(setCurrentWeather(weather.current));
                }
            });
        }
    }, [])

    


    return (
        <>
            {
                geolocation
                    ?
                    <StyledCurrentWeather>
                        <div id='info'>
                            <div>
                                <h1>{
                                    isNaN(selectedPlace.name.split(',')[0])
                                        ? selectedPlace.name.split(',')[0]
                                        : selectedPlace.name.split(',')[1]
                                }</h1>
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
                    </StyledCurrentWeather >
                    :
                    <>
                    </>
            }
        </>
    )
}

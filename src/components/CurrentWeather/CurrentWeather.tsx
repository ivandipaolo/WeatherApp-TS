import { useSelector } from 'react-redux';
import { StyledCurrentWeather } from './StyledCurrentWeather';
import { RootState } from '../../redux/store/store';
import { kelvinToCelcius } from '../../helpers/unitConvertion';
import dayjs from 'dayjs';
import { WeatherIcon } from '../WeatherIcon';

export const CurrentWeather: React.FC = () => {
  const { current } = useSelector((state: RootState) => state.WeatherInterface)
  const { dt, feelsLike, temp, humidity, id, icon } = current;
  const date = dayjs(new Date(dt * 1000))
  return (
    <StyledCurrentWeather>
      <WeatherIcon hour={date.hour()} id={id}/>
      <p>{date.format('dddd, HH:mm')}</p>
      <p>Feels-like: {kelvinToCelcius(feelsLike)}°</p>
      <p>Temperature: {kelvinToCelcius(temp)}°</p>
      <p>Humidity: {humidity}g/m³</p>
    </StyledCurrentWeather>
  )
}

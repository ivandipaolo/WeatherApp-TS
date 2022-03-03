
import { useSelector } from 'react-redux';
import { StyledCurrentWeather } from './StyledCurrentWeather';
import { RootState } from '../../redux/store/store';
import { WeatherInterface } from '../../interfaces/redux/WeatherInterface';
import { kelvinToCelcius } from '../../helpers/unitConvertion';

export const CurrentWeather: React.FC = () => {

  const { current } = useSelector((state: RootState) => state.WeatherInterface)

  return (
    <StyledCurrentWeather>
      <p>Feels-like:{kelvinToCelcius(current.feelsLike)}°</p>
      <p>Temperature: {kelvinToCelcius(current.temp)}°</p>
      <p>Humidity: {kelvinToCelcius(current.temp)}g/m³</p>
      <p>Description: {current.description}</p>
      <img src={`http://openweathermap.org/img/wn/${current.icon}.png`} alt="" />
    </StyledCurrentWeather>
  )
}

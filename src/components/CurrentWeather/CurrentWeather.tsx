
import { useSelector } from 'react-redux';
import { StyledCurrentWeather } from './StyledCurrentWeather';
import { RootState } from '../../redux/store/store';
import { WeatherInterface } from '../../interfaces/redux/WeatherInterface';

export const CurrentWeather: React.FC = () => {

  const { current } = useSelector((state: RootState) => state.WeatherInterface)

  return (
    <StyledCurrentWeather>
      <p>Sensación térmica:{Math.round(current.feelsLike - 273.15)}</p>
      <p>Temperatura actual: {Math.round(current.temp - 273.15)}</p>
    </StyledCurrentWeather>
  )
}

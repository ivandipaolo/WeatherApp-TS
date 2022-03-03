import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { StyledForecastedHour } from './StyledForecastTwoDays';
import { TwoDays } from '../../interfaces/redux/WeatherInterface';

export const ForecastedHour = ({ hour }: any) => {
    return (
        <StyledForecastedHour>
            <FaArrowDown id="arrowMin" size={15} color='white' />
            <FaArrowUp id="arrowMax" size={15} color='white' />
            <p>{hour.feelsLike}</p>
        </StyledForecastedHour>
    )
}

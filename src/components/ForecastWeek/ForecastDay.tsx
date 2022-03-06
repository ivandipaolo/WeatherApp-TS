import { FC } from 'react';
import dayjs from 'dayjs';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { IWeekMapped } from '../../interfaces/redux/WeatherInterface';
import { kelvinToCelcius } from '../../helpers/unitConvertion';
import { WeatherIcon } from '../WeatherIcon';
import { StyledForecastedDay } from './StyledForecastWeek';

interface Props {
    day: IWeekMapped
}

export const ForecastDay: FC<Props> = ({ day }) => {
    const { id, icon, main, dt } = day;
    const date = dayjs.unix(dt)
    return (
        <StyledForecastedDay>
            <h3>{date.format('dddd')}</h3>
            <div>
                <WeatherIcon hour={date.hour()} id={id} icon={icon} />
                <div id='temperatures'>
                    <h3>{kelvinToCelcius(day.tempMax)}</h3>
                    <h4>{kelvinToCelcius(day.tempMin)}</h4>
                </div>
            </div>
            <h5>{main}</h5>
        </StyledForecastedDay>
    )
}

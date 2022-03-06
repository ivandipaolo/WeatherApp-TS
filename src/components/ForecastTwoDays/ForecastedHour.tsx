import { FC } from 'react';

import { StyledForecastedHour } from './StyledForecastTwoDays';
import { ITwoDaysMapped } from '../../interfaces/redux/WeatherInterface';
import { kelvinToCelcius } from '../../helpers/unitConvertion';
import dayjs from 'dayjs';
import { WeatherIcon } from '../WeatherIcon';

interface Props {
    hour: ITwoDaysMapped
}

export const ForecastedHour: FC<Props> = ({ hour }) => {
    const { id, icon } = hour;
    const date = dayjs.unix(hour.dt)
    return (
        <StyledForecastedHour>
            <h4>{date.format('HH:00')}</h4>
            <WeatherIcon hour={date.hour()} id={id} icon={icon} />
            <h3>{kelvinToCelcius(hour.feelsLike)}°</h3>
        </StyledForecastedHour>
    )
}

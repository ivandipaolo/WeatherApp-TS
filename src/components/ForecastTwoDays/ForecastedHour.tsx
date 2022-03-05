import { FC } from 'react';

import { StyledForecastedHour } from './StyledForecastTwoDays';
import { ITwoDaysMapped } from '../../interfaces/redux/WeatherInterface';
import { kelvinToCelcius } from '../../helpers/unitConvertion';
import dayjs from 'dayjs';

interface Props {
    hour: ITwoDaysMapped
}

export const ForecastedHour: FC<Props> = ({ hour }) => {
    const date = dayjs.unix(hour.dt)
    return (
        <StyledForecastedHour>
            <p>{date.format('HH')}</p>
            <p>{kelvinToCelcius(hour.feelsLike)}</p>
        </StyledForecastedHour>
    )
}

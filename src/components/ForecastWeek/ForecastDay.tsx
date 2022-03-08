import { FC } from 'react';
import dayjs from 'dayjs';

import { kelvinToCelcius } from '../../helpers/unitConvertion';
import { IWeekMapped } from '../../interfaces/redux/WeatherInterface';
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
                <div id="icon">
                    <WeatherIcon id={id} icon={icon} size={80} />
                    <h5>{main}</h5>
                </div>
                <div id='temperatures'>
                    <h3>{kelvinToCelcius(day.tempMax)}</h3>
                    <h4>{kelvinToCelcius(day.tempMin)}</h4>
                </div>
            </div>
        </StyledForecastedDay>
    )
}

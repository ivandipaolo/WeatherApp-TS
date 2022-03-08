import { FC, useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { WeatherIcon } from '../WeatherIcon';
import { ITwoDaysMapped } from '../../interfaces/redux/WeatherInterface';
import { kelvinToCelcius } from '../../helpers/unitConvertion';
import { StyledForecastedHour } from './StyledForecastTwoDays';

interface Props {
    hour: ITwoDaysMapped
}

export const ForecastedHour: FC<Props> = ({ hour }) => {
    const [newDay, setNewDay] = useState(true)

    const { id, icon } = hour;
    const date = dayjs.unix(hour.dt)

    const today = new Date();

    useEffect(() => {
        if (date.day() !== today.getDay()) {
            setNewDay(true)
        } else {
            setNewDay(false)
        }
        // eslint-disable-next-line
    }, [date])

    return (
        <StyledForecastedHour>
            {
                newDay && <p>{date.format('DD/MM')}</p>
            }
            <h4>{date.format('HH:00')}</h4>
            <WeatherIcon id={id} icon={icon} size={70} />
            <h3>{kelvinToCelcius(hour.feelsLike)}°</h3>
        </StyledForecastedHour>
    )
}

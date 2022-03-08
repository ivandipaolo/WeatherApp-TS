import { FC, useEffect, useState } from 'react';

import { StyledForecastedHour } from './StyledForecastTwoDays';
import { ITwoDaysMapped } from '../../interfaces/redux/WeatherInterface';
import { kelvinToCelcius } from '../../helpers/unitConvertion';
import dayjs from 'dayjs';
import { WeatherIcon } from '../WeatherIcon';

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
    }, [])


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

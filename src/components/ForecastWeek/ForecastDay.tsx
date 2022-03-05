import { FC } from 'react';
import dayjs from 'dayjs';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { IWeekMapped } from '../../interfaces/redux/WeatherInterface';
import { kelvinToCelcius } from '../../helpers/unitConvertion';

interface Props {
    day: IWeekMapped
}

export const ForecastDay: FC<Props> = ({ day }) => {
    const date = dayjs(new Date(day.dt * 1000))
    return (
        <>
            <p>{date.format('ddd')}</p>
            <FaArrowDown id="arrowMin" size={15} color='white' />
            <p>{kelvinToCelcius(day.tempMin)}</p>
            <p>{kelvinToCelcius(day.tempMax)}</p>
            <FaArrowUp id="arrowMax" size={15} color='white' />
        </>
    )
}

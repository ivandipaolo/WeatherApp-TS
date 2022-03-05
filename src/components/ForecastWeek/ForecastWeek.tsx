import React from 'react'
import { StyledForecastWeek } from './StyledForecastWeek';
import { RootState } from '../../redux/store/store';
import { useSelector } from 'react-redux';
import { IWeekMapped } from '../../interfaces/redux/WeatherInterface';
import { ForecastDay } from './ForecastDay';
export const ForecastWeek = () => {

  const { week } = useSelector((state: RootState) => state.WeatherInterface)

  return (
    <StyledForecastWeek>
      {week.map((day: IWeekMapped, index: number) => (
        index > 0 &&
        <ForecastDay key={day.dt} day={day} />
      ))}
    </StyledForecastWeek>
  )
}

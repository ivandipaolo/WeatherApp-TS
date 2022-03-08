import React from 'react'
import { StyledForecastTwoDays } from './StyledForecastTwoDays'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { ForecastedHour } from './ForecastedHour';
import { ITwoDaysMapped } from '../../interfaces/redux/WeatherInterface';
import dayjs from 'dayjs';
import { useState } from 'react';

export const ForecastTwoDays = () => {

  const { twoDays } = useSelector((state: RootState) => state.WeatherInterface)

  
  return (
    <StyledForecastTwoDays>
      {
        twoDays.map((hour: ITwoDaysMapped, index: number) => (
          index > 0 && <ForecastedHour key={hour.dt} hour={hour} />
        ))
      }
    </StyledForecastTwoDays>
  )
}

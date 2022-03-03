import React from 'react'
import { StyledForecastTwoDays } from './StyledForecastTwoDays'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { ForecastedHour } from './ForecastedHour';
import { TwoDays } from '../../interfaces/redux/WeatherInterface';

export const ForecastTwoDays = () => {

  const { twoDays } = useSelector((state: RootState) => state.WeatherInterface)

  return (
    <StyledForecastTwoDays>
      {
        twoDays.map((hour:TwoDays) => (
          <ForecastedHour hour={hour}/>
        ))
      }
    </StyledForecastTwoDays>
  )
}

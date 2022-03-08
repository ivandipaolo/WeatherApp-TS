import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

import { ForecastedHour } from './ForecastedHour';
import { ITwoDaysMapped } from '../../interfaces/redux/WeatherInterface';
import { StyledForecastTwoDays } from './StyledForecastTwoDays'

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

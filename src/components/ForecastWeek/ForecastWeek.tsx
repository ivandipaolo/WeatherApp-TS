import { RootState } from '../../redux/store/store';
import { useSelector } from 'react-redux';

import { IWeekMapped } from '../../interfaces/redux/WeatherInterface';
import { ForecastDay } from './ForecastDay';
import { StyledForecastWeek } from './StyledForecastWeek';

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

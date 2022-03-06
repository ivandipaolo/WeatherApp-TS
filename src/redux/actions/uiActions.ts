import { Types } from '../types/types';
import { ForecastMode, TemperatureUnit, ThemeMode } from '../../interfaces/redux/UiInterface';

export const setThemeMode = (data: ThemeMode) => ({
  type: Types.setThemeMode,
  payload: data
});

export const setCurrentTemperatureUnit = (data: TemperatureUnit) => ({
  type: Types.setTemperatureUnit,
  payload: data
});

export const setForecast = (data: ForecastMode) => ({
  type: Types.setForecast,
  payload: data
});
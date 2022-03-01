import { Types } from '../../types/types';

export const setThemeMode = (data: string) => ({
  type: Types.setThemeMode,
  payload: data
});

export const setCurrentTemperatureUnit = (data: string) => ({
  type: Types.setTemperatureUnit,
  payload: data
});
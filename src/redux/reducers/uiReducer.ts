/* eslint-disable no-undef */
import { UiInterface } from '../../interfaces/redux/UiInterface';
import {
  ThemeModes,
  ActionType,
  TemperatureUnit,
  Types
} from '../types/types';

const initialState: UiInterface = {
  themeMode:  ThemeModes.LIGHT,
  temperatureUnit: TemperatureUnit.CEL,
};

export const uiReducer = (state = initialState, action = {} as ActionType) => {
  switch (action.type) {
    case Types.setThemeMode:
      return {
        ...state,
        themeMode: action.payload
      };
    case Types.setTemperatureUnit:
      return {
        ...state,
        temperatureUnit: action.payload
      };
    default:
      return state;
  }
};

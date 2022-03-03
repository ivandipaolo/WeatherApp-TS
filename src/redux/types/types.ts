export type ActionType = {
  type: string;
  payload: string;
};

export enum Types {
  /*
   *  UiInterface
   */
  setThemeMode = '[UI] Set theme mode',
  setTemperatureUnit = '[UI] Set temperature unit',
  /*
   *  SelectedPlaceInteface
   */
  setSelectedPlace = '[Pl] Set selected place'
}

export enum ThemeModes {
  LIGHT = 'LIGHT',
  DARK = 'DARK'
}

export enum TemperatureUnit {
  FAR = '° F',
  CEL = '° C',
  KEL = '° K'
}
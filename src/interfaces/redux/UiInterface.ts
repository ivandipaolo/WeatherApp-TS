export type ThemeMode = string | 'LIGHT' | 'DARK';

export type TemperatureUnit = string | '° F' | '° C' | '° K';

export interface UiInterface {
    themeMode: ThemeMode;
    temperatureUnit: TemperatureUnit;
}
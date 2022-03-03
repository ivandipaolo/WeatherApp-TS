export interface WeatherInterface {
    current: Current,
    twoDays: TwoDays[],
    week: Week[]
}

export interface Current {
    feelsLike: number,
    humidity: number,
    temp: number,
    description: string,
    icon: string,
    main: string
}

export interface TwoDays {
    apparentTemperature: number,
    precipProbability: number,
    summary: string,
    temperature: number,
    windSpeed: number,
    time: number
}

export interface Week {
    feelsLike: number,
    tempMin: number,
    tempMax: number,
    description: string,
    icon: string,
    main: string,
}
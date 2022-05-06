import { DataChunk } from './data';

export interface DailyChunk extends DataChunk {
    sunrise: number; // Sunrise time, Unix, UTC
    sunset: number; // Sunset time, Unix, UTC
    moonrise: number; // The time of when the moon rises for this day, Unix, UTC
    moonset: number; // The time of when the moon sets for this day, Unix, UTC
    /* 
        Moon phase. 0 and 1 are 'new moon',
        0.25 is 'first quarter moon,
        0.5 is 'full moon' and
        0.75 is 'last quarter moon'.
        The periods in between are called 'waxing crescent', 'waxing gibous',
        'waning gibous' and 'waning crescent', respectively
    */
    moon_phase: number;
    temp: TempChunk; // Forecasted temperature - Units: Kelvin, Celsius, Fahrenheit
    feels_like: FeelsLikeChunk; // Temperature that accounts for the human perception of weather - Units: Kelvin, Celsius, Fahrenheit
    uvi: number; // UV index
    pop: number; // Probability of precipitation.
    rain?: number; // Volume of rain for the last hour, measured in mm.
    snow?: number; // Volume of snow for the last hour, measured in mm.
}

export interface FeelsLikeChunk {
    morn: number; // Morning temperature
    day: number; // Day temperature
    eve: number; // Evening temperature
    night: number; // Night temperature
}

export interface TempChunk extends FeelsLikeChunk {
    min: number; // Min daily temperature
    max: number; // Max daily temperature
}

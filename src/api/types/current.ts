import { DataChunk, PrecipitationChunk } from './data';

export interface CurrentChunk extends DataChunk {
    sunrise: number; // Sunrise time, Unix, UTC
    sunset: number; // Sunset time, Unix, UTC
    temp: number; // Forecasted temperature - Units: Kelvin, Celsius, Fahrenheit
    feels_like: number; // Temperature that accounts for the human perception of weather - Units: Kelvin, Celsius, Fahrenheit
    uvi: number; // UV index
    rain?: PrecipitationChunk; // Rain volume for the last hour in mm
    snow?: PrecipitationChunk; // Snow volume for the last hour in mm
}

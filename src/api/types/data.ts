import { FeelsLikeChunk, TempChunk } from './daily';
import { WeatherChunk } from './weather';

/* 
    Default chunk sent back from OneCall API. 
    Other chunks can entend this.
*/
export interface DataChunk {
    dt: number; // Time of the forcasted data, Unix, UTC
    temp: number | TempChunk; // Forecasted temperature - Units: Kelvin, Celsius, Fahrenheit
    feels_like: number | FeelsLikeChunk; // Temperature that accounts for the human perception of weather - Units: Kelvin, Celsius, Fahrenheit
    pressure: number; // Atsmospheric pressure on the sea level, hPa (hectopascal)
    humidity: number; // Humidity %.
    /* 
        Atmospheric temperature (varying according to pressure and humidity)
        below which water droplets begin to condense and dew can form.
        Units: Kelvin, Celsius, Fahrenheit
    */
    dew_point: number;
    clouds: number; // Cloudiness percent %
    visibility?: number; // Average visibility, metres. The maximum value of the visibility is 10km
    wind_speed: number; // Wind speed. Units: default: metre/sec, metric: metre/sec, imperial: miles/hour
    wind_gust?: number; // Wind gust. Units: default: metre/sec, metric: metre/sec, imperial: miles/hour.
    wind_deg: number; // Wind direction in degrees (meteorological)
    pop?: number; // Probability of precipitation.
    uvi?: number; // UV index
    rain?: number | PrecipitationChunk; // Volume of rain for the last hour, measured in mm.
    snow?: number | PrecipitationChunk; // Volume of snow for the last hour, measured in mm.
    weather: WeatherChunk[]; // Contains information of current weather.
}

export interface PrecipitationChunk {
    '1h': number; // Percipitation for the last hour in mm
}

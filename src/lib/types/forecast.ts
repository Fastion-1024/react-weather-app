import { UVExposure } from '../enums';
import { City, Weather, Temperature, Time, Wind } from '../types';

export type Forecast = {
    /**
     * The City object containing geographical location and name.
     */
    city: City;

    /**
     * The Time object containing the current, sunrise and sunset time, Unix, UTC
     */
    time: Time;

    /**
     * The Temperature object containing the current, feels like, min and max temperatures in Kelvin
     */
    temp: Temperature;

    /**
     * The cloudiness percentage
     */
    clouds: number;

    /**
     * The humidity percentage
     */
    humidity: number;

    /**
     * The chance of percipitation percentage
     */
    precipitation: number;

    /**
     * The actual UV Index value
     */
    uvi: number;

    /**
     * The exposure rating for UV (Low, Moderate, High, etc)
     */
    uv_exposure: UVExposure;

    /**
     * The Wind Object containing the wind speed (metre/sec) & wind direction (degrees)
     */
    wind: Wind;

    /**
     * The Forecast object containing the current forecasted weather
     */
    weather: Weather;
};

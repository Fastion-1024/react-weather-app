import { City } from '../lib/types';
import { Weather } from '../lib/types';
import { OneCallResponse, GeoReponse } from '.';
import { GetUVExposure } from '../lib/helpers';

/**
 * Fetches weather data from OpenWeatherMap's OneCall API
 *
 * @param city The city object containing the latitude & longitude
 */
export const fetchOneCall = async (city: City): Promise<Weather[]> => {
    const request = `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&exclude=minutely,hourly&${process.env.REACT_APP_API_KEY_NAME}=${process.env.REACT_APP_API_KEY_VALUE}`;
    const response = await fetch(request);
    const data: OneCallResponse = await response.json();

    const weather: Weather[] = data.daily.map((day, index) => {
        if (index === 0) {
            return {
                city: city,
                clouds: data.current.clouds,
                humidity: data.current.humidity,
                precipitation: day.pop,
                uvi: data.current.uvi,
                uv_exposure: GetUVExposure(data.current.uvi),
                time: {
                    current: data.current.dt,
                    sunrise: data.current.sunrise,
                    sunset: data.current.sunset,
                },
                temp: {
                    forecast: data.current.temp,
                    min_temp: day.temp.min,
                    max_temp: day.temp.max,
                    feels_like: data.current.feels_like,
                },
                wind: {
                    wind_speed: data.current.wind_speed,
                    wind_deg: data.current.wind_deg,
                },
                forecast: {
                    type: data.current.weather[0].main,
                    description: data.current.weather[0].description,
                    icon: `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`,
                },
            };
        }
        return {
            city: city,
            clouds: day.clouds,
            humidity: day.humidity,
            precipitation: day.pop,
            uvi: day.uvi,
            uv_exposure: GetUVExposure(day.uvi),
            time: {
                current: day.dt,
                sunrise: day.sunrise,
                sunset: day.sunset,
            },
            temp: {
                forecast: day.temp.day,
                min_temp: day.temp.min,
                max_temp: day.temp.max,
                feels_like: day.feels_like.day,
            },
            wind: {
                wind_speed: day.wind_speed,
                wind_deg: day.wind_deg,
            },
            forecast: {
                type: day.weather[0].main,
                description: day.weather[0].description,
                icon: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
            },
        };
    });

    return weather;
};

/**
 * Fetches city information from OpenWeatherMap's GeoLocation API
 *
 * @param city Name of the city
 * @param state State code (only for the US)
 * @param countryCode ISO 3166 Country Code
 */
export const fetchGeoLocation = async (
    city: string,
    state?: string,
    countryCode?: string
): Promise<City[]> => {
    const query = `${city},${state || ''},${countryCode || ''}`;

    const request = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&${process.env.REACT_APP_API_KEY_NAME}=${process.env.REACT_APP_API_KEY_VALUE}`;
    const response = await fetch(request);
    const data: GeoReponse[] = await response.json();

    return data.map((city: GeoReponse): City => {
        return {
            name: city.name,
            lat: city.lat,
            lon: city.lon,
            state: city.state,
            country: city.country,
        };
    });
};

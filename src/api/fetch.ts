import { City, Forecast } from '../lib/types';
import { OneCallResponse, GeoReponse } from '.';
import { getUVExposure } from '../lib/helpers';

/**
 * Fetches weather data from OpenWeatherMap's OneCall API
 *
 * @param city The city object containing the latitude & longitude
 */
export const fetchOneCall = async (city: City): Promise<Forecast[]> => {
    const request = `/api/fetch-weather?lat=${city.lat}&lon=${city.lon}`;
    const response = await fetch(request);
    const data: OneCallResponse = await response.json();

    const weeklyForecast: Forecast[] = data.daily.map((day, index) => {
        if (index === 0) {
            return {
                city: city,
                clouds: data.current.clouds,
                humidity: data.current.humidity,
                precipitation: day.pop,
                uvi: data.current.uvi,
                uv_exposure: getUVExposure(data.current.uvi),
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
                weather: {
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
            uv_exposure: getUVExposure(day.uvi),
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
            weather: {
                type: day.weather[0].main,
                description: day.weather[0].description,
                icon: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
            },
        };
    });

    return weeklyForecast;
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

    const request = `/api/fetch-cities?city=${query}`;
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

/**
 * Fetches city information from OpenWeatherMap's GeoLocation API
 *
 * @param lat The geographical coordinates of the city (Latitude)
 * @param lon The geographical coordinates of the city (Longtitude)
 */
export const fetchReverseGeoLocation = async (lat: number, lon: number) => {
    const request = `/api/fetch-city?lat=${lat}&lon=${lon}`;
    const response = await fetch(request);
    const data: GeoReponse[] = await response.json();

    const city: City = {
        name: data[0].name,
        lat: data[0].lat,
        lon: data[0].lon,
        state: data[0].state,
        country: data[0].country,
    };

    return city;
};

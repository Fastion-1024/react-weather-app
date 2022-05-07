import { useState } from 'react';
import { City, Forecast, WeeklyForecast } from '../lib/types';
import { fetchOneCall } from '../api/fetch';
import SearchBar from './SearchBar/SearchBar';
import WeatherContainer from './WeatherContainer/WeatherContainer';
import './App.css';

function App() {
    const [weeklyForecast, setWeeklyForecast] =
        useState<WeeklyForecast | null>();

    const fetchWeather = async (city: City) => {
        const data: Forecast[] = await fetchOneCall(city);
        setWeeklyForecast({
            current: data[0],
            forecast: data.slice(1, 6),
        });
    };

    return (
        <main>
            <SearchBar updateCity={fetchWeather} />
            {weeklyForecast && (
                <WeatherContainer weeklyForecast={weeklyForecast} />
            )}
        </main>
    );
}

export default App;

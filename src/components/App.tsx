import { useState } from 'react';
import { City, Forecast } from '../lib/types';
import { fetchOneCall } from '../api/fetch';
import SearchBar from './SearchBar/SearchBar';
import WeatherContainer from './WeatherContainer/WeatherContainer';
import './App.css';

function App() {
    const [weeklyForecast, setWeeklyForecast] = useState<Forecast[] | null>();

    const fetchWeather = async (city: City) => {
        const data = await fetchOneCall(city);
        setWeeklyForecast(data);
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

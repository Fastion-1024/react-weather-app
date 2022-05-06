import { useState } from 'react';
import { City } from '../lib/types';
import { Weather } from '../lib/types';
import { fetchOneCall } from '../api/fetch';
import SearchBar from './SearchBar/SearchBar';
import WeatherContainer from './WeatherContainer/WeatherContainer';
import './App.css';

function App() {
    const [currentWeather, setCurrentWeather] = useState<Weather[] | null>();

    const fetchWeather = async (city: City) => {
        const data = await fetchOneCall(city);
        setCurrentWeather(data);
    };

    return (
        <main>
            <SearchBar updateCity={fetchWeather} />
            {currentWeather && <WeatherContainer forecast={currentWeather} />}
        </main>
    );
}

export default App;

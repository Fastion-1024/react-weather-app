import SearchBar from './SearchBar/SearchBar';
import WeatherContainer from './WeatherContainer/WeatherContainer';
import { useAppContext } from './AppProvider';
import './App.css';

function App() {
    const { weeklyForecast, fetchWeather } = useAppContext();

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

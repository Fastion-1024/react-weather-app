import { useAppContext } from '../AppProvider';
import ForecastContainer from '../ForecastContainer/ForecastContainer';
import WeatherCard from '../WeatherCard/WeatherCard';
import './WeatherContainer.css';

const WeatherContainer = () => {
    const { weeklyForecast } = useAppContext();

    if (!weeklyForecast) return null;

    return (
        <section className="weather-container">
            <WeatherCard forecast={weeklyForecast.current} />
            <ForecastContainer weeklyForecast={weeklyForecast.forecast} />
        </section>
    );
};

export default WeatherContainer;

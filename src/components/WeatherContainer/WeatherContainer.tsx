import React from 'react';
import { WeeklyForecast } from '../../lib/types';
import ForecastContainer from '../ForecastContainer/ForecastContainer';
import WeatherCard from '../WeatherCard/WeatherCard';
import './WeatherContainer.css';

interface IProps {
    weeklyForecast: WeeklyForecast;
}

const WeatherContainer: React.FC<IProps> = ({ weeklyForecast }) => {
    return (
        <section className="weather-container">
            <WeatherCard currentForecast={weeklyForecast.current} />
            <ForecastContainer weeklyForecast={weeklyForecast.forecast} />
        </section>
    );
};

export default WeatherContainer;

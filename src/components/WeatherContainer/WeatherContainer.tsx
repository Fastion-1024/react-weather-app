import React from 'react';
import { Forecast } from '../../lib/types';
import ForecastContainer from '../ForecastContainer/ForecastContainer';
import WeatherCard from '../WeatherCard/WeatherCard';
import './WeatherContainer.css';

interface IProps {
    weeklyForecast: Forecast[];
}

const WeatherContainer: React.FC<IProps> = ({ weeklyForecast }) => {
    return (
        <section className="weather-container">
            <WeatherCard currentForecast={weeklyForecast[0]} />
            <ForecastContainer weeklyForecast={weeklyForecast.slice(1, 6)} />
        </section>
    );
};

export default WeatherContainer;

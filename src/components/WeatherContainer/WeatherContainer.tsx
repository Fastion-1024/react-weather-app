import React from 'react';
import { Weather } from '../../lib/types';
import ForecastContainer from '../ForecastContainer/ForecastContainer';
import WeatherCard from '../WeatherCard/WeatherCard';
import './WeatherContainer.css';

interface IProps {
    forecast: Weather[];
}

const WeatherContainer: React.FC<IProps> = ({ forecast }) => {
    return (
        <section className="weather-container">
            <WeatherCard weather={forecast[0]} />
            <ForecastContainer forecast={forecast.slice(1, 6)} />
        </section>
    );
};

export default WeatherContainer;

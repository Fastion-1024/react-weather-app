import React from 'react';
import { Weather } from '../../lib/types';
import ForecastCard from '../ForecastCard/ForecastCard';
import './ForecastContainer.css';

interface IProps {
    forecast: Weather[];
}

const ForecastContainer: React.FC<IProps> = ({ forecast }) => {
    return (
        <div className="forecast-container">
            {forecast.map((day) => {
                return <ForecastCard weather={day} />;
            })}
        </div>
    );
};

export default ForecastContainer;

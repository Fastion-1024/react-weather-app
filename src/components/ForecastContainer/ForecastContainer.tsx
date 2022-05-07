import React from 'react';
import { Forecast } from '../../lib/types';
import ForecastCard from '../ForecastCard/ForecastCard';
import './ForecastContainer.css';

interface IProps {
    weeklyForecast: Forecast[];
}

const ForecastContainer: React.FC<IProps> = ({ weeklyForecast }) => {
    return (
        <div className="forecast-container">
            {weeklyForecast.map((day) => {
                return <ForecastCard dailyForecast={day} />;
            })}
        </div>
    );
};

export default ForecastContainer;

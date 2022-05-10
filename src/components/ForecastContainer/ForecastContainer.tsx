import React from 'react';
import { Forecast } from '../../lib/types';
import { useAppContext } from '../AppProvider';
import ForecastCard from '../ForecastCard/ForecastCard';
import './ForecastContainer.css';

interface IProps {
    weeklyForecast: Forecast[];
}

const ForecastContainer: React.FC<IProps> = ({ weeklyForecast }) => {
    const { updateActiveCard } = useAppContext();

    return (
        <div className="forecast-container">
            {weeklyForecast.map((day, index) => {
                return (
                    <ForecastCard
                        key={index}
                        forecast={day}
                        index={index}
                        handleClick={updateActiveCard}
                    />
                );
            })}
        </div>
    );
};

export default ForecastContainer;

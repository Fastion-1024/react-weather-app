import moment from 'moment';
import React from 'react';
import { convertKelvinToCelcius } from '../../lib/helpers';
import { Forecast } from '../../lib/types';
import './ForecastCard.css';

interface IProps {
    forecast: Forecast;
    index: number;
    handleClick: (index: number) => void;
}

const ForecastCard: React.FC<IProps> = ({ forecast, index, handleClick }) => {
    return (
        <div className="forecast-card" onClick={() => handleClick(index)}>
            <img src={forecast.weather.icon} />
            <h4>{moment.unix(forecast.time.current).format('ddd')}</h4>
            <h4>{convertKelvinToCelcius(forecast.temp.forecast)}</h4>
        </div>
    );
};

export default ForecastCard;

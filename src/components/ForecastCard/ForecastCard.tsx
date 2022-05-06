import moment from 'moment';
import React from 'react';
import { ConvertKelvinToCelcius } from '../../lib/helpers';
import { Weather } from '../../lib/types';
import './ForecastCard.css';

interface IProps {
    weather: Weather;
}

const ForecastCard: React.FC<IProps> = ({ weather }) => {
    return (
        <div className="forecast-card">
            <img src={weather.forecast.icon} />
            <h4>{moment.unix(weather.time.current).format('ddd')}</h4>
            <h4>{ConvertKelvinToCelcius(weather.temp.forecast)}</h4>
        </div>
    );
};

export default ForecastCard;

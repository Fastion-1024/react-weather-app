import moment from 'moment';
import React from 'react';
import { ConvertKelvinToCelcius } from '../../lib/helpers';
import { Forecast } from '../../lib/types';
import './ForecastCard.css';

interface IProps {
    dailyForecast: Forecast;
}

const ForecastCard: React.FC<IProps> = ({ dailyForecast }) => {
    return (
        <div className="forecast-card">
            <img src={dailyForecast.weather.icon} />
            <h4>{moment.unix(dailyForecast.time.current).format('ddd')}</h4>
            <h4>{ConvertKelvinToCelcius(dailyForecast.temp.forecast)}</h4>
        </div>
    );
};

export default ForecastCard;

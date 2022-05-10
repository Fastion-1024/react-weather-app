import moment from 'moment';
import React from 'react';
import { TempUnit } from '../../lib/enums';
import { getTempWithSymbol } from '../../lib/helpers';
import { Forecast } from '../../lib/types';
import './ForecastCard.css';

interface IProps {
    forecast: Forecast;
    tempUnit: TempUnit;
    index: number;
    handleClick: (index: number) => void;
}

const ForecastCard: React.FC<IProps> = ({
    forecast,
    tempUnit,
    index,
    handleClick,
}) => {
    return (
        <div className="forecast-card" onClick={() => handleClick(index)}>
            <img src={forecast.weather.icon} />
            <h4>{moment.unix(forecast.time.current).format('ddd')}</h4>
            <h4>{getTempWithSymbol(forecast.temp.forecast, tempUnit)}</h4>
        </div>
    );
};

export default ForecastCard;

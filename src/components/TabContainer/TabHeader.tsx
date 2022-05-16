import moment from 'moment';
import React from 'react';
import { TempUnit } from '../../lib/enums';
import { getTempWithSymbol } from '../../lib/helpers';
import { Forecast } from '../../lib/types';

interface IProps {
    forecast: Forecast;
    isActive: boolean;
    onTabHeaderClick: () => void;
}

const TabHeader: React.FC<IProps> = ({
    forecast,
    isActive,
    onTabHeaderClick,
}) => {
    return (
        <li
            className={`${isActive ? 'tab-item active' : 'tab-item'}`}
            tabIndex={-1}
            onClick={onTabHeaderClick}
        >
            <h3>
                <time
                    dateTime={moment
                        .unix(forecast.time.current)
                        .format('YYYY-MM-DD')}
                >
                    {moment.unix(forecast.time.current).format('ddd D MMM')}
                </time>
            </h3>
            <div>
                <img className="weather-icon" src={forecast.weather.icon} />
                <span>
                    {getTempWithSymbol(
                        forecast.temp.forecast,
                        TempUnit.Celcius
                    )}
                </span>
            </div>
        </li>
    );
};

export default TabHeader;

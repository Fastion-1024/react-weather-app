import moment from 'moment';
import React from 'react';
import { BsSunriseFill } from 'react-icons/bs';
import {
    WiCloudy,
    WiHot,
    WiHumidity,
    WiRain,
    WiStrongWind,
    WiThermometer,
} from 'react-icons/wi';
import { TempUnit } from '../../lib/enums';
import { getDirection, getTempWithSymbol } from '../../lib/helpers';
import { Forecast } from '../../lib/types';
import './DailyForecast.css';

interface IProps {
    dailyForecast: Forecast;
}
const DailyForecast: React.FC<IProps> = ({ dailyForecast }) => {
    return (
        <div className="daily-forecast-container">
            <div className="forecast-overview">
                <h3>{dailyForecast.city.name}</h3>
                <img src={dailyForecast.weather.icon} />
                <h3>{dailyForecast.weather.description}</h3>
                <div className="forecast-overview-footer">
                    <div className="footer-item">
                        <h4>Current</h4>
                        <p>
                            <WiThermometer className="icon" />{' '}
                            {getTempWithSymbol(
                                dailyForecast.temp.forecast,
                                TempUnit.Celcius
                            )}
                        </p>
                    </div>
                    <div className="footer-item">
                        <h4>Feels Like</h4>
                        <p>
                            <WiThermometer className="icon" />{' '}
                            {getTempWithSymbol(
                                dailyForecast.temp.feels_like,
                                TempUnit.Celcius
                            )}
                        </p>
                    </div>
                    <div className="footer-item">
                        <h4>Humidity</h4>
                        <p>
                            <WiHumidity className="icon" />{' '}
                            {dailyForecast.humidity}%
                        </p>
                    </div>
                </div>
            </div>

            <div className="forecast-details">
                <div className="forecast-details-item">
                    <WiThermometer className="icon" />
                    <div>
                        <p>
                            <strong>Min Temp: </strong>
                            {getTempWithSymbol(
                                dailyForecast.temp.min_temp,
                                TempUnit.Celcius
                            )}
                        </p>
                        <p>
                            <strong>Max Temp: </strong>
                            {getTempWithSymbol(
                                dailyForecast.temp.max_temp,
                                TempUnit.Celcius
                            )}
                        </p>
                    </div>
                </div>
                <div className="forecast-details-item">
                    <BsSunriseFill className="icon" />
                    <div>
                        <p>
                            <strong>Sunrise: </strong>
                            {moment
                                .unix(dailyForecast.time.sunrise)
                                .format('HH:mm')}
                        </p>
                        <p>
                            <strong>Sunset: </strong>
                            {moment
                                .unix(dailyForecast.time.sunset)
                                .format('HH:mm')}
                        </p>
                    </div>
                </div>
                <div className="forecast-details-item">
                    <WiStrongWind className="icon" />
                    <div>
                        <p>
                            <strong>Speed: </strong>
                            {dailyForecast.wind.wind_speed} m/s
                        </p>
                        <p>
                            <strong>Direction: </strong>
                            {getDirection(dailyForecast.wind.wind_deg)}
                        </p>
                    </div>
                </div>
                <div className="forecast-details-item">
                    <WiRain className="icon" />
                    <div>
                        <p>
                            <strong>Percentage: </strong>{' '}
                            {Math.round(dailyForecast.precipitation * 100)}%
                        </p>
                    </div>
                </div>
                <div className="forecast-details-item">
                    <WiCloudy className="icon" />
                    <div>
                        <p>
                            <strong>Cloudiness: </strong>
                            {dailyForecast.clouds}%
                        </p>
                    </div>
                </div>
                <div className="forecast-details-item">
                    <WiHot className="icon" />
                    <div>
                        <p>
                            <strong>Index: </strong>
                            {dailyForecast.uv_exposure.toLowerCase()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DailyForecast;

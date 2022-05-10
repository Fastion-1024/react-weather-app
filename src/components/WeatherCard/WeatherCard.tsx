import moment from 'moment';
import { useState } from 'react';
import { convertKelvinToCelcius } from '../../lib/helpers';
import { Forecast } from '../../lib/types';
import './WeatherCard.css';

interface IProps {
    forecast: Forecast;
}

const WeatherCard: React.FC<IProps> = ({ forecast }) => {
    const [showBack, setShowBack] = useState(false);

    const toggleCardFace = () => {
        setShowBack(!showBack);
    };

    return (
        <div className="weather-card" onClick={toggleCardFace}>
            <div className={`card-inner ${showBack ? 'show-back' : ''}`}>
                <div className="card-front">
                    <h1>{moment.unix(forecast.time.current).format('dddd')}</h1>
                    <h2>
                        {moment.unix(forecast.time.current).format('Do MMM')}
                    </h2>
                    <h3>{forecast.city.name}</h3>
                    <img src={forecast.weather.icon} />
                    <h3>{forecast.weather.description}</h3>
                    <div className="card-footer">
                        <div>
                            <h4>Current</h4>
                            <h5>
                                {convertKelvinToCelcius(forecast.temp.forecast)}
                            </h5>
                        </div>
                        <div>
                            <h4>Feels Like</h4>
                            <h5>
                                {convertKelvinToCelcius(
                                    forecast.temp.feels_like
                                )}
                            </h5>
                        </div>
                        <div>
                            <h4>Humidity</h4>
                            <h5>{forecast.humidity}%</h5>
                        </div>
                    </div>
                </div>
                <div className="card-back">
                    <h1>
                        Min Temp:{' '}
                        {convertKelvinToCelcius(forecast.temp.min_temp)}
                    </h1>
                    <h1>
                        Max Temp:{' '}
                        {convertKelvinToCelcius(forecast.temp.max_temp)}
                    </h1>
                    <h1>Wind Speed: {forecast.wind.wind_speed} m/s</h1>
                    <h1>Wind Direction: {forecast.wind.wind_deg} deg</h1>
                    <h1>UV Index: {forecast.uv_exposure}</h1>
                    <h1>
                        Percipitation:{' '}
                        {Math.round(forecast.precipitation * 100)}%
                    </h1>
                    <h1>Cloudiness {forecast.clouds}%</h1>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;

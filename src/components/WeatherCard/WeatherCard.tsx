import moment from 'moment';
import { convertKelvinToCelcius } from '../../lib/helpers';
import { Forecast } from '../../lib/types';
import './WeatherCard.css';

interface IProps {
    forecast: Forecast;
}

const WeatherCard: React.FC<IProps> = ({ forecast }) => {
    return (
        <div className="weather-card">
            <h1>{moment.unix(forecast.time.current).format('dddd')}</h1>
            <h2>{moment.unix(forecast.time.current).format('Do MMM')}</h2>
            <h3>{forecast.city.name}</h3>

            <img src={forecast.weather.icon} />
            <h3>{forecast.weather.description}</h3>

            <div className="weather-card-footer">
                <div>
                    <h4>Current</h4>
                    <h5>{convertKelvinToCelcius(forecast.temp.forecast)}</h5>
                </div>
                <div>
                    <h4>Feels Like</h4>
                    <h5>{convertKelvinToCelcius(forecast.temp.feels_like)}</h5>
                </div>
                <div>
                    <h4>Humidity</h4>
                    <h5>{forecast.humidity}</h5>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;

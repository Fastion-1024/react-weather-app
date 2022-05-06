import moment from 'moment';
import { ConvertKelvinToCelcius } from '../../lib/helpers';
import { Weather } from '../../lib/types';
import './WeatherCard.css';

interface IProps {
    weather: Weather;
}

const WeatherCard: React.FC<IProps> = ({ weather }) => {
    return (
        <div className="weather-card">
            <h1>{moment.unix(weather.time.current).format('dddd')}</h1>
            <h2>{moment.unix(weather.time.current).format('Do MMM')}</h2>
            <h3>{weather.city.name}</h3>

            <img src={weather.forecast.icon} />
            <h3>{weather.forecast.description}</h3>

            <div className="weather-card-footer">
                <div>
                    <h4>Current</h4>
                    <h5>{ConvertKelvinToCelcius(weather.temp.forecast)}</h5>
                </div>
                <div>
                    <h4>Feels Like</h4>
                    <h5>{ConvertKelvinToCelcius(weather.temp.feels_like)}</h5>
                </div>
                <div>
                    <h4>Humidity</h4>
                    <h5>{weather.humidity}</h5>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;

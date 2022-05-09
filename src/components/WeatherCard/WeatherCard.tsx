import moment from 'moment';
import { convertKelvinToCelcius } from '../../lib/helpers';
import { Forecast } from '../../lib/types';
import './WeatherCard.css';

interface IProps {
    currentForecast: Forecast;
}

const WeatherCard: React.FC<IProps> = ({ currentForecast }) => {
    return (
        <div className="weather-card">
            <h1>{moment.unix(currentForecast.time.current).format('dddd')}</h1>
            <h2>
                {moment.unix(currentForecast.time.current).format('Do MMM')}
            </h2>
            <h3>{currentForecast.city.name}</h3>

            <img src={currentForecast.weather.icon} />
            <h3>{currentForecast.weather.description}</h3>

            <div className="weather-card-footer">
                <div>
                    <h4>Current</h4>
                    <h5>
                        {convertKelvinToCelcius(currentForecast.temp.forecast)}
                    </h5>
                </div>
                <div>
                    <h4>Feels Like</h4>
                    <h5>
                        {convertKelvinToCelcius(
                            currentForecast.temp.feels_like
                        )}
                    </h5>
                </div>
                <div>
                    <h4>Humidity</h4>
                    <h5>{currentForecast.humidity}</h5>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;

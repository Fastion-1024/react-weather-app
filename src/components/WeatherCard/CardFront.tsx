import moment from 'moment';
import { TempUnit } from '../../lib/enums';
import { getTempWithSymbol } from '../../lib/helpers';
import { Forecast } from '../../lib/types';
import { WiThermometer, WiHumidity } from 'react-icons/wi';
import './WeatherCard.css';

interface IProps {
    forecast: Forecast;
    tempUnit: TempUnit;
}

const CardFront: React.FC<IProps> = ({ forecast, tempUnit }) => {
    return (
        <div className="card-front">
            <h2>{moment.unix(forecast.time.current).format('dddd')}</h2>
            <h2>{moment.unix(forecast.time.current).format('Do MMM')}</h2>
            <h3>{forecast.city.name}</h3>
            <img src={forecast.weather.icon} />
            <h3>{forecast.weather.description}</h3>
            <div className="card-footer">
                <div>
                    <h4>Current</h4>
                    <p>
                        <WiThermometer className="icon" />{' '}
                        {getTempWithSymbol(forecast.temp.forecast, tempUnit)}
                    </p>
                </div>
                <div>
                    <h4>Feels Like</h4>
                    <p>
                        <WiThermometer className="icon" />{' '}
                        {getTempWithSymbol(forecast.temp.feels_like, tempUnit)}
                    </p>
                </div>
                <div>
                    <h4>Humidity</h4>
                    <p>
                        <WiHumidity className="icon" /> {forecast.humidity}%
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardFront;

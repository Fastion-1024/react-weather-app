import { TempUnit } from '../../lib/enums';
import { getDirection, getTempWithSymbol } from '../../lib/helpers';
import { Forecast } from '../../lib/types';
import {
    WiThermometer,
    WiStrongWind,
    WiRain,
    WiCloudy,
    WiHot,
} from 'react-icons/wi';
import './WeatherCard.css';

interface IProps {
    forecast: Forecast;
    tempUnit: TempUnit;
}

const CardBack: React.FC<IProps> = ({ forecast, tempUnit }) => {
    return (
        <div className="card-back">
            <div className="container">
                <WiThermometer className="icon" />
                <div>
                    <h4>Temperature</h4>
                    <p>
                        <strong>Min Temp: </strong>
                        {getTempWithSymbol(forecast.temp.min_temp, tempUnit)}
                    </p>
                    <p>
                        <strong>Max Temp: </strong>
                        {getTempWithSymbol(forecast.temp.max_temp, tempUnit)}
                    </p>
                </div>
            </div>
            <div className="container">
                <WiStrongWind className="icon" />
                <div>
                    <h4>Wind</h4>
                    <p>
                        <strong>Speed: </strong>
                        {forecast.wind.wind_speed} m/s
                    </p>
                    <p>
                        <strong>Direction: </strong>
                        {getDirection(forecast.wind.wind_deg)}
                    </p>
                </div>
            </div>
            <div className="container">
                <WiRain className="icon" />
                <div>
                    <h4>Rain</h4>
                    <p>
                        <strong>Percentage: </strong>{' '}
                        {Math.round(forecast.precipitation * 100)}%
                    </p>
                </div>
            </div>
            <div className="container">
                <WiCloudy className="icon" />
                <div>
                    <h4>Clouds</h4>
                    <p>
                        <strong>Cloudiness: </strong>
                        {forecast.clouds}%
                    </p>
                </div>
            </div>
            <div className="container">
                <WiHot className="icon" />
                <div>
                    <h4>UV</h4>
                    <p>
                        <strong>Index: </strong>
                        {forecast.uv_exposure.toLowerCase()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardBack;

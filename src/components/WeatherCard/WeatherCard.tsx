import { useState } from 'react';
import { Forecast } from '../../lib/types';
import { useAppContext } from '../AppProvider';
import CardBack from './CardBack';
import CardFront from './CardFront';
import './WeatherCard.css';

interface IProps {
    forecast: Forecast;
}

const WeatherCard: React.FC<IProps> = ({ forecast }) => {
    const { tempUnit, toggleTempUnit } = useAppContext();
    const [showBack, setShowBack] = useState(false);

    const toggleCardFace = () => {
        setShowBack(!showBack);
    };

    return (
        <div className="weather-card" onClick={toggleCardFace}>
            <div className={`card-inner ${showBack ? 'show-back' : ''}`}>
                <CardFront forecast={forecast} tempUnit={tempUnit} />
                <CardBack forecast={forecast} tempUnit={tempUnit} />
            </div>
        </div>
    );
};

export default WeatherCard;

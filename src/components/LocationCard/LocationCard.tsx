import React from 'react';
import { MdClose } from 'react-icons/md';
import './LocationCard.css';

interface IProps {
    cityName: string;
    country: string;
    temp?: string;
    icon?: string;
    onDelete: () => void;
}
const LocationCard: React.FC<IProps> = ({
    cityName,
    country,
    temp,
    icon,
    onDelete,
}) => {
    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onDelete();
    };

    return (
        <div className="location-card-container">
            <div className="location-card-city">
                <strong>{cityName}</strong>, <span>{country}</span>
            </div>
            <div className="location-card-weather">
                <p>{temp}</p>
                <img src={icon} className="icon" />
            </div>

            <button onClick={handleButtonClick}>
                <MdClose />
            </button>
        </div>
    );
};

export default LocationCard;

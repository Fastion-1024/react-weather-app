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
            <p className="city">
                <strong>{cityName}</strong> {country}
            </p>
            <p className="temp">{temp}</p>
            <img src={icon} className="icon" />

            <button onClick={handleButtonClick}>
                <MdClose />
            </button>
        </div>
    );
};

export default LocationCard;

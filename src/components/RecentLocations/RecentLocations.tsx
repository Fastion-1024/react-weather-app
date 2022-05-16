import React from 'react';
import { RecentLocation } from '../../lib/types';
import { MdClose } from 'react-icons/md';
import './RecentLocations.css';

interface IProps {
    locations: RecentLocation[];
    onLocationClick: (location: RecentLocation) => void;
    onRemoveLocation: (location: RecentLocation) => void;
}

const RecentLocations: React.FC<IProps> = ({
    locations,
    onLocationClick,
    onRemoveLocation,
}) => {
    return (
        <div className="recent-locations-container">
            <h3 className="recent-locations-header">Your Recent Places</h3>
            <div className="recent-locations-card-container">
                <ul className="recent-locations-list" role="list">
                    <li
                        className="no-recent-place-card"
                        hidden={locations.length !== 0}
                    >
                        Your recently searched for places will appear here.
                    </li>
                    {locations.map((location, index) => {
                        const { name, country } = location.city;
                        return (
                            <li
                                key={index}
                                className="recent-place-card"
                                onClick={() => onLocationClick(location)}
                            >
                                <span>
                                    <strong>{name}</strong>, {country}
                                </span>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onRemoveLocation(location);
                                    }}
                                >
                                    <MdClose />
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default RecentLocations;

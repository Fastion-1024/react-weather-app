import React from 'react';
import { City } from '../../lib/types';
import { MdClose } from 'react-icons/md';
import './RecentLocations.css';

interface IProps {
    locations: City[];
    onRemoveLocation: (city: City) => void;
}

const RecentLocations: React.FC<IProps> = ({ locations, onRemoveLocation }) => {
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
                        return (
                            <li
                                key={index}
                                className="recent-place-card"
                                onClick={() => onRemoveLocation(location)}
                            >
                                <span>
                                    <strong>{location.name}</strong>,{' '}
                                    {location.country}
                                </span>
                                <button>
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

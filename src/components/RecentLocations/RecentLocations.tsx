import React from 'react';
import moment from 'moment';
import { RecentLocation } from '../../lib/types';
import { getTempWithSymbol } from '../../lib/helpers';
import { TempUnit } from '../../lib/enums';
import LocationCard from '../LocationCard/LocationCard';
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
    const findDailyInfo = (location: RecentLocation) => {
        const now = moment().utc();

        return location.dailyInfo.findIndex((loc) =>
            moment(now).isSame(moment.unix(loc.time), 'day')
        );
    };

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
                        // ! locIndex can be undefined - currently a app breaking bug
                        const locIndex = findDailyInfo(location);
                        const { name, country } = location.city;
                        const { temp, icon } = location.dailyInfo[locIndex];

                        return (
                            <li
                                key={index}
                                className="recent-place-item"
                                onClick={() => onLocationClick(location)}
                            >
                                <LocationCard
                                    cityName={name}
                                    country={country}
                                    temp={getTempWithSymbol(
                                        temp,
                                        TempUnit.Celcius
                                    )}
                                    icon={icon}
                                    onDelete={() => onRemoveLocation(location)}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default RecentLocations;

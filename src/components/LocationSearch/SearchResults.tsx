import React from 'react';
import { City } from '../../lib/types';
import { getLocation } from '../../lib/helpers';
import { MdMyLocation } from 'react-icons/md';
import './LocationSearch.css';

interface IProps {
    results: City[];
    onResultClick: (city: City) => void;
    onLocationRequest: (position: GeolocationPosition) => void;
}

const SearchResults: React.FC<IProps> = ({
    results,
    onResultClick,
    onLocationRequest,
}) => {
    const handleLocationClick = async () => {
        try {
            const pos = await getLocation();
            onLocationRequest(pos);
        } catch (err) {
            alert('Could not determine location');
        }
    };

    return (
        <div className="search-results-box">
            <div
                className="suggested-places-container"
                hidden={results.length === 0}
            >
                <span className="suggested-places-header">
                    Suggested Places
                </span>
                <hr />
                <ul className="suggested-results" role="list">
                    {results.map((city, index) => {
                        return (
                            <li
                                tabIndex={-1}
                                key={index}
                                onClick={() => onResultClick(city)}
                            >
                                {city.name} {city.state} ({city.country})
                            </li>
                        );
                    })}
                </ul>
            </div>

            <button onClick={handleLocationClick}>
                <span>
                    Use my current location <MdMyLocation />
                </span>
            </button>
        </div>
    );
};

export default SearchResults;

import React, { useState } from 'react';
import { MdOutlineMyLocation } from 'react-icons/md';
import { fetchGeoLocation, fetchReverseGeoLocation } from '../../api/fetch';
import { getLocation } from '../../lib/helpers';
import { City } from '../../lib/types';
import { useAppContext } from '../AppProvider';
import './SearchBar.css';

const SearchBar = () => {
    const [input, setInput] = useState<string>('');
    const [searchResults, setSearchResults] = useState<City[] | null>(null);
    const { fetchWeather } = useAppContext();

    const handleChange = (input: string) => {
        if (!input && searchResults) {
            setSearchResults(null);
        }
        setInput(input);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // guard against null or undefined input;
        if (!input) return;

        const results = await fetchGeoLocation(input);

        if (results.length === 1) {
            onOptionClick(results[0]);
        } else {
            setSearchResults(results);
        }
    };

    const onOptionClick = (city: City) => {
        // get data for city
        clearInput();
        fetchWeather(city);
    };

    const onLocationClick = async () => {
        try {
            const pos = await getLocation();
            const city = await fetchReverseGeoLocation(
                pos.coords.latitude,
                pos.coords.longitude
            );

            city && fetchWeather(city);
            clearInput();
        } catch (err) {
            alert('Could not determine location');
        }
    };

    const clearInput = () => {
        setInput('');
        setSearchResults(null);
    };

    return (
        <div className="search-bar">
            <form className="control" onSubmit={(e) => handleSubmit(e)}>
                <input
                    placeholder="Search for a Location"
                    type="text"
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                />
                <button className="btn-loc" onClick={onLocationClick}>
                    <MdOutlineMyLocation />
                    <span></span>
                </button>
                <button className="btn-submit" type="submit" disabled={!input}>
                    Search
                </button>
            </form>

            <div className="results">
                {searchResults &&
                    searchResults.map((city: City, index) => {
                        return (
                            <div
                                key={index}
                                className="option"
                                onClick={() => onOptionClick(city)}
                            >
                                <span>
                                    {city.name} {city.state} ({city.country})
                                </span>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default SearchBar;

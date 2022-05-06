import React, { useState } from 'react';
import { MdOutlineMyLocation } from 'react-icons/md';
import { fetchGeoLocation } from '../../api/fetch';
import { City } from '../../lib/types';
import './SearchBar.css';

interface IProps {
    updateCity: (city: City) => void;
}

const SearchBar: React.FC<IProps> = ({ updateCity }) => {
    const [input, setInput] = useState<string>('');
    const [searchResults, setSearchResults] = useState<City[] | null>(null);

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
        setInput('');
        setSearchResults(null);
        updateCity(city);
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
                <button className="btn-loc">
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

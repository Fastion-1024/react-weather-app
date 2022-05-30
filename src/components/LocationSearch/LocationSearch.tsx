import React, { useState } from 'react';
import { City } from '../../lib/types';
import { useAppContext } from '../AppProvider';
import { fetchGeoLocation, fetchReverseGeoLocation } from '../../api/fetch';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import './LocationSearch.css';

const LocationSearch = () => {
    const [searchResults, setSearchResults] = useState<City[]>([]);
    const [isFocused, setIsFocused] = useState(false);
    const { fetchWeather } = useAppContext();

    const handleSubmit = async (input: string) => {
        if (!input) return;
        const results = await fetchGeoLocation(input);
        setSearchResults(results);
    };

    const handleReset = () => {
        setSearchResults([]);
    };

    const handleFocus = (e: React.FocusEvent) => {
        setIsFocused(true);
    };

    const handleBlur = (e: React.FocusEvent) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsFocused(false);
        }
    };

    const getForecastByCity = (city: City) => {
        fetchWeather(city);
        setSearchResults([]);
        setIsFocused(false);
    };

    const getForecastByGeolocation = async (position: GeolocationPosition) => {
        const city = await fetchReverseGeoLocation(
            position.coords.latitude,
            position.coords.longitude
        );

        getForecastByCity(city);
    };

    return (
        <div
            className="location-search"
            onFocus={handleFocus}
            onBlur={handleBlur}
        >
            <SearchBar onSubmit={handleSubmit} onReset={handleReset} />
            {isFocused && (
                <SearchResults
                    results={searchResults}
                    onResultClick={getForecastByCity}
                    onLocationRequest={getForecastByGeolocation}
                />
            )}
        </div>
    );
};

export default LocationSearch;

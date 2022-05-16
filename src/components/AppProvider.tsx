import React, { useContext, useState } from 'react';
import { fetchOneCall } from '../api/fetch';
import useLocalStorage from '../hooks/useLocalStorage';
import { TempUnit } from '../lib/enums';
import { City, Forecast, WeeklyForecast, RecentLocation } from '../lib/types';

interface IProps {
    children?: React.ReactNode;
}

interface IAppContext {
    weeklyForecast: WeeklyForecast | undefined;
    recentLocations: RecentLocation[];
    tempUnit: TempUnit;
    fetchWeather: (city: City) => void;
    updateActiveCard: (index: number) => void;
    removeRecentLocation: (location: RecentLocation) => void;
    toggleTempUnit: () => void;
}

const AppContext = React.createContext<IAppContext | null>(null);

const AppProvider: React.FC<IProps> = ({ children }) => {
    const [weeklyForecast, setWeeklyForecast] = useState<WeeklyForecast>();
    const [recentLocations, setRecentLocations] = useLocalStorage<
        RecentLocation[]
    >('RecentLocations', []);
    const [tempUnit, setTempUnit] = useState<TempUnit>(TempUnit.Celcius);

    const fetchWeather = async (city: City) => {
        const data: Forecast[] = await fetchOneCall(city);
        const forecast = data.slice(0, data.length - 1);

        setWeeklyForecast({
            current: forecast[0],
            forecast: forecast,
        });

        addRecentLocation({
            city: city,
            dailyInfo: forecast.map((day) => {
                return {
                    time: day.time.current,
                    temp: day.temp.forecast,
                    icon: day.weather.icon,
                };
            }),
        });
    };

    const updateActiveCard = (index: number) => {
        if (!weeklyForecast) return;

        setWeeklyForecast({
            ...weeklyForecast,
            current: weeklyForecast.forecast[index],
        });
    };

    const toggleTempUnit = () => {
        tempUnit === TempUnit.Celcius
            ? setTempUnit(TempUnit.Fahrenheit)
            : setTempUnit(TempUnit.Celcius);
    };

    const addRecentLocation = (location: RecentLocation) => {
        setRecentLocations((prev) => {
            const arr = prev.filter(
                (loc) =>
                    loc.city.lat !== location.city.lat &&
                    loc.city.lon !== location.city.lon
            );

            return prev.length < 5
                ? [location, ...arr]
                : [location, ...arr.slice(0, prev.length - 1)];
        });
    };

    const removeRecentLocation = (location: RecentLocation) => {
        setRecentLocations((prev) => {
            const locIndex = prev.findIndex(
                (loc) =>
                    loc.city.lat === location.city.lat &&
                    loc.city.lon === location.city.lon
            );

            return locIndex === -1
                ? prev
                : [...prev.slice(0, locIndex), ...prev.slice(locIndex + 1)];
        });
    };

    return (
        <AppContext.Provider
            value={{
                weeklyForecast,
                recentLocations,
                tempUnit,
                fetchWeather,
                updateActiveCard,
                removeRecentLocation,
                toggleTempUnit,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext) as IAppContext;
};

export default AppProvider;

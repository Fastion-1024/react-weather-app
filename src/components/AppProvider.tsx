import React, { useContext, useState } from 'react';
import { fetchOneCall } from '../api/fetch';
import { TempUnit } from '../lib/enums';
import { City, Forecast, WeeklyForecast } from '../lib/types';

interface IProps {
    children?: React.ReactNode;
}

interface IAppContext {
    weeklyForecast: WeeklyForecast | undefined;
    tempUnit: TempUnit;
    fetchWeather: (city: City) => void;
    updateActiveCard: (index: number) => void;
    toggleTempUnit: () => void;
}

const AppContext = React.createContext<IAppContext | null>(null);

const AppProvider: React.FC<IProps> = ({ children }) => {
    const [weeklyForecast, setWeeklyForecast] = useState<WeeklyForecast>();
    const [tempUnit, setTempUnit] = useState<TempUnit>(TempUnit.Celcius);

    const fetchWeather = async (city: City) => {
        const data: Forecast[] = await fetchOneCall(city);
        setWeeklyForecast({
            current: data[0],
            forecast: data.slice(0, data.length - 1),
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

    return (
        <AppContext.Provider
            value={{
                weeklyForecast,
                tempUnit,
                fetchWeather,
                updateActiveCard,
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

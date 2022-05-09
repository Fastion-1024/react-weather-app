import React, { useContext, useState } from 'react';
import { fetchOneCall } from '../api/fetch';
import { City, Forecast, WeeklyForecast } from '../lib/types';

interface IProps {
    children?: React.ReactNode;
}

interface IAppContext {
    weeklyForecast: WeeklyForecast | undefined;
    fetchWeather: (city: City) => void;
}

const AppContext = React.createContext<IAppContext | null>(null);

const AppProvider: React.FC<IProps> = ({ children }) => {
    const [weeklyForecast, setWeeklyForecast] = useState<WeeklyForecast>();

    const fetchWeather = async (city: City) => {
        const data: Forecast[] = await fetchOneCall(city);
        setWeeklyForecast({
            current: data[0],
            forecast: data.slice(1, 6),
        });
    };

    return (
        <AppContext.Provider value={{ weeklyForecast, fetchWeather }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext) as IAppContext;
};

export default AppProvider;

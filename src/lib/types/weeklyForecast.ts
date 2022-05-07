import { Forecast } from './forecast';

export type WeeklyForecast = {
    current: Forecast;
    forecast: Forecast[];
};

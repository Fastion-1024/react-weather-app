export type Temperature = {
    /**
     * The current or day temperature in Kelvin
     */
    forecast: number;

    /**
     * The minimum temperature of the day in Kelvin
     */
    min_temp: number;

    /**
     * The maximum temperature of the day in Kelvin
     */
    max_temp: number;

    /**
     * The temperature, accounting for the human perception of weather in Kelvin
     */
    feels_like: number;
};

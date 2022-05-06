export type Time = {
    /**
     * The current time or time of the forecasted data, Unix, UTC
     */
    current: number;

    /**
     * Sunrise time, Unix, UTC
     */
    sunrise: number;

    /**
     * Sunset time, Unix, UTC
     */
    sunset: number;
};

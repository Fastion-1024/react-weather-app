export interface WeatherChunk {
    /* 
        Weather condition id.
        https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
    */
    id: number;
    main: string; // Group of weather parameters (Rain, Snow, Extreme etc.)
    description: string; // Weather condition within the group
    icon: string; // Weather icon id.
}

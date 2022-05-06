export type City = {
    /**
     * The name of the city
     */
    name: string;

    /**
     * The geographical location (latitude)
     */
    lat: string;

    /**
     * The geographical location (longtitude)
     */
    lon: string;

    /**
     * The state the city is located in (US only)
     */
    state?: string;

    /**
     * The country the city is located in (ISO 3166 country code)
     */
    country: string;
};

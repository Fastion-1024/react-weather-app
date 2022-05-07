export type Weather = {
    /**
     * The group of weather parameters (Rain, Snow, etc)
     */
    type: string;

    /**
     * The weather condition within the group
     */
    description: string;

    /**
     * The Icon URL
     */
    icon: string;
};

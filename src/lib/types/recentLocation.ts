import { City } from './city';

export type RecentLocation = {
    city: City;
    dailyInfo: {
        time: number;
        temp: number;
        icon: string;
    }[];
};

import { CurrentChunk } from '../types/current';
import { DailyChunk } from '../types/daily';

export interface OneCallResponse {
    lat: number; // Geographical coordinates of the location (latitude)
    lon: number; // Geographical coordinates of the location (longitude)
    timezone: string; // Timezone name for the requested location
    timezone_offset: number; //  Shift in seconds from UTC
    current: CurrentChunk;
    daily: DailyChunk[];
}

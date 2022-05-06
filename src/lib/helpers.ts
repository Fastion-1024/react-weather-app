import { UVExposure } from './enums';

export const GetUVExposure = (uvi: number) => {
    const index = Math.round(uvi);

    if (index <= 2) {
        return UVExposure.Low;
    }

    if (index >= 3 && index <= 5) {
        return UVExposure.Moderate;
    }

    if (index >= 6 && index <= 7) {
        return UVExposure.High;
    }

    if (index >= 8 && index <= 10) {
        return UVExposure.VeryHigh;
    }

    if (index >= 11) {
        return UVExposure.Extreme;
    }

    throw new Error('UV Index Out of Range!');
};

export const ConvertKelvinToCelcius = (kelvin: number): number => {
    return Math.round(kelvin - 273.15);
};

export const ConvertKelvinToFahrenheit = (kelvin: number): number => {
    return Math.round(kelvin - 273.15) * 1.8 + 32;
};
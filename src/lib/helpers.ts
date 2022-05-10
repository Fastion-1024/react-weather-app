import { TempUnit, UVExposure } from './enums';

export const getUVExposure = (uvi: number) => {
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

export const convertKelvinToCelcius = (kelvin: number): number => {
    return Math.round(kelvin - 273.15);
};

export const convertKelvinToFahrenheit = (kelvin: number): number => {
    return Math.round((kelvin - 273.15) * 1.8 + 32);
};

const getTemp = (kelvin: number, tempUnit: TempUnit): string => {
    switch (tempUnit) {
        case TempUnit.Kelvin:
            return `${kelvin} °K`;
        case TempUnit.Celcius:
            return `${convertKelvinToCelcius(kelvin)} °C`;
        case TempUnit.Fahrenheit:
            return `${convertKelvinToFahrenheit(kelvin)} °F`;
        default:
            throw new Error('Invalid TempUnit!');
    }
};

export const getLocation = (
    options?: PositionOptions
): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
    );
};

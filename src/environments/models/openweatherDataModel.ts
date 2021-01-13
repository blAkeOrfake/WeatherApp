export class OpenWeatherDataModel {
    base: number;
    id: number;
    main: {
        temp: number, 
        feels_like: number, 
        temp_min: number, 
        temp_max: number, 
        pressure: number, 
        humidity: number
    };
    name: string;
    weather: Array<{
        id: number,
        main: string,
        description: string,
    }>;
    wind: {
        speed: number, 
        deg: number
    };
    constructor(data) { // default values in case of missing data from openweather api
        this.base = data.base || undefined;
        this.id = data.id || undefined;
        this.main = data.main || {};
        this.name = data.name || '';
        this.weather = data.weather || [];
        this.wind = data.wind || {};
    }
}
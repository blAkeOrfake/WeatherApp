import { Injectable } from '@angular/core';

@Injectable()
export class Constants { // external file for storing valuable data, could be used in the whole app
    public readonly OW_API_ENDPOINT: string = 'https://api.openweathermap.org/data/2.5/weather';
    public readonly OW_API_ENDPOINT_FORECAST: string = 'https://api.openweathermap.org/data/2.5/forecast';
    public readonly OW_API_KEY: string = '32525dd3ef246981831882fd08c29aa9'; // should be an external environment variable, but it this case I'll leave it just like this
}
import { Component, OnInit } from '@angular/core';
import { OpenWeatherDataModel } from 'src/environments/models/openweatherDataModel';
import { OpenWeatherService } from './services/open-weather/open-weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'backbase-weather';
  cities: Array<string> = [
    'warsaw',
    'paris',
    'krakow',
    'budapest',
    'prague'
  ];
  weatherCitiesData: Array<OpenWeatherDataModel> = [];
  forecastCityData: Object;
  countOfHourlyForecast: Array<number> = [0, 1, 2, 3, 4]; // in free api version i could only get data from every 3 hours, so thats why i decided to change it by hand

  constructor(private openWeatherService: OpenWeatherService){}

  ngOnInit() {
    this.downloadWeatherData();
  };

  private downloadWeatherData() {
    for (let i = 0; i < this.cities.length; i++) {
      this.openWeatherService.getWeather(this.cities[i]).subscribe(data => {
        this.weatherCitiesData.push(new OpenWeatherDataModel(data));        
      })
    }
  }

  public downloadHourlyForecastWeatherData(city: string) {
    this.openWeatherService.getWeather(city, true).subscribe(data => {
      this.forecastCityData = data;
    });
  }
}

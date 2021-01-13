import { Injectable } from '@angular/core';
import { Constants } from 'src/app/config/constants';
import { ApiHttpService } from '../api-http.service';
import { UrlCreator } from '../url-creator';


@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  constructor(
    private constants: Constants,
    private apiHttpService: ApiHttpService){
  }

  public getWeather(city: string, forecast = false) {
    return this.apiHttpService.get(this.createUrlwithParam(city, forecast));
  }

  private createUrlwithParam(param: string, forecast: boolean): string {
    const urlCreator: UrlCreator = new UrlCreator(
      forecast ? this.constants.OW_API_ENDPOINT_FORECAST : this.constants.OW_API_ENDPOINT, 
      param,
      this.constants.OW_API_KEY
    );
    return urlCreator.toString();
  }
}

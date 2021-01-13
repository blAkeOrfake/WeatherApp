import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { Constants } from 'src/app/config/constants';
import { ApiHttpService } from '../api-http.service';

import { OpenWeatherService } from './open-weather.service';

describe('OpenWeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:  [
      Constants,
      ApiHttpService,
      HttpClient,
      HttpHandler
    ]
  }));

  it('should be created', () => {
    const service: OpenWeatherService = TestBed.get(OpenWeatherService);
    expect(service).toBeTruthy();
  });
});

# WeatherApp

Done an weather app using only one view.
Data is received from openweathermap API. One api is for getting current weather at all default cities at once, second api is for getting forecast hourly data only for one city at a time.
Hourly forecast is avalible every 3 hours due to free openweathermap license

### Splitting an app between services and components

Decided to split functionality between files for greater code management
I couldn't use external deploying service where i could store envirnoment variables such as apiKey, so I've done that in "Constants.ts" file

### Design
Used material design components for showing list of cities with animation

### What could be done better
Due to lack of time i couldn't done all things i'd like to, such as:
- responsive design (app works great on desktop, but not on mobile devices)
- correct test implementation

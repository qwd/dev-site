---
title: Weather
tag: ios-sdk
version: v4
description: QWeather iOS SDK support global weather real-time and forecast data in 150,000 cities around the world, including temperature, wind, relative humidity, atmospheric pressure, precipitation, visibility, dew point, cloud cover and other data.
ref: 3-sdk-ios-weather
---

Get global weather real-time and forecast data in 150,000 cities around the world, including temperature, wind, relative humidity, atmospheric pressure, precipitation, visibility, dew point, cloud cover and other data.

## Weather

| Interface code (Enum)     | Interface         | Class            |
| ------------------------- | ----------------- | ---------------- |
| INQUIRE_TYPE_WEATHER_NOW  | Real-time weather | WeatherBaseClass |
| INQUIRE_TYPE_WEATHER_3D   | 3-day forecast    | WeatherBaseClass |
| INQUIRE_TYPE_WEATHER_7D   | 7-day forecast    | WeatherBaseClass |
| INQUIRE_TYPE_WEATHER_10D  | 10-day forecast   | WeatherBaseClass |
| INQUIRE_TYPE_WEATHER_15D  | 15-day forecast   | WeatherBaseClass |
| INQUIRE_TYPE_WEATHER_24H  | 24-hour forecast  | WeatherBaseClass |
| INQUIRE_TYPE_WEATHER_72H  | 72-hour forecast  | WeatherBaseClass |
| INQUIRE_TYPE_WEATHER_168H | 168-hour forecast | WeatherBaseClass |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-ios key-ios lang-sdk unit-sdk" %}

### Sample Code

```objc
QWeatherConfigInstance.publicID = @"publicID";
QWeatherConfigInstance.appKey = @"key";
QWeatherConfigInstance.appType = APP_TYPE_BIZ;
QWeatherConfigInstance.location = @"101010100";
QWeatherConfigInstance.lang = @"";
QWeatherConfigInstance.unit = @"";
[QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_WEATHER_NOW WithSuccess:^(WeatherBaseClass *responseObject) {
        
    NSLog(@"Description->%@",[responseObject description]);
        
} faileureForError:^(NSError *error) {
    NSLog(@"error->%@",error);
        
}];
```

### Response

| Parameters | Description | Example values ​​|
| ---------- | ----------------- | --------- |
| code | Status code, please refer to [Status Code](/en/docs/start/status-code/) | 200 |
| updateTime | [Last updated time](/en/docs/start/glossary#update-time) | 2013-12-30T01:45+08:00 |
| fxLink | Responsive web page of this data, for embedded in website or APP | http://hfx.link/ae45 |
| now.obsTime | Observation time | 2013-12-30T01:45+08:00 |
| now.temp | Real-time temperature, default unit: Celsius | 21 |
| now.feelsLike | Real-time somatosensory temperature, default unit: Celsius | 23 |
| now.icon | Icon code of real-time weather conditions, free to download [weather icons](/en/docs/start/icons/) | 100 |
| now.text | Text description of live weather conditions, including descriptions of weather conditions such as cloudy, sunny, rainy and snowy | Sunny |
| now.wind360 | Real-time wind direction 360 angle | 305 |
| now.windDir | Real-time wind direction | NW |
| now.windScale | Real-time wind scale | 3 |
| now.windSpeed ​​| Real-time wind speed, km/h | 15 |
| now.humidity | Actual relative humidity, percentage value | 40 |
| now.precip | Real-time precipitation, default unit: mm | 1.2 |
| now.pressure | The actual atmospheric pressure, the default unit: HPa | 1020 |
| now.vis | Real-time visibility, default unit: km | 10 |
| now.cloud | Real-time cloud cover, percentage value | 23 |
| now.dew | Real-time dew point temperature | 12 |
| daily.fxDate | Forecast Date | 2013-05-31 |
| daily.sunrise | Sunrise time | 07:34 |
| daily.sunset | Sunset time | 17:21 |
| daily.moonrise | Moonrise time | 16:09 |
| daily.moonset | Moonset time| 04:21 |
| daily.moonPhase | Moon Phase Name | Full Moon |
| daily.tempMax | Forecast the highest temperature of the day | 4 |
| daily.tempMin | Forecast the lowest temperature of the day | -5 |
| daily.iconDay | Icon code of forecast weather conditions, free to download [weather icons](/en/docs/start/icons/) | 100 |
| daily.textDay | Daily forecast weather conditions | Sunny |
| daily.iconNight | Icon codes for forecasting night weather conditions, the icons can be downloaded from [weather conditions and icons](/en/docs/start/icons/) | 100 |
| daily.textNight | A text description of the forecast evening weather conditions, including descriptions of weather conditions such as overcast, sunny, rain and snow | Sunny |
| daily.wind360Day | Forecast daytime wind direction 360 angle | 305 |
| daily.windDirDay | Daytime wind direction forecast | NW |
| daily.windScaleDay | Forecast daytime wind scale | 3-4 |
| daily.windSpeedDay | Forecast daytime wind speed, km/h | 15 |
| daily.wind360Night | Forecast night wind direction 360 angle | 305 |
| daily.WindDirNight | Forecast the day wind direction at night | NW |
| daily.windScaleNight | Forecast night wind scale | 3-4 |
| daily.windSpeedNight | Forecast night wind speed, km/h | 15 |
| daily.humidity | Forecast the relative humidity of the day, percentage value | 40 |
| daily.precip | Precipitation of the day, the default unit: mm | 1.2 |
| daily.pressure | Predict the atmospheric pressure of the day, the default unit: hectopascal | 1020 |
| daily.vis | Forecast visibility for the day, default unit: kilometers | 10 |
| daily.cloud | Forecast the cloud amount of the day, percentage value | 23 |
| daily.uvIndex | Forecast the day's UV intensity index | 3 |
| hourly.fxTime | Hourly forecast time | 2013-12-30T13:00+08:00 |
| hourly.temp | Hourly forecast temperature | 2 |
| hourly.icon | Icon code of hourly forecast weather conditions, free to download [weather icons](/en/docs/start/icons/) | 101 |
| hourly.text | Hourly forecast weather conditions | Cloudy |
| hourly.wind360 | Hourly forecast wind direction 360 angle | 305 |
| hourly.windDir | Hourly forecast wind direction | NW |
| hourly.windScale | Hourly forecast wind scale | 3 |
| hourly.windSpeed ​​| Hourly forecast wind speed, km/h | 15 |
| hourly.humidity | Hourly forecast of relative humidity, percentage value | 40 |
| hourly.precip | Precipitation hourly, default unit: mm | 1.2 |
| hourly.pop | Hourly forecast precipitation probability, percentage value, **may be null** | 5 |
| hourly.pressure | Forecast the atmospheric pressure hourly, the default unit: hectopascal | 1020 |
| hourly.cloud | Hourly forecast cloud cover, percentage value | 23 |
| hourly.dew | Hourly forecast dew point temperature | 12 |
| refer.sources | Data source and other statements, **may be null** | QWeather|
| refer.license | License, **may be null** |commercial license |

## Minutely Precipitation

Interface code (Enum) | Interface | Class
--------- | ------------- | -----------
INQUIRE_TYPE_WEATHER_MINUTELY | Minute precipitation | WeatherMinutelyBaseClass

### Request Parameters

{% include params.html p="location-coord key-ios lang-zhen-sdk" %}

### Sample Code

```objc
 
    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;
    QWeatherConfigInstance.location = @"116.41,39.92";
    QWeatherConfigInstance.lang = @"";
    [QWeatherConfigInstance weatherWithInquireType: INQUIRE_TYPE_WEATHER_MINUTELY WithSuccess:^(WeatherMinutelyBaseClass *responseObject) {
        
        NSLog(@"Description->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
 
```

### Response

| Parameters | Description | Example |
| :-------------- | :-------------------------------- ------------------------------------- | :----------- ---------- |
| code | Status code, please refer to [Status Code](/en/docs/start/status-code/) | 200 |
| updateTime | [Last updated time](/en/docs/start/glossary#update-time) | 2013-12-30T01:45+08:00 |
| fxLink | The city's minute precipitation details are adaptive web pages, which can be embedded in websites or applications. **It **may be null**. ** | http://hfx.link/ae45 |
| summary | Minute precipitation description | No precipitation in the next 2 hours |
| minutely.fxTime | Forecast time | 2013-12-30T01:45+08:00 |
| minutely.precip | Precipitation | 10 |
| minutely.type | Type of precipitation<br />`rain`雨<br />`snow`雪 | rain |
| refer.sources | Data source and other statements, **may be null** | |
| refer.license | License, **may be null** | |
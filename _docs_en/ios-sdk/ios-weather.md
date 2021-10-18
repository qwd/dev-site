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

{% include api-response.html group="weather" type="now daily hourly" prefix="now daily hourly" %}

## Minutely Precipitation

| Interface code (Enum)         | Interface            | Class                    |
| ----------------------------- | -------------------- | ------------------------ |
| INQUIRE_TYPE_WEATHER_MINUTELY | Minute precipitation | WeatherMinutelyBaseClass |

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

{% include api-response.html group="minutely" prefix="nil"  %}
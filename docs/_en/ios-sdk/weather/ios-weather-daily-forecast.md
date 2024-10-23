---
title: Weather Daily Forecast
tag: [guide, ios, weather, daily]
ref: 2-sdk-ios-weather-daily-forecast
---

Get weather daily forecasts for the next 3-15 days for cities around the world.

| Interface code (Enum)     | Interface         | Class            |
| ------------------------- | ----------------- | ---------------- |
| INQUIRE_TYPE_WEATHER_3D   | 3-day forecast    | WeatherBaseClass |
| INQUIRE_TYPE_WEATHER_7D   | 7-day forecast    | WeatherBaseClass |
| INQUIRE_TYPE_WEATHER_10D  | 10-day forecast   | WeatherBaseClass |
| INQUIRE_TYPE_WEATHER_15D  | 15-day forecast   | WeatherBaseClass |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-def lang-def unit-def" %}

### Sample Code

```objc
QWeatherConfigInstance.publicID = @"publicID";
QWeatherConfigInstance.appKey = @"key";
QWeatherConfigInstance.appType = APP_TYPE_BIZ;
QWeatherConfigInstance.location = @"101010100";
QWeatherConfigInstance.lang = @"";
QWeatherConfigInstance.unit = @"";
[QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_WEATHER_3D WithSuccess:^(WeatherBaseClass *responseObject) {
        
    NSLog(@"Description->%@",[responseObject description]);
        
} faileureForError:^(NSError *error) {
    NSLog(@"error->%@",error);
        
}];
```

### Response

{% include api-response.html group="weather" type="daily" prefix="daily" %}
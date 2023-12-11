---
title: Weather Hourly Forecast
tag: [guide, ios, weather, hourly]
description: Get weather hourly forecasts for cities around the world for the next 24-168 hours.
ref: 3-sdk-ios-weather-hourly-forecast
---

Get hourly weather forecasts for cities around the world for the next 24-168 hours.

## Weather

| Interface code (Enum)     | Interface         | Class            |
| ------------------------- | ----------------- | ---------------- |
| INQUIRE_TYPE_WEATHER_24H  | 24-hour forecast  | WeatherBaseClass |
| INQUIRE_TYPE_WEATHER_72H  | 72-hour forecast  | WeatherBaseClass |
| INQUIRE_TYPE_WEATHER_168H | 168-hour forecast | WeatherBaseClass |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-ios key-ios lang-def unit-sdk" %}

### Sample Code

```objc
QWeatherConfigInstance.publicID = @"publicID";
QWeatherConfigInstance.appKey = @"key";
QWeatherConfigInstance.appType = APP_TYPE_BIZ;
QWeatherConfigInstance.location = @"101010100";
QWeatherConfigInstance.lang = @"";
QWeatherConfigInstance.unit = @"";
[QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_WEATHER_24H WithSuccess:^(WeatherBaseClass *responseObject) {
        
    NSLog(@"Description->%@",[responseObject description]);
        
} faileureForError:^(NSError *error) {
    NSLog(@"error->%@",error);
        
}];
```

### Response

{% include api-response.html group="weather" type="hourly" prefix="hourly" %}

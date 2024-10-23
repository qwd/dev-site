---
title: Real-time Weather
tag: [guide, ios, weather, now]
ref: 1-sdk-ios-weather-now
---

Get real-time weather data for 200,000+ cities around the world, including temperature, wind, humidity, pressure, precipitation, visibility, etc.

| Interface code (Enum)     | Interface         | Class            |
| ------------------------- | ----------------- | ---------------- |
| INQUIRE_TYPE_WEATHER_NOW  | Real-time weather | WeatherBaseClass |

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
[QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_WEATHER_NOW WithSuccess:^(WeatherBaseClass *responseObject) {
        
    NSLog(@"Description->%@",[responseObject description]);
        
} faileureForError:^(NSError *error) {
    NSLog(@"error->%@",error);
        
}];
```

### Response

{% include api-response.html group="weather" type="now" prefix="now" %}

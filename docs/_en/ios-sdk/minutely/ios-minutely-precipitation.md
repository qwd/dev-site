---
title: Minutely Precipitation
tag: [guide, ios, minutely, precip]
ref: 1-sdk-ios-minutely-precip
---

Get minute-level precipitation forecast data every 5 minutes for the next 2 hours in China.

> This data is only supported for Chinese cities.

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

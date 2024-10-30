---
title: Air Quality Daily Forecast
tag: [guide, ios, air, daily]
description: Air Quality Daily Forecast API for Chinese cities, including AQI, air quality levels, primary pollutants.
ref: 2-sdk-ios-air-daily-forecast
---

Air Quality Daily Forecast API for Chinese cities, including AQI, air quality levels, primary pollutants.

| Interface code (Enum) | Interface                           | Class        |
| -------------------------- | ------------------------------ | ------------ |
| INQUIRE_TYPE_WEATHER_AIR_5D| Air quality 5-day forecast  ​​ | AirBaseClass |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-def lang-def" %}

### Sample Code

```objc
    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;
    QWeatherConfigInstance.location = @"101010100";
    QWeatherConfigInstance.lang = @"";
    QWeatherConfigInstance.unit = @"";
    [QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_WEATHER_AIR_5D WithSuccess:^(AirBaseClass *responseObject) {
        
        NSLog(@"Description->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```

### Response


{% include api-response.html group="air" type="daily" prefix="daily"  %}

### Air Quality Index Level

See [Air Quality Info](/en/docs/resource/air-info/).
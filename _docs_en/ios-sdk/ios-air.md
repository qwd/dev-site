---
title: Air Quality
tag: ios-sdk
version: v4
description: QWeather iOS SDK air quality AQI supported all cities and 1500+ monitoring stations in China.
ref: 6-sdk-ios-air
---

Air Quality real-time and daily forecast for Chinese cities and 1,700 monitoring stations, including AQI, air quality levels, primary pollutants, PM10, PM2.5, ozone, and nitrogen dioxide , sulfur dioxide, carbon monoxide values.

| Interface code (Enum) | Interface                           | Class        |
| -------------------------- | ------------------------------ | ------------ |
| INQUIRE_TYPE_WEATHER_AIR_NOW| Air Quality Live              | AirBaseClass |
| INQUIRE_TYPE_WEATHER_AIR_5D| Air quality 5-day forecast  ​​ | AirBaseClass |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-ios key-ios lang-sdk" %}

### Sample Code

```objc
    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;
    QWeatherConfigInstance.location = @"101010100";
    QWeatherConfigInstance.lang = @"";
    QWeatherConfigInstance.unit = @"";
    [QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_WEATHER_AIR_NOW WithSuccess:^(AirBaseClass *responseObject) {
        
        NSLog(@"Description->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```

### Response

> `station`, the air data from monitoring station are only response for cities in [POI-Air-Monitoring-Station-List](https://github.com/qwd/LocationList/blob/master/POI-Air-Monitoring-Station-List-latest.csv){: target="_blank"}.

{% include api-response.html group="air" type="now station daily" prefix="now station daily"  %}

### Air Quality Index Level

See [Air Quality Info](/en/docs/resource/air-info/).
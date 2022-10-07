---
title: Real-time Air Quality
tag: [guide, ios, air, now]
ref: 1-sdk-ios-air-now
---

Real-time air quality for Chinese cities and 1,700 monitoring stations, including AQI, air quality levels, primary pollutants, PM10, PM2.5, ozone, nitrogen dioxide sulfur dioxide and carbon monoxide values.

| Interface code (Enum) | Interface                           | Class        |
| -------------------------- | ------------------------------ | ------------ |
| INQUIRE_TYPE_WEATHER_AIR_NOW| Air Quality Live              | AirBaseClass |

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

{% include api-response.html group="air" type="now station" prefix="now station"  %}

### Air Quality Index Level

See [Air Quality Info](/en/docs/resource/air-info/).
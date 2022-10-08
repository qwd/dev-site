---
title: Storm Forecast
tag: [guide, ios, storm, forecast]
ref: 3-sdk-ios-storm-forecast
---

Storm Forecast iOS SDK provides tropical cyclones location, level, pressure, wind speed for major ocean basins around the world.

> **Note:** For inactive storms, the response data is **NULL**, please get the storms status by [Storm List](/en/docs/ios-sdk/tropical-cyclone/ios-storm-list/) first.


| Interface code (Enum)             | Interface     | Class                 |
| --------------------------- | -------- | ---------------------- |
| INQUIRE_TYPE_STORM_FORECAST | Storm forecast data | StormForecastBaseClass |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="stormid-sdk key-ios" %}

### Sample Code

```objc
    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;    
    QWeatherConfigInstance.stormID = @"NP_2102";
    [QWeatherConfigInstance weatherWithInquireType: INQUIRE_TYPE_STORM_FORECAST WithSuccess:^(StormForecastBaseClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```
     
### Response

{% include api-response.html group="storm" type="forecast" prefix="forecast"  %}

### Typhoon level

GBT 19201-2006

| Tropical cyclone level | Maximum average wind speed near the bottom center (m/s) | Maximum wind near the bottom center (level) |
| ------------------- | ----------------------------- | ------------------------ |
| Tropical pressure (TD) | 10.8-17.1 | 6-7 |
| Tropical Storm (TS) | 17.2-24.4 | 8-9 |
| Severe Tropical Storm (STS) | 24.5-32.6 | 10-11 |
| Typhoon (TY) | 32.7-41.4 | 12-13 |
| Severe Typhoon (STY) | 41.5-50.9 | 14-15 |
| Super Typhoon (SuperTY) | ≥51.0 | 16 or above |
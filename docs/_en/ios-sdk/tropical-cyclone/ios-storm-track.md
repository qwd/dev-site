---
title: Storm Track
tag: [guide, ios, storm, track]
ref: 2-sdk-ios-storm-track
---

Get the tropical cyclones location, level, pressure, windspeed, and track path of active storm in major ocean basins around the world.

| Interface code (Enum)  | Interface | Class |
| ---------------- || -------------- ---------------------- |
| INQUIRE_TYPE_STORM_TRACK| Real-time storm data and storm track data   | StormNowTrackBaseClass |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="stormid-sdk" %}

### Sample Code

```objc
    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;    
    QWeatherConfigInstance.stormID = @"NP_2102";
    [QWeatherConfigInstance weatherWithInquireType: INQUIRE_TYPE_STORM_TRACK WithSuccess:^(StormNowTrackBaseClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```
     
### Response

{% include api-response.html group="storm" type="active now track"  prefix="nil now track"%}

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
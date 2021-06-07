---
title: Tropical cyclone
tag: ios-sdk
version: v4
description: Tropical cyclone SDK provides tropical cyclones (typhoon) information in major ocean basins around the world, including real-time typhoon location, level, pressure, wind and etc., as well as typhoon path and typhoon forecast information.
toc: true
ref: 91-sdk-ios-tropical
---

Tropical cyclone SDK provides tropical cyclones (typhoon) information in major ocean basins around the world, including real-time typhoon location, level, pressure, wind and etc., as well as typhoon path and typhoon forecast information.

## Storm List

Get storem ID and list of tropical cyclones (typhoons) in the world’s major ocean basins.

>  Only the coastal areas of China are supported now, i.e. `basin=NP`

| Interface code (Enum)         | Interface     | Class             |
| ----------------------- | -------- | ------------------ |
| INQUIRE_TYPE_STORM_LIST | Storm list and IDs | StormListBaseClass |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="basin year key-ios" %}

### Sample Code

```objc
    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;    
    QWeatherConfigInstance.basin = BASIN_TYPE_NP;
    QWeatherConfigInstance.year = @"2021";
    [QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_STORM_LIST WithSuccess:^(StormListBaseClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```
     
### Response

{% include api-response.html group="storm" type="ios-list" prefix="storm"  %}

## Storm Track

Storm Track provides tropical cyclones real-time information, including real-time tropical cyclones location, level, pressure, wind and etc., as well as historical position.

| Interface code (Enum)  | Interface | Class |
| ---------------- || -------------- ---------------------- |
| INQUIRE_TYPE_STORM_TRACK| Real-time storm data and storm track data   | StormNowTrackBaseClass |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="stormid-sdk key-ios" %}

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

## Storm Forecast

Storm Forecast provides tropical cyclones information for a specific tropical cyclone, the data including forecast tropical cyclones location, level, pressure, wind and etc.

> For historical storms, the returned data is NULL, please get the storms status by [Storm List](#storm-list) first.

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

## Typhoon level

GBT 19201-2006

| Tropical cyclone level | Maximum average wind speed near the bottom center (m/s) | Maximum wind near the bottom center (level) |
| ------------------- | ----------------------------- | ------------------------ |
| Tropical pressure (TD) | 10.8-17.1 | 6-7 |
| Tropical Storm (TS) | 17.2-24.4 | 8-9 |
| Severe Tropical Storm (STS) | 24.5-32.6 | 10-11 |
| Typhoon (TY) | 32.7-41.4 | 12-13 |
| Severe Typhoon (STY) | 41.5-50.9 | 14-15 |
| Super Typhoon (SuperTY) | ≥51.0 | 16 or above |
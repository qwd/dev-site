---
title: Weather Warning
tag: ios-sdk
version: v4
description: QWeather iOS SDK support severe weathe warning around the world, real-time access to typhoon, heat wave, cold wave, gale, heavy air pollution, wildfire, dust storms, droughts, lightning, hail, frost, heavy fog, etc.
ref: 5-sdk-ios-warning
---

Weather Warning for getting real-time local severe weather warning around the world, including typhoon, heat wave, cold wave, gale, heavy air pollution, wildfire, dust storms, droughts, lightning, hail, frost, heavy fog, etc.

## Weather Warning

| Interface code (Enum) | Interface       | Class            |
| --------------------- | --------------- | ---------------- |
| INQUIRE_TYPE_WARNING  | Weather warning | WarningBaseClass |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-ios" %}

> Weather warnings are not available in all cities, see [supported countries or regions for weather warnings](/en/docs/start/warning-info/#supported-regions).

{% include params.html p="key-ios lang-zhen-sdk" %}

### Sample Code

```objc
 
    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;
    QWeatherConfigInstance.location = @"101010100";
    QWeatherConfigInstance.lang = @"";
    QWeatherConfigInstance.unit = @"";
    [QWeatherConfigInstance weatherWithInquireType: INQUIRE_TYPE_WARNING WithSuccess:^(WarningBaseClass *responseObject) {
        
        NSLog(@"Description->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```

### Response

{% include api-response.html group="warning" type="warning" prefix="warning" %}

## Weather Warning City List

Get a list of cities for the specified country or region where weather warnings are currently in effect.

| Interface code (Enum)    | Interface              | Class            |
| ------------------------ | ---------------------- | ---------------- |
| INQUIRE_TYPE_WARNINGLIST | List of warning cities | WarningListClass |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="range-warning key-ios" %}

### Sample Code

```objc
 
    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;
    QWeatherConfigInstance.range = @"cn";
    [QWeatherConfigInstance weatherWithInquireType: INQUIRE_TYPE_WARNINGLIST WithSuccess:^(WarningListClass *responseObject) {
        
        NSLog(@"Description->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```

### Response

{% include api-response.html group="warning" type="list" prefix="warningLocList" fxlink=0 %}

## Warning Level and Type

See [Warning Level and Type](/en/docs/start/warning-info/)
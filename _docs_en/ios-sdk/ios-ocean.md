---
title: Tide and Currents
tag: ios-sdk
version: v4
description: The ocean SDK includes Tide and Currents data in more than 10,000 ports or locations around the world.
toc: true
ref: 9-sdk-ios-ocean
---

The ocean SDK includes Tide and Currents data in more than 10,000 ports or locations around the world.

## Tide

Global tide table and forecast data for the next 10 days.

| Interface code (Enum)         | Interface     | Class             |
| ----------------------- | ---- | ------------------ |
| INQUIRE_TYPE_OCEAN_TIDE | Tide data | OceanTideBaseClass |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-p2 date10 key-ios" %}

### Sample Code

```objc
QWeatherConfigInstance.publicID = @"publicID";
QWeatherConfigInstance.appKey = @"key";
QWeatherConfigInstance.appType = APP_TYPE_BIZ;    
QWeatherConfigInstance.location = @"P66981";
QWeatherConfigInstance.date = @"20210518";
[QWeatherConfigInstance weatherWithInquireType: INQUIRE_TYPE_OCEAN_TIDE WithSuccess:^(OceanTideBaseClass  *responseObject) {
        
    NSLog(@"描述->%@",[responseObject description]);
        
} faileureForError:^(NSError *error) {
    NSLog(@"error->%@",error);
        
}];
```

### Response

{% include api-response.html group="ocean" type="ttable thourly" prefix="tideTable tideHourly" %}


## Currents

Currents data for the next 10 days, including currents speed, direction and hourly forecast.

| Interface code (Enum)             | Interface     | Class             |
| --------------------------- | ---- | ------------------ |
| INQUIRE_TYPE_OCEAN_CURRENTS | Currents data | OceanTideBaseClass |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-p6 date10 key-ios" %}

### Sample Code

```objc
QWeatherConfigInstance.publicID = @"publicID";
QWeatherConfigInstance.appKey = @"key";
QWeatherConfigInstance.appType = APP_TYPE_BIZ;    
QWeatherConfigInstance.location = @"P66981";
QWeatherConfigInstance.date = @"20210518";
[QWeatherConfigInstance weatherWithInquireType: INQUIRE_TYPE_OCEAN_CURRENTS WithSuccess:^(OceanCurrentsBaseClass  *responseObject) {
        
    NSLog(@"描述->%@",[responseObject description]);
        
} faileureForError:^(NSError *error) {
    NSLog(@"error->%@",error);
        
}];
```

### Response

{% include api-response.html group="ocean" type="ctable chourly" prefix="currentsTable currentsHourly" %}


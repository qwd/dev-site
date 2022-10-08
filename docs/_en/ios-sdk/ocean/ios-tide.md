---
title: Tide
tag: [guide, ios, ocean, tide]
ref: 1-sdk-ios-tide
---

Global tidal data for the next 10 days, including tide table and hourly tide forecast data.

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


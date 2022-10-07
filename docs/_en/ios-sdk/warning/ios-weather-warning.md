---
title: Weather Warning
tag: [guide, ios, warning, now]
ref: 1-sdk-ios-weather-warning
---

Get officially issued real-time severe weather warning data around the world.

> For more warning information, see [Warning Info](/en/docs/resource/warning-info/).

| Interface code (Enum) | Interface       | Class            |
| --------------------- | --------------- | ---------------- |
| INQUIRE_TYPE_WARNING  | Weather warning | WarningBaseClass |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-ios" %}

> Weather warnings are not available in all cities, see [supported countries or regions for weather warnings](/en/docs/resource/warning-info/#supported-regions).

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

### Warning Level and Type

See [Warning Level and Type](/en/docs/resource/warning-info/)
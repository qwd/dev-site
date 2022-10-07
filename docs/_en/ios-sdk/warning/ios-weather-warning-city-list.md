---
title: Weather Warning City List
tag: [guide, ios, warning, list]
ref: 2-sdk-ios-weather-warning-city-list
---

Get a list of cities for the specified country or region where weather warnings are currently in effect.

See also [Weather warning API](/en/docs/ios-sdk/warning/weather-warning/) to get warning details.

> For more warning information, see [Warning Info](/en/docs/resource/warning-info/).


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

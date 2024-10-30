---
title: Weather Warning City List
tag: [guide, ios, warning, list]
ref: 2-sdk-ios-weather-warning-city-list
---

Get a list of cities for the specified country or region where weather warnings are currently in effect.

See also [Weather warning iOS SDK](/en/docs/ios-sdk/warning/ios-weather-warning/) to get warning details.

> **Note:** Weather Warning City List only supports China (including Hong Kong, Macao and China Taiwan) now. For other countries and regions, please use [Weather Warning](/en/docs/ios-sdk/warning/ios-weather-warning/).
{:.bqwarning}

> **Tips:** For more warning description, see [Resource - Warning Info](/en/docs/resource/warning-info/).


| Interface code (Enum)    | Interface              | Class            |
| ------------------------ | ---------------------- | ---------------- |
| INQUIRE_TYPE_WARNINGLIST | List of warning cities | WarningListClass |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="range-warning" %}

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

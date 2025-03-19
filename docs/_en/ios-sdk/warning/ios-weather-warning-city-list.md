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


| Interface code    | Interface              | Class            |
| ------------------------ | ---------------------- | ---------------- |
| warningList | List of warning cities | WarningListResponse |

### Request Parameters

**WarningListParameter**

{% include params.html p="range-warning" %}

### Sample Code

**Swift**

```swift
Task{
    do {
        let parameter = WarningListParameter(range: .CN)
        let response = try await QWeather.instance
            .warningList(parameter)
        print(response)
    } catch QWeatherError.errorResponse(let error) {
        print(error)
    } catch {
        print(error)
    }
}
```

**Objective-C**

```objc
WarningListParameter *parameter = [WarningListParameter instanceWithRange:RangeCN];
[QWeatherObjc warningList:parameter completionHandler:^(WarningListResponse * _Nullable response, NSError * _Nullable error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
}];
```

### Response

**WarningListResponse**

{% include api-response.html group="warning" type="list" prefix="warningLocList" fxlink=0 %}

---
title: Weather Warning
tag: [guide, ios, warning, now]
ref: 1-sdk-ios-weather-warning
---

Get officially issued real-time severe weather warning data around the world.

> **Tips:** For more warning description, see [Resource - Warning Info](/en/docs/resource/warning-info/).

| Interface code | Interface       | Class            |
| --------------------- | --------------- | ---------------- |
| warningNow  | Weather warning | WarningResponse |

## Parameters

**WarningNowParameter**

{% include params.html p="location-def lang-def" %}


## Sample code

**Swift**

```swift
    Task {
        do {
            let parameter = WarningNowParameter(location: "101010100")
            let response = try await QWeather.instance
                .warningNow(parameter)
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
     WarningNowParameter *parameter = [WarningNowParameter instanceWithLocation:@"101010100" lang:@(LangZH_HANS)];
    [QWeatherObjc warningNow:parameter completionHandler:^(WarningResponse * _Nullable response, NSError * _Nullable error) {
        if (response) {
            NSLog(@"%@", response.description);
        }
        if (error) {
            NSLog(@"%@", error.localizedDescription);
        }
    }];
```

## Response

**WarningResponse**

{% include api-response.html group="warning" type="warning" prefix="warning" %}

### Warning Level and Type

See [Warning Level and Type](/en/docs/resource/warning-info/)
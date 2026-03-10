---
title: Weather Alert
tag: [guide, ios, warning, current]
ref: 1-sdk-ios-weather-alert
---

Get officially issued real-time severe weather alert data around the world.

> **Hint:** For the implementation of weather alert, see [Resource - Alert Info](/en/docs/resource/warning-info/) in advance.


| Interface code     | Interface    | Class           |
| -------------------- | -------- | ---------------- |
| weatherAlertCurrent | Weather Alert | WeatherAlertCurrentResponse |

## Parameters

**WeatherAlertCurrentParameter**

| Name   | Type | Required | Example |
| -------- | -------- | ---- | ------ |
| longitude | Double | true | 116.41 |
| latitude | Double | true | 39.92 |
| localTime | Bool | true | true |
| lang | Lang | false | ZH_HANS |

## Sample code

**Swift**

```swift
Task {
    do {
        let parameter = WeatherAlertCurrentParameter(longitude: 113.26, 
                                                      latitude: 38.73, 
                                                     localTime: false, 
                                                          lang: .ZH_HANS)
        let response = try await Q.weatherAlertCurrent(parameter)
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
WeatherAlertCurrentParameter *parameter = [WeatherAlertCurrentParameter instanceWithLongitude: 113.26 
                                                                                     latitude: 38.73 
                                                                                    localTime: NO 
                                                                                         lang: @(LangZH_HANS)];
[QWeatherObjc weatherAlertCurrent:parameter completionHandler:^(WeatherAlertCurrentResponse * _Nullable response, NSError * _Nullable error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
}];
```

## Response

**WeatherAlertCurrentResponse**

{% include api-response.html group="warning" type="alert-v1" prefix="alerts" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag zeroResult attributions" %}

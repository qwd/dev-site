---
title: Air Quality Daily Forecast
tag: [guide, ios, air, daily]
description: Air Quality Daily Forecast API for Chinese cities, including AQI, air quality levels, primary pollutants.
ref: 2-sdk-ios-air-daily-forecast
---

Air Quality Daily Forecast API for Chinese cities, including AQI, air quality levels, primary pollutants.

> **Note:** [Air Quality API v1 (new)](/en/docs/api/air-quality/) is now available, please try to use and upgrade.

| Interface code | Interface                           | Class        |
| -------------------------- | ------------------------------ | ------------ |
| air5d | Air quality 5-day forecast    | AirDailyResponse |

### Request Parameters

**AirParameter**

If no optional parameters are set, the default value will be used.

{% include params.html p="location-def lang-def" %}

### Sample Code

**Swift**

```swift
Task {
    do {
        let parameter = AirParameter.make(location: "101010100" lang:.ZH_HANS)
        let response = try await QWeather.instance
            .air5d(parameter)
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
AirParameter * parameter = [AirParameter instanceWithLocation:@"101010100" lang:@(LangZH_HANS)];
[QWeatherObjc air5d:parameter completionHandler:^(AirDailyResponse * _Nullable response, NSError * _Nullable error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
}];
```

### Response

**AirDailyResponse**

{% include api-response.html group="air" type="daily" prefix="daily"  %}

### Air Quality Index Level

See [Air Quality Info](/en/docs/resource/air-info/).
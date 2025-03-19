---
title: Real-time Air Quality
tag: [guide, ios, air, now]
ref: 1-sdk-ios-air-now
---

Real-time air quality for Chinese cities and 1,700 monitoring stations, including AQI, air quality levels, primary pollutants, PM10, PM2.5, ozone, nitrogen dioxide sulfur dioxide and carbon monoxide values.

> **Note:** [Air Quality API v1 (new)](/en/docs/api/air-quality/) is now available, please try to use and upgrade.

| Interface code | Interface                           | Class        |
| -------------------------- | ------------------------------ | ------------ |
| airNow | Air Quality Live              | AirNowResponse |

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
            .airNow(parameter)
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
[QWeatherObjc airNow:parameter completionHandler:^(AirNowResponse * _Nullable response, NSError * _Nullable error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
}];
```

### Response

**AirNowResponse**

> `station`, the air data from monitoring station are only response for cities in [POI-Air-Monitoring-Station-List](https://github.com/qwd/LocationList/blob/master/POI-Air-Monitoring-Station-List-latest.csv){: target="_blank"}.

{% include api-response.html group="air" type="now station" prefix="now station"  %}

### Air Quality Index Level

See [Air Quality Info](/en/docs/resource/air-info/).
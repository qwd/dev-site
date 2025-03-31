---
title: Storm Forecast
tag: [guide, ios, storm, forecast]
ref: 3-sdk-ios-storm-forecast
---

Storm Forecast provides tropical cyclones information for a specific tropical cyclone, the data including forecast tropical cyclones location, level, pressure, wind and etc.

> **Note:** For inactive storms, the returned data is **NULL**, please get the storms status by [Storm List](/en/docs/ios-sdk/tropical-cyclone/ios-storm-list/) first.


| Interface code              | Interface     | Class                 |
| --------------------------- | ------------- | ---------------------- |
| tropicalStormForecast      | Storm forecast data | StormForecastResponse |

## Parameters

**StormParameter**

{% include params.html p="stormid-sdk" %}

## Sample code

**Swift**

```swift
Task{
    do {
        let parameter = StormParameter(stormid: "NP_2421")
        let response = try await QWeather.instance
            .tropicalStormForecast(parameter)
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
StormParameter *parameter = [StormParameter instanceWithStormid:@"NP_2421"];
[QWeatherObjc tropicalStormForecast:parameter completionHandler:^(StormForecastResponse * _Nullable response, NSError * _Nullable error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
}];
```
     
## Response

**StormForecastResponse**

{% include api-response.html group="storm" type="forecast" prefix="forecast"  %}

### Typhoon level

GBT 19201-2006

| Tropical cyclone level | Maximum average wind speed near the bottom center (m/s) | Maximum wind near the bottom center (level) |
| ------------------- | ----------------------------- | ------------------------ |
| Tropical pressure (TD) | 10.8-17.1 | 6-7 |
| Tropical Storm (TS) | 17.2-24.4 | 8-9 |
| Severe Tropical Storm (STS) | 24.5-32.6 | 10-11 |
| Typhoon (TY) | 32.7-41.4 | 12-13 |
| Severe Typhoon (STY) | 41.5-50.9 | 14-15 |
| Super Typhoon (SuperTY) | ≥51.0 | 16 or above |
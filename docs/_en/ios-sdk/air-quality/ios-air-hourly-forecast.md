---
title: Air Quality Hourly Forecast (new)
tag: [guide, ios, air-v1, hourly-v1]
ref: 1-sdk-ios-air-hourly-v1
---

The air quality hourly forecast API provides air quality forecast data for each hour of the next 24 hours, including AQI, pollutants concentration, sub-indexes, health effects and advice.

We recommend to read [Air Quality Info](/en/docs/resource/air-info/) to learn about the AQIs, pollutants, supported regions and more.

| Interface code | Interface                 | Class       |
| --------------- | ---------------------------- | ------------ |
| airHourly: | Air quality hourly forecast     | AirV1NowResponse |

### Parameters of AirV1Parameter

| Name   | Type | Required | Exemple |
| -------- | -------- | ---- | ------ |
| longitude | Float | 是 | 116.41 |
| latitude | Float | 是 | 39.92 |
| lang | Lang | 否 | ZH_HANS |

### Requeset Example

Swift

```swift
   Task {
        do {
            let parameter = AirV1Parameter(longitude: 116.41, latitude: 39.92)
            let response = try await QWeather.instance
                .airHourly(parameter)
            print(response)
        } catch QWeatherError.errorResponse(let error) {
            print(error)
        } catch {
            print(error)
        }
   }
```

Objective-C

```objc
    AirV1Parameter *parameter = [AirV1Parameter instanceWithLongitude:116.41 latitude:39.92 lang:@(LangZH_HANS)];
    [QWeatherObjc airHourly:parameter completionHandler:^(AirV1HourlyResponse * _Nullable response, NSError * _Nullable error) {
        if (response) {
            NSLog(@"%@", response.description);
        }
        if (error) {
            NSLog(@"%@", error.localizedDescription);
        }
    }];
```

### Response

{% include api-response.html group="air" type="hourly-v1" prefix="hours" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag"   %}


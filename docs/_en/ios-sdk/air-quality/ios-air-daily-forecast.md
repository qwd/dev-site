---
title: Air Quality Daily Forecast (new)
tag: [guide, ios, air-v1, daily-v1]
ref: 1-sdk-ios-air-daily-v1
---

Air quality (AQI) dailay forecasts, pollutants, and health advice for the next 3 days.

We recommend to read [Air Quality Info](/en/docs/resource/air-info/) to learn about the AQIs, pollutants, supported regions and more.

| Interface Code | Interface                         | Class       |
| --------------- | ---------------------------- | ------------ |
| airDaily | Air quality daily forecast (new)     | AirV1DailyResponse |

### Parameters of AirV1Parameter

| Name   | Type | Required | Example |
| -------- | -------- | ---- | ------ |
| longitude | Double | true | 116.41 |
| latitude | Double | true | 39.92 |
| lang | Lang | false | ZH_HANS |

### Reqeust Example

Swift

```swift
   Task {
        do {
            let parameter = AirV1Parameter(longitude: 116.41, latitude: 39.92)
            let response = try await QWeather.instance
                .airDaily(parameter)
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
    [QWeatherObjc airDaily:parameter completionHandler:^(AirV1DailyResponse * _Nullable response, NSError * _Nullable error) {
        if (response) {
            NSLog(@"%@", response.description);
        }
        if (error) {
            NSLog(@"%@", error.localizedDescription);
        }
    }];
```

### Response

{% include api-response.html group="air" type="daily-v1" prefix="days" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag"  %}

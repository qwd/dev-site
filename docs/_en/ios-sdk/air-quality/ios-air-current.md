---
title: Current Air Quality (new)
tag: [guide, ios, air-v1, now-v1]
ref: 1-sdk-ios-air-now-v1
---

The current air quality (AQI) API provides real-time air quality data for specified locations, data resolution is 1x1 km.

- AQI, category, color and primary pollutant based on local standards for each country or region
- Generic QWeather AQI
- Pollutant concentration values and their sub-index.
- Health effects and advice
- Associated monitoring station information

We recommend to read [Air Quality Info](/en/docs/resource/air-info/) to learn about the AQIs, pollutants, supported regions and more.

| Interface code | Interface         | Class       |
| --------------- | ---------------- | ------------ |
| airCurrent: | Current Air Quality (new)  | AirV1NowResponse |

### Parameters of AirV1Parameter

| Name   | Type | Required | Exemple |
| -------- | -------- | ---- | ------ |
| longitude | Float | 是 | 116.41 |
| latitude | Float | 是 | 39.92 |
| lang | LangType | 否 | ZH_HANS |

### Request Example

Swift

```swift
   Task {
        do {
            let parameter = AirV1Parameter(longitude: 116.41, latitude: 39.92)
            let response = try await QWeather.instance
                .airCurrent(parameter)
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
    AirV1Parameter *parameter = [AirV1Parameter instanceWithLongitude:116.41 latitude:39.92 lang:@(LangTypeZH_HANS)];
    [QWeatherObjc airCurrent:parameter completionHandler:^(AirV1NowResponse * _Nullable response, NSError * _Nullable error) {
        if (response) {
            NSLog(@"%@", response.description);
        }
        if (error) {
            NSLog(@"%@", error.localizedDescription);
        }
    }];
```

### Response

{% include api-response.html group="air" type="now-v1" prefix="nil" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag"  %}

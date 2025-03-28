---
title: Real-time Weather
tag: [guide, ios, weather, now]
ref: 1-sdk-ios-weather-now
---

Get real-time weather data for 200,000+ cities around the world, including temperature, wind, humidity, pressure, precipitation, visibility, etc.

| Interface code     | Interface         | Class            |
| ------------------------- | ----------------- | ---------------- |
| weatherNow  | Real-time weather | WeatherNowResponse |

## Request Parameters

**WeatherParameter**

{% include params.html p="location-def lang-def unit-def" %}

## Sample Code

**Swift**

```swift
Task{
    do {
        let parameter = WeatherParameter(location: "101010100")
        let response = try await QWeather.instance
            .weatherNow(parameter)
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
WeatherParameter * parameter = [WeatherParameter instanceWithLocation:@"101010100" lang:@(LangZH_HANS) unit:@(UnitMETRIC)];
[QWeatherObjc weatherNow:parameter completionHandler:^(WeatherNowResponse * _Nullable response, NSError * _Nullable error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
}];
```

## Response

**WeatherNowResponse**

{% include api-response.html group="weather" type="now" prefix="now" %}

---
title: Real-time Weather
tag: [guide, ios, weather, now]
ref: 1-sdk-ios-weather-now
---

Get real-time weather data for 200,000+ cities around the world, including temperature, wind, humidity, pressure, precipitation, visibility, etc.

| Interface code     | Interface         | Class            |
| ------------------------- | ----------------- | ---------------- |
| weatherNow:  | Real-time weather | WeatherNowResponse |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-def lang-def unit-def" %}

### Sample Code

Swift

```swift
    Task{
        do {
            let parameter = WeatherParameter(location: "101120501")
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

Objective-C

```objc
    WeatherParameter * parameter = [WeatherParameter instanceWithLocation:@"101120501" lang:@(LangTypeZH_HANS) unit:@(UnitTypeMETRIC)];
    [QWeatherObjc weatherNow:parameter completionHandler:^(WeatherNowResponse * _Nullable response, NSError * _Nullable error) {
        if (response) {
            NSLog(@"%@", response.description);
        }
        if (error) {
            NSLog(@"%@", error.localizedDescription);
        }
    }];
```

### Response

{% include api-response.html group="weather" type="now" prefix="now" %}

---
title: Weather Hourly Forecast
tag: [guide, ios, weather, hourly]
description: Get weather hourly forecasts for cities around the world for the next 24-168 hours.
ref: 3-sdk-ios-weather-hourly-forecast
---

Get hourly weather forecasts for cities around the world for the next 24-168 hours.

| Interface code  | Interface         | Class            |
| --------------- | ----------------- | ---------------- |
| weather24h  | 24-hours forecast  | WeatherHourlyResponse |
| weather72h  | 72-hours forecast  | WeatherHourlyResponse |
| weather168h | 168-hours forecast | WeatherHourlyResponse |

## Parameters

**WeatherParameter**

{% include params.html p="location-def lang-def unit-def" %}

## Sample code

**Swift**

```swift
Task{
    do {
        let parameter = WeatherParameter(location: "101010100")
        /**
        * 24-hours forecast
        */
        let _ = try await QWeather.instance
            .weather24h(parameter)

        /**
        * 72-hours forecast
        */
        let _ = try await QWeather.instance
            .weather72h(parameter)
        
        /**
        * 168-hours forecast
        */
        let _ = try await QWeather.instance
            .weather168h(parameter)

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

    void (^handler)(WeatherHourlyResponse *, NSError *) = ^(WeatherHourlyResponse *response,
    NSError *error) {
        if (response) {
            NSLog(@"%@", response.description);
        }
        if (error) {
            NSLog(@"%@", error.localizedDescription);
        }
    };

    /**
    * 24-hour forecast data
    */
    [QWeatherObjc weather24h:parameter completionHandler:handler];

    /**
    * 72-hour forecast data
    */
    [QWeatherObjc weather72h:parameter completionHandler:handler];

    /**
    * 168-hour forecast data
    */
    [QWeatherObjc weather168h:parameter completionHandler:handler];
```

## Response

**WeatherHourlyResponse**

{% include api-response.html group="weather" type="hourly" prefix="hourly" %}

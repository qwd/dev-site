---
title: Weather Daily Forecast
tag: [guide, ios, weather, daily]
ref: 2-sdk-ios-weather-daily-forecast
---

Get weather daily forecasts for the next 3-30 days for cities around the world.

| Interface code     | Interface         | Class            |
| ------------------------- | ----------------- | ---------------- |
| weather3d   | 3-days forecast    | WeatherDailyResponse |
| weather7d   | 7-days forecast    | WeatherDailyResponse |
| weather10d  | 10-days forecast   | WeatherDailyResponse |
| weather15d  | 15-days forecast   | WeatherDailyResponse |
| weather30d  | 30-days forecast   | WeatherDailyResponse |

## Request Parameters

**WeatherParameter**

{% include params.html p="location-def lang-def unit-def" %}

## Sample Code

**Swift**

```swift
Task{
    do {
        let parameter = WeatherParameter(location: "101010100")
        
        /**
        * Get 3-days forecast data
        */
        let _ = try await QWeather.instance.weather3d(parameter)

        /*
        * Get 7-days forecast data
        */
        let _ = try await QWeather.instance.weather7d(parameter)

        /**
        * Get 10-days forecast data
        */
        let _ = try await QWeather.instance.weather10d(parameter)
        
        /**
        * Get 15-days forecast data
        */
        let _ = try await QWeather.instance.weather15d(parameter)
        
        /*
        * Get 30-days forecast data
        */
        let _ = try await QWeather.instance.weather30d(parameter)

    } catch QWeatherError.errorResponse(let error) {
        print(error)
    } catch {
        print(error)
    }
}
```

**Objective-C**

```objc
WeatherParameter *parameter = [WeatherParameter instanceWithLocation:@"101010100" lang:@(LangZH_HANS) unit:@(UnitMETRIC)];

void (^handler)(WeatherDailyResponse *, NSError *) = ^(WeatherDailyResponse *response,
    NSError *error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
};

/**
* Get 3-days forecast data
*/
[QWeatherObjc weather3d:parameter completionHandler:handler];

/**
* Get 7-days forecast data
*/
[QWeatherObjc weather7d:parameter completionHandler:handler];

/**
* Get 10-days forecast data
*/
[QWeatherObjc weather10d:parameter completionHandler:handler];

/**
* Get 15-days forecast data
*/
[QWeatherObjc weather15d:parameter completionHandler:handler];

/**
* Get 30-days forecast data
*/
[QWeatherObjc weather30d:parameter completionHandler:handler];
```

## Response

**WeatherDailyResponse**

{% include api-response.html group="weather" type="daily" prefix="daily" %}
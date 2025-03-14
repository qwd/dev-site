---
title: Weather Daily Forecast
tag: [guide, ios, weather, daily]
ref: 2-sdk-ios-weather-daily-forecast
---

Get weather daily forecasts for the next 3-15 days for cities around the world.

| Interface code (Enum)     | Interface         | Class            |
| ------------------------- | ----------------- | ---------------- |
| weather3d:   | 3-day forecast    | WeatherDailyResponse |
| weather7d:   | 7-day forecast    | WeatherDailyResponse |
| weather10d:  | 10-day forecast   | WeatherDailyResponse |
| weather15d:  | 15-day forecast   | WeatherDailyResponse |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-def lang-def unit-def" %}

### Sample Code

Swift

```swift
    Task{
         do {
            let parameter = WeatherParameter(location: "101120501")
            
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

Objective-C

```objc
     WeatherParameter * parameter = [WeatherParameter instanceWithLocation:@"101120501" lang:@(LangTypeZH_HANS) unit:@(UnitTypeMETRIC)];

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

### Response

{% include api-response.html group="weather" type="daily" prefix="daily" %}
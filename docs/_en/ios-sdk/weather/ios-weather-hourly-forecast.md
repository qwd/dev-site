<!--
 * @Date: 2025-03-06 10:02:06
 * @LastEditors: 韩笑白
 * @LastEditTime: 2025-03-11 15:42:28
 * @FilePath: /dev-site/docs/_en/ios-sdk/weather/ios-weather-hourly-forecast.md
-->
---
title: Weather Hourly Forecast
tag: [guide, ios, weather, hourly]
description: Get weather hourly forecasts for cities around the world for the next 24-168 hours.
ref: 3-sdk-ios-weather-hourly-forecast
---

Get hourly weather forecasts for cities around the world for the next 24-168 hours.

## Weather

| Interface code  | Interface         | Class            |
| --------------- | ----------------- | ---------------- |
| weather24h:  | 24-hour forecast  | WeatherHourlyResponse |
| weather72h:  | 72-hour forecast  | WeatherHourlyResponse |
| weather168h: | 168-hour forecast | WeatherHourlyResponse |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="location-def lang-def unit-def" %}

### Sample Code

Swift

```swift
    Task{
        do {
            let parameter = WeatherParameter(location: "101010100")
            /**
            * 24-hour forecast data
            */
            let _ = try await QWeather.instance
                .weather24h(parameter)

            /**
            * 72-hour forecast data
            */
            let _ = try await QWeather.instance
                .weather72h(parameter)
            
            /**
            * 168-hour forecast data
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

Objective-C

```objc
    WeatherParameter *parameter = [WeatherParameter makeWithLocation:@"101120501" 
                                                        lang:LangTypeZH_HANS 
                                                        unit:UnitTypeMETRIC];
    
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

### Response

{% include api-response.html group="weather" type="hourly" prefix="hourly" %}

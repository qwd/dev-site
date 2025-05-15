---
title: Grid Weather Daily Forecast
tag: [guide, ios, weather, grid-daily]
ref: 2-sdk-ios-grid-weather-daily-forecast
---

Weather forecast data based on numerical models, to provide daily weather forecasts at specified coordinates around the world, with a spatial resolution of 3-5 kilometers.

> **Hint:** The grid weather data is based on Numerical Weather Prediction (NWP) models, and it is not suitable for comparison with observation station data. For station-based city weather data, please refer to the [City Weather API](/en/docs/ios-sdk/weather/ios-weather-daily-forecast/). Grid weather uses UTC+0 as the time zone.

| Interface code    | Interface   | Class           |
| ----------------- | ----------- | --------------- |
| grid3d | 3 Days Forecast by Grid| GridDailyResponse |
| grid7d | 7 Days Forecast by Grid| GridDailyResponse |


## Parameters

 **GridWeatherParameter**

| Name  | Type | Required | Exemple |
| -------- | -------- | ---- | ------ |
| longitude | Double | true | 116.41 |
| latitude | Double | true | 39.92 |
| lang | Lang | false | ZH_HANS |
| unit | Unit | false | METRIC |

## Sample code

**Swift**

```swift
Task{
    do {
        let parameter = GridWeatherParameter(longitude: 116.41, latitude: 39.92)
        /*
        * 3 Days Forecast by Grid
        */
        let _ = try await QWeather.instance
            .grid3d(parameter)
        
        /*
        * 7 Days Forecast by Grid
        */
        let _ = try await QWeather.instance
            .grid7d(parameter)

    } catch QWeatherError.errorResponse(let error) {
        print(error)
    } catch {
        print(error)
    }
}
```

**Objective-C**

```objc
GridWeatherParameter *parameter = [GridWeatherParameter instanceWithLongitude:116.41 latitude:39.92 lang:@(LangZH_HANS) unit:@(UnitMETRIC)];

void (^handler)(GridDailyResponse *, NSError *) = ^(GridDailyResponse *response,
    NSError *error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
};

/*
* 3 Days Forecast by Grid
*/
[QWeatherObjc grid3d:parameter completionHandler:handler];

/*
* 7 Days Forecast by Grid
*/
[QWeatherObjc grid7d:parameter completionHandler:handler];
```

## Response

**GridDailyResponse**

{% include api-response.html group="weather" type="gdaily" prefix="daily"  %}

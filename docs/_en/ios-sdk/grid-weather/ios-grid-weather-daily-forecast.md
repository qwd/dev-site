---
title: Grid Weather Daily Forecast
tag: [guide, ios, grid-weather, daily]
ref: 2-sdk-ios-grid-weather-daily-forecast
---

Get daily weather forecasts at any latitude and longitude in the world, including: temperature, humidity, atmospheric pressure, weather conditions, wind, wind direction, etc.

> The spatial resolution is 1x1, 3x3 or 5x5 KM, depending on the region.

| Interface code    | Interface   | Class           |
| ----------------- | ----------- | --------------- |
| grid3d | 3 Days Forecast by Grid| GridDailyResponse |
| grid7d | 7 Days Forecast by Grid| GridDailyResponse |


### Request Parameters

 **GridWeatherParameter**

| Name  | Type | Required | Exemple |
| -------- | -------- | ---- | ------ |
| longitude | Double | true | 116.41 |
| latitude | Double | true | 39.92 |
| lang | Lang | false | ZH_HANS |
| unit | Unit | false | METRIC |

### Sample Code

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

### Response

**GridDailyResponse**

{% include api-response.html group="weather" type="gdaily" prefix="daily"  %}

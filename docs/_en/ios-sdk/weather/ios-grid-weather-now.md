---
title: Grid Weather Real-time
tag: [guide, ios, weather, grid-now]
ref: 1-sdk-ios-grid-weather-now
---

Weather forecast data based on numerical models, to provide current weather data at specified coordinates around the world, with a spatial resolution of 3-5 kilometers.

> **Hint:** The grid weather data is based on Numerical Weather Prediction (NWP) models, and it is not suitable for comparison with observation station data. For station-based city weather data, please refer to the [City Weather API](/en/docs/ios-sdk/weather/ios-weather-now/). Grid weather uses UTC+0 as the time zone.

| Interface code          | Interface     | Class            |
| --------------------------- | ---- | ------------------ |
| gridNow |  Grid Weather Real-time| GridNowResponse |


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
        let response = try await QWeather.instance
            .gridNow(parameter)
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
GridWeatherParameter *parameter = [GridWeatherParameter instanceWithLongitude:116.41 latitude:39.92 lang:@(LangZH_HANS) unit:@(UnitMETRIC)];
[QWeatherObjc gridNow:parameter completionHandler:^(GridNowResponse * _Nullable response, NSError * _Nullable error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
}];
```

## Response

**GridNowResponse**

{% include api-response.html group="weather" type="gnow" prefix="now"  %}

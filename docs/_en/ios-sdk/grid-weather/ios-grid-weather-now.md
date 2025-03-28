---
title: Grid Weather Real-time
tag: [guide, ios, grid-weather, now]
ref: 1-sdk-ios-grid-weather-now
---

Get high-precision real-time weather at any latitude and longitude around the world.

> The spatial resolution is 1x1, 3x3 or 5x5 KM, depending on the region.

| Interface code          | Interface     | Class            |
| --------------------------- | ---- | ------------------ |
| gridNow |  Grid Weather Real-time| GridNowResponse |


## Request Parameters 

**GridWeatherParameter**

| Name  | Type | Required | Exemple |
| -------- | -------- | ---- | ------ |
| longitude | Double | true | 116.41 |
| latitude | Double | true | 39.92 |
| lang | Lang | false | ZH_HANS |
| unit | Unit | false | METRIC |

## Sample Code

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

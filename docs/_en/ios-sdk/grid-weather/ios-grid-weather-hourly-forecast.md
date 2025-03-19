---
title: Grid Weather Hourly Forecast
tag: [guide, ios, grid-weather, hourly]
ref: 3-sdk-ios-grid-weather-hourly-forecast
---

Get hourly weather forecasts at any latitude and longitude in the world, including: temperature, humidity, atmospheric pressure, weather conditions, wind direction, etc.

> The spatial resolution is 1x1, 3x3 or 5x5 KM, depending on the region.

| Interface code       | Interface     | Class             |
| --------------------------- | ---- | ------------------ |
| grid24h | Hourly Forecast by Grid (24hrs)| GridHourlyResponse |
| grid72h | Hourly Forecast by Grid (72hrs)）| GridHourlyResponse |


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
        * Hourly Forecast by Grid (24hrs)
        */
        let _ = try await QWeather.instance
            .grid24h(parameter)
        
        /*
        * Hourly Forecast by Grid (72hrs)
        */
        let _ = try await QWeather.instance
            .grid72h(parameter)

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

void (^handler)(GridHourlyResponse *, NSError *) = ^(GridHourlyResponse *response,
    NSError *error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
};

/*
* Hourly Forecast by Grid (24hrs)
*/
[QWeatherObjc grid24h:parameter completionHandler:handler];

/*
* Hourly Forecast by Grid (72hrs)
*/
[QWeatherObjc grid72h:parameter completionHandler:handler];
```

### Response

**GridHourlyResponse**

{% include api-response.html group="weather" type="ghourly" prefix="hourly"  %}


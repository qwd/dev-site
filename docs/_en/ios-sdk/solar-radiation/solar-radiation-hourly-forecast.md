---
title: Solar Radiation Hourly Forecast
tag: [guide, ios, solar-radiation, hourly]
ref: 1-sdk-ios-solar-radiation-hourly-forecast
---

Get the net solar radiation, diffuse solar radiation and direct solar radiation for any coordinate position in the world.

| Interface Code            | Interface     | Class             |
| --------------------------- | ---- | ------------------ |
| solarRadiation24h | Hourly Forecast (24hrs)| SolarRadiationResponse |
| solarRadiation72h | Hourly Forecast (72hrs)| SolarRadiationResponse |

> **Note:** Hourly Forecast (72hrs) may be missing the last few hours data under some conditions.
{:.bqwarning}

## Parameters of SolarRadiationParameter

| Name   | Type | Required | Example |
| -------- | -------- | ---- | ------ |
| longitude | Double | true | 116.41 |
| latitude | Double | true | 39.92 |

## Request Example

Swift

```swift
Task{
    do {
            let parameter = SolarRadiationParameter(longitude:116.41,latitude: 39.92)

            /*
            *  Hourly Forecast (24hrs)
            */
            let _ = try await QWeather.instance
                .solarRadiation24h(parameter)

            /*
            *  Hourly Forecast (72hrs)
            */
            let _ = try await QWeather.instance
                .solarRadiation72h(parameter)

        } catch QWeatherError.errorResponse(let error) {
            print(error)
        } catch {
            print(error)
    }
}
```

Objective-C

```objc
    SolarRadiationParameter * parameter = [SolarRadiationParameter instanceWithLongitude:116.41 latitude:39.92 ];

    void (^handler)(SolarRadiationResponse *, NSError *) = ^(SolarRadiationResponse *response,
        NSError *error) {
        if (response) {
            NSLog(@"%@", response.description);
        }
        if (error) {
            NSLog(@"%@", error.localizedDescription);
        }
    };

    /*
    *  Hourly Forecast (24hrs)
    */
    [QWeatherObjc solarRadiation24h:parameter completionHandler:handler];
    
    /*
    *  Hourly Forecast (72hrs)
    */
    [QWeatherObjc solarRadiation24h:parameter completionHandler:handler];
```

## Response

> This data is refers to the downward solar short-wave radiation at the surface, and unit in W/m<sup>2</sup>

{% include api-response.html group="radiation" type="radiation" prefix="radiation" fxlink=0 %}

---
title: Monitoring Station Data (new)
tag: [guide, ios, aq-v1, station-v1]
ref: 1-sdk-ios-air-station-v1
---

Monitoring Station Data API provides pollutant concentration values from air quality monitoring stations in each country or region.

> **Warning:** Monitoring station data is for reference only, it may be delayed, incorrect or unavailable due to various reasons such as failure, removal, maintenance or local laws and regulations.
{:.bqdanger}

## Parameters of AirV1StationParameter

{% include params.html p="p-location-id-aqsta" %}

{% include params.html p="lang-def" %}

## Request Example

Swift

```swift
Task{
    do {
        let parameter = AirV1StationParameter(locationID: "P58911")
        let response = try await QWeather.instance
            .airStation(parameter)
        print(response)
    } catch QWeatherError.errorResponse(let error) {
        print(error)
    } catch {
        print(error)
    }
}
```

Objective-C

```objc
AirV1StationParameter * parameter = [AirV1StationParameter instanceWithLocationID:@"P58911" lang:@(LangTypeZH_HANS)];
    [QWeatherObjc airStation:parameter completionHandler:^(AirV1StationResponse * _Nullable response, NSError * _Nullable error) {
        if (response) {
            NSLog(@"%@", response.description);
        }
        if (error) {
            NSLog(@"%@", error.localizedDescription);
        }
    }];
```

## Response

{% include api-snippet.html snippet="aq-v1-station-v1" %}

{% include api-response.html group="air" type="station-v1" prefix="nil" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag sources"  %}
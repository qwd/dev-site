---
title: Top City
tag: [guide, ios, geo, top-city]
description: Get a list of popular cities around the world.
ref: 2-sdk-ios-geo-top
---

Get a list of popular cities around the world.

## Top City

| Interface code | Interface     | Class              |
| -------------- | ------------- | ------------------ |
| geoCityTop:    | Top city      | GeoCityTopResponse |

### Request Parameters

If no optional parameters are set, the default value will be used.

{% include params.html p="lang-def range number" %}

### Sample Code

Swift

```swift
   Task{
        do {
            let response = try await QWeather.instance
                .geoCityTop(.init(range: RangeType.CN))
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
    GeoCityTopParameter *parameter = [GeoCityTopParameter makeWithRange:RangeTypeCN number:10 lang:LangTypeEN];
    [QWeatherObjc geoCityTop:parameter completionHandler:^(GeoCityTopResponse * _Nullable response, NSError * _Nullable error) {
        if (response) {
            NSLog(@"%@", response.description);
        }
        if (error) {
            NSLog(@"%@", error.localizedDescription);
        }
    }];
```

### Response

| Parameters | Description | Example |
| ---------- | ----------- |------------ |
| code | Status code, please refer to [Status Code](/en/docs/resource/status-code/) | 200 |
| location.name | Location Name | Nanshan District |
| location.cid | Location ID | 101280604 |
| location.lat | Latitude of the location | 22.53122 |
| location.lon | Longitude of the location | 113.92942 |
| location.adm2 | Name of the superior administrative division of the location | Shenzhen |
| location.adm1 | The first-level administrative region of the location | Guangdong Province |
| location.country | Country name of the location | China |
| location.tz | Location [Timezone](/en/docs/resource/glossary/#timezone) | +0800 |
| location.utcOffset | The number of hours offset between local time and UTC time, refer to [UTC-Offset](/en/docs/resource/glossary/#utc-offset) | +08:00 |
| location.isDst | Is the location currently observing Daylight Saving time<br />`1` in daylight saving time <br /> `0` not in daylight saving time | 0 |
| location.type | Location type | city |
| location.rank | [Location Rank](/en/docs/resource/glossary/#rank) | 10 |
| location.fxLink | Responsive web page of this location, easy to embed in your website or APP | http://hfx.link/34T5 |
| refer.sources | Data source and other statements, **may be null** | |
| refer.license | License, **may be null** | |

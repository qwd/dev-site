---
title: POI Range
tag: [guide, ios, geo, poi-range]
ref: 4-sdk-ios-geo-poi-range
---

POI Range iOS SDK provides the ability to query all POI information within a specified area.

| Interface code | Interface       | Class        |
| --------- | -------------------------- | ------------ |
| geoPoiRange | POI range  | GeoPoiResponse |

### Request Parameters

**GeoPoiRangeParameter**

{% include params.html p="location-coord geo-type radius number lang-def" %}

### Sample Code

**Swift**

```swift
   Task{
        do{
            let response = try await QWeather.instance
                        .geoPoiRange(.init(location: "113.88,22.45", type: .CSTA, radius: 50))
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
    GeoPoiRangeParameter * parameter = [GeoPoiRangeParameter instanceWithLocation:@"116.41,39.92"
                                                                             type:PoiSCENIC
                                                                           radius:@(50)
                                                                           number:@(10)
                                                                             lang:@(LangZH_HANS)];
    [QWeatherObjc geoPoiRange:parameter  completionHandler:^(GeoPoiResponse * _Nullable response, NSError * _Nullable error) {
        if (response) {
            NSLog(@"%@", response.description);
        }
        if (error) {
            NSLog(@"%@", error.localizedDescription);
        }
    }];
```

### Response

**GeoPoiResponse**

{% include api-response.html group="geo_poi" type="poi" prefix="poi" update=0 fxlink=0 %}
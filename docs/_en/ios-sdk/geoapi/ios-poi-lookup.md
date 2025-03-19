---
title: POI Lookup
tag: [guide, ios, geo, poi-lookup]
ref: 3-sdk-ios-geo-poi-lookup
---

POI Lookup API provides basic information of POI(scenic spot, tide stations, currents stations, etc.)

| Interface code | Interface         | Class        |
| ---------- | --------------------------- | ------------ |
| geoPoiLookup | POI Lookup  | GeoPoiResponse |

### Request Parameters

**GeoPoiLookupParameter**

{% include params.html p="location-geo geo-type city number lang-def" %}

### Sample Code

**Swift**

```swift
Task{
    do {
        let response = try await QWeather.instance
            .geoPoiLookup(.init(location: "116.41,39.92", type: .SCENIC))
    } catch QWeatherError.errorResponse(let error) {
        print(error)
    } catch {
        print(error)
    }
}
```

**Objective-C**

```objc
GeoPoiLookupParameter *parameter = [GeoPoiLookupParameter  instanceWithLocation:@"116.41,39.92" type:PoiSCENIC city:nil number:@(10) lang:@(LangZH_HANS)];
[QWeatherObjc geoPoiLookup: parameter completionHandler:^(GeoPoiResponse * _Nullable response, NSError * _Nullable error) {
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
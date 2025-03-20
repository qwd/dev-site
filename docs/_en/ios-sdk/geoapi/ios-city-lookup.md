---
title: City Lookup
tag: [guide, ios, geo, city-lookup]
ref: 1-sdk-ios-geo-city-lookup
---

City Lookup provides reverse geocoding, geolocation lookup services, supports multi-language, fuzzy search and other functions.

With the City Lookup, you can get the basic information of the city, including the Location ID of the city (you need this ID to get the weather), multilingual name, latitude and longitude, time zone, altitude, rank, administrative, etc.

In addition, GeoAPI - City Lookup can also help you to implement fuzzy search in your APP, users only need to type 1 or 2 words to get results.

| Interface code | Interface     | Class                 |
| -------------- | ------------- | --------------------- |
| geoCityLookup | City lookup   | GeoCityLookupResponse |

## Request Parameters

**GeoCityLookupParameter**

{% include params.html p="location-geo adm range number lang-def" %}

## Sample Code

**Swift**
```swift
Task{
    do {
        let response =  try await QWeather.instance
            .geoCityLookup(.init(location: "101010100"))
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
GeoCityLookupParameter *parameter = [GeoCityLookupParameter instanceWithLocation:@"116.41,39.92"
                                        adm:nil
                                    range:@(RangeCN)
                                    number:@(10)
                                    lang:@(LangZH_HANS)];
[QWeatherObjc geoCityLookup: parameter completionHandler:^(GeoCityLookupResponse * _Nullable response, NSError * _Nullable error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
}];
```

## Response

**GeoCityLookupResponse**

{% include api-response.html group="geo" type="location" prefix="location" update=0 fxlink=0 %}


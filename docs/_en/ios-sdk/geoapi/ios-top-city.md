---
title: Top City
tag: [guide, ios, geo, top-city]
description: Get a list of popular cities around the world.
ref: 2-sdk-ios-geo-top
---

Get a list of popular cities around the world.

| Interface code | Interface     | Class              |
| -------------- | ------------- | ------------------ |
| geoCityTop    | Top city      | GeoCityTopResponse |

## Request Parameters

**GeoCityTopParameter**

{% include params.html p="range number lang-def" %}

## Sample Code

**Swift**

```swift
Task{
    do {
        let response = try await QWeather.instance
            .geoCityTop(.init(range: Range.CN))
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
GeoCityTopParameter *parameter = [GeoCityTopParameter instanceWithRange:@(RangeCN) number:@(10) lang:@(LangZH_HANS)];
[QWeatherObjc geoCityTop:parameter completionHandler:^(GeoCityTopResponse * _Nullable response, NSError * _Nullable error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
}];
```

## Response

**GeoCityTopResponse**

{% include api-response.html group="geo" type="topcity"  prefix="topCityList" update=0 fxlink=0 %}
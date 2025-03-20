---
title: 城市搜索
tag: [guide, ios, geo, city-lookup]
ref: 1-sdk-ios-geo-city-lookup
---

城市搜索提供全球地理位位置、全球城市搜索服务，支持经纬度坐标反查、多语言、模糊搜索等功能。

天气数据是基于地理位置的数据，因此获取天气之前需要先知道具体的位置信息。使用城市搜索，可获取到该城市的基本信息，包括城市的Location ID（你需要这个ID去查询天气），多语言名称、经纬度、时区、海拔、Rank值、归属上级行政区域、所在行政区域等。 

另外，城市搜索也可以帮助你在你的APP中实现模糊搜索，用户只需要输入1-2个字即可获得结果。

| 接口代码  | 接口                  | 数据类       |
| -------- | ---------------------------- | ------------ |
| geoCityLookup | 城市查询  | GeoCityLookupResponse |

## 请求参数

**GeoCityLookupParameter**

{% include params.html p="location-geo adm range number lang-def" %}

## 示例代码

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
GeoCityLookupParameter *parameter = [GeoCityLookupParameter instanceWithLocation:@"116.41,39.92" adm:nil range:@(RangeCN) number:@(10) lang:@(LangZH_HANS)];

[QWeatherObjc geoCityLookup: parameter completionHandler:^(GeoCityLookupResponse * _Nullable response, NSError * _Nullable error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
}];
```

## 返回数据

**GeoCityLookupResponse**

{% include api-response.html group="geo" type="location" prefix="location" update=0 fxlink=0 %}


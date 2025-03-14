<!--
 * @Date: 2025-03-06 10:02:06
 * @LastEditors: bolepichi
 * @LastEditTime: 2025-03-14 14:48:54
 * @FilePath: /dev-site/docs/_zh/ios-sdk/air/ios-air-now.md
-->
---
title: 实时空气质量
tag: [guide, ios, air, now]
ref: 1-sdk-ios-air-now
---

实时空气质量iOS SDK，支持中国3000+市县区以及1700+国控站点实时空气质量的查询，包括AQI数值、空气质量等级、首要污染物、PM10、PM2.5、臭氧、二氧化氮、二氧化硫、一氧化碳数值。

| 接口代码 | 接口                         | 数据类       |
| --------------- | ---------------------------- | ------------ |
| airNow: | 空气质量实况     | AirNowResponse |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="location-def lang-def" %}

### 示例代码

Swift

```swift
   Task {
        do {
            let parameter = AirParameter(location: "101120501" lang:.ZH_HANS)
            let response = try await QWeather.instance
                .airNow(parameter)
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
    AirParameter * parameter = [AirParameter instanceWithLocation:@"101120501" lang:@(LangTypeZH_HANS)];
    [QWeatherObjc airNow:parameter completionHandler:^(AirNowResponse * _Nullable response, NSError * _Nullable error) {
        if (response) {
            NSLog(@"%@", response.description);
        }
        if (error) {
            NSLog(@"%@", error.localizedDescription);
        }
    }];
```

### 返回数据

> `station`数据，即监测站数据仅限在[空气质量监测站列表](https://github.com/qwd/LocationList/blob/master/POI-Air-Monitoring-Station-List-latest.csv)中的城市返回。

{% include api-response.html group="air" type="now station" prefix="now station"  %}

### 空气质量指数等级

请查看[空气质量信息](/docs/resource/air-info/)。
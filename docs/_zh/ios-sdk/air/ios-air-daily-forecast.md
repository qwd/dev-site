---
title: 空气质量每日预报
tag: [guide, ios, air, daily]
ref: 2-sdk-ios-air-daily-forecast
---

空气质量每日预报iOS SDK，支持全国3000+市县区空气质量预报数据的查询，包括AQI预报、首要污染物预报、空气质量等级预报。

> **注意：**[空气质量API v1（新版）](/docs/api/air-quality/)现已发布，请尝试使用并升级到新版本。

| 接口代码 | 接口                         | 数据类       |
| --------------- | ------------------- | ------------ |
| air5d | 空气质量5天预报   | AirDailyResponse |

## 参数

**AirParameter**

{% include params.html p="location-def lang-def" %}

## 示例代码

**Swift**

```swift
Task {
    do {
        let parameter = AirParameter(location: "101010100" lang:.ZH_HANS)
        let response = try await QWeather.instance
            .air5d(parameter)
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
AirParameter * parameter = [AirParameter instanceWithLocation:@"101010100" lang:@(LangZH_HANS)];
[QWeatherObjc air5d:parameter completionHandler:^(AirDailyResponse * _Nullable response, NSError * _Nullable error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
}];
```

## 返回数据

**AirDailyResponse**

{% include api-response.html group="air" type="daily" prefix="daily"  %}

## 空气质量指数等级

请查看[空气质量信息](/docs/resource/air-info/)。
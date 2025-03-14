---
title: 空气质量每日预报
tag: [guide, ios, air, daily]
ref: 2-sdk-ios-air-daily-forecast
---

空气质量每日预报iOS SDK，支持全国3000+市县区空气质量预报数据的查询，包括AQI预报、首要污染物预报、空气质量等级预报。

| 接口代码 | 接口                         | 数据类       |
| --------------- | ---------------------------- | ------------ |
| air5d: | 空气质量5天预报   | AirDailyResponse |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="location-def lang-def" %}

### 示例代码

Swift

```swift
   Task {
        do {
            let parameter = AirParameter.make(location: "101120501" lang:.ZH_HANS)
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

Objective-C

```objc
    AirParameter * parameter = [AirParameter makeWithLocation:@"101120501" lang:LangTypeZH_HANS];
    [QWeatherObjc air5d:parameter completionHandler:^(AirDailyResponse * _Nullable response, NSError * _Nullable error) {
        if (response) {
            NSLog(@"%@", response.description);
        }
        if (error) {
            NSLog(@"%@", error.localizedDescription);
        }
    }];
```

### 返回数据


{% include api-response.html group="air" type="daily" prefix="daily"  %}

### 空气质量指数等级

请查看[空气质量信息](/docs/resource/air-info/)。
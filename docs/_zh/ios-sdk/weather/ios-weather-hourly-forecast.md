---
title: 逐小时天气预报
tag: [guide, ios, weather, hourly]
ref: 3-sdk-ios-weather-hourly-forecast
---

逐小时天气预报iOS SDK，提供全球城市未来24-168小时逐小时天气预报，包括：温度、天气状况、风力、风速、风向、相对湿度、大气压强、降水概率、露点温度、云量。

| 接口代码      | 接口          | 数据类           |
| ------------ | ------------ | ---------------- |
| weather24h  | 24小时预报况  | WeatherHourlyResponse |
| weather72h  | 72小时预报况  | WeatherHourlyResponse |
| weather168h | 168小时预报况 | WeatherHourlyResponse |

## 请求参数

**WeatherParameter**

{% include params.html p="location-def lang-def unit-def" %}

## 示例代码

**Swift**

```swift
Task{
    do {
        let parameter = WeatherParameter(location: "101010100")
        /**
        * 获取24小时预报数据
        */
        let _ = try await QWeather.instance
            .weather24h(parameter)

        /**
        * 获取72小时预报数据
        */
        let _ = try await QWeather.instance
            .weather72h(parameter)
        
        /**
        * 获取168小时预报数据
        */
        let _ = try await QWeather.instance
            .weather168h(parameter)

    } catch QWeatherError.errorResponse(let error) {
        print(error)
    } catch {
        print(error)
    }
}
```

**Objective-C**

```objc
WeatherParameter * parameter = [WeatherParameter instanceWithLocation:@"101010100" lang:@(LangZH_HANS) unit:@(UnitMETRIC)];

void (^handler)(WeatherHourlyResponse *, NSError *) = ^(WeatherHourlyResponse *response,
    NSError *error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
};

/**
    * 获取24小时预报数据
    */
[QWeatherObjc weather24h:parameter completionHandler:handler];

/**
    * 获取72小时预报数据
    */
[QWeatherObjc weather72h:parameter completionHandler:handler];

/**
    * 获取168小时预报数据
    */
[QWeatherObjc weather168h:parameter completionHandler:handler];
```

## 返回数据

**WeatherHourlyResponse**

{% include api-response.html group="weather" type="hourly" prefix="hourly" %}

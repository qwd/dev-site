---
title: 每日天气预报
tag: [guide, ios, weather, daily]
ref: 2-sdk-ios-weather-daily-forecast
---

每日天气预报iOS SDK，提供全球城市未来3-30天天气预报，包括：日出日落、月升月落、最高最低温度、天气白天和夜间状况、风力、风速、风向、相对湿度、大气压强、降水量、露点温度、紫外线强度、能见度等。

| 接口代码     | 接口         | 数据类               |
| ----------- | ------------ | -------------------- |
| weather3d  | 3天预报       | WeatherDailyResponse |
| weather7d  | 7天预报       | WeatherDailyResponse |
| weather10d | 10天预报      | WeatherDailyResponse |
| weather15d | 15天预报      | WeatherDailyResponse |
| weather30d | 30天预报      | WeatherDailyResponse |

## 请求参数

**WeatherParameter**

{% include params.html p="location-def lang-def unit-def" %}

## 示例代码

**Swift**

```swift
Task{
    do {
        let parameter = WeatherParameter(location: "101010100")
        
        /*
        * 获取3天预报数据
        */
        let _ = try await QWeather.instance.weather3d(parameter)

        /*
        * 获取7天预报数据
        */
        let _ = try await QWeather.instance.weather7d(parameter)

        /*
        * 获取10天预报数据
        */
        let _ = try await QWeather.instance.weather10d(parameter)
        
        /*
        * 获取15天预报数据
        */
        let _ = try await QWeather.instance.weather15d(parameter)
        
        /*
        * 获取30天预报数据
        */
        let _ = try await QWeather.instance.weather30d(parameter)

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

void (^handler)(WeatherDailyResponse *, NSError *) = ^(WeatherDailyResponse *response,
    NSError *error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
};

/*
* 获取3天预报数据
*/
[QWeatherObjc weather3d:parameter completionHandler:handler];

/*
* 获取7天预报数据
*/
[QWeatherObjc weather7d:parameter completionHandler:handler];

/*
* 获取10天预报数据
*/
[QWeatherObjc weather10d:parameter completionHandler:handler];

/*
* 获取15天预报数据
*/
[QWeatherObjc weather15d:parameter completionHandler:handler];

/*
* 获取30天预报数据
*/
[QWeatherObjc weather30d:parameter completionHandler:handler];
```

## 返回数据

**WeatherDailyResponse**

{% include api-response.html group="weather" type="daily" prefix="daily" %}

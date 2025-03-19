---
title: 实时天气
tag: [guide, ios, weather, now]
ref: 1-sdk-ios-weather-now
---

城市实时天气iOS SDK，支持中国3000+市县区和海外20万个城市实时天气数据，包括实时温度、体感温度、风力风向、相对湿度、大气压强、降水量、能见度、露点温度、云量等。

| 接口代码      | 接口          | 数据类           |
| ------------ | ------------- | ---------------- |
| weatherNow  | 实况天气      | WeatherNowResponse |

### 请求参数

**WeatherParameter**

{% include params.html p="location-def lang-def unit-def" %}

### 示例代码

**Swift**

```swift
Task{
    do {
        let parameter = WeatherParameter(location: "101010100")
        let response = try await QWeather.instance
            .weatherNow(parameter)
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
WeatherParameter *parameter = [WeatherParameter instanceWithLocation:@"101010100" lang:@(LangZH_HANS) unit:@(UnitMETRIC)];
[QWeatherObjc weatherNow:parameter completionHandler:^(WeatherNowResponse * _Nullable response, NSError * _Nullable error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
}];
```

### 返回数据

**WeatherNowResponse**

{% include api-response.html group="weather" type="now" prefix="now" %}

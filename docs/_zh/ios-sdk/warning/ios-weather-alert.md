---
title: 实时天气预警
tag: [guide, ios, warning, current]
ref: 1-sdk-ios-weather-alert
---

根据指定的经纬度坐标，查询中国和全球正在生效的官方天气预警信息。阅读[实用资料-预警](/docs/resource/warning-info/)以了解预警信息支持的国家和地区、事件类型等必要信息。


| 接口代码     | 接口     | 数据类           |
| -------------------- | -------- | ---------------- |
| weatherAlertCurrent | 实时天气预警 | WeatherAlertCurrentResponse |

## 参数

**WeatherAlertCurrentParameter**

| 参数名   | 参数类型 | 必选 | 示例值 |
| -------- | -------- | ---- | ------ |
| longitude | Double | 是 | 116.41 |
| latitude | Double | 是 | 39.92 |
| localTime | Bool | 是 | true |
| lang | Lang | 否 | ZH_HANS |

## 示例代码

**Swift**

```swift
Task {
    do {
        let parameter = WeatherAlertCurrentParameter(longitude: 113.26, 
                                                      latitude: 38.73, 
                                                     localTime: false, 
                                                          lang: .ZH_HANS)
        let response = try await Q.weatherAlertCurrent(parameter)
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
WeatherAlertCurrentParameter *parameter = [WeatherAlertCurrentParameter instanceWithLongitude: 113.26 
                                                                                     latitude: 38.73 
                                                                                    localTime: NO 
                                                                                         lang: @(LangZH_HANS)];
[QWeatherObjc weatherAlertCurrent:parameter completionHandler:^(WeatherAlertCurrentResponse * _Nullable response, NSError * _Nullable error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
}];
```

## 返回数据

**WeatherAlertCurrentResponse**

{% include api-response.html group="warning" type="alert-v1" prefix="alerts" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag zeroResult attributions" %}

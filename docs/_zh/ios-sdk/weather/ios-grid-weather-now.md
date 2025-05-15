---
title: 格点实时天气
tag: [guide, ios, weather, grid-now]
ref: 1-sdk-ios-grid-weather-now
---

基于数值模式的天气预报数据，提供全球指定坐标的实时天气，分辨率3-5公里。

> **提示：** 格点天气预报是基于数值预报模型生成，不适宜与观测站数据对比。如需基于观测站的城市天气，请使用[城市实时天气API](/docs/ios-sdk/weather/ios-weather-now/)。格点天气采用UTC 0时区表示时间。

| 接口代码          | 接口     | 数据类             |
| --------------------------- | ---- | ------------------ |
| gridNow | 格点实时天气| GridNowResponse |

## 参数 

**GridWeatherParameter**

| 参数名   | 参数类型 | 必选 | 示例值 |
| -------- | -------- | ---- | ------ |
| longitude | Double | 是 | 116.41 |
| latitude | Double | 是 | 39.92 |
| lang | Lang | 否 | ZH_HANS |
| unit | Unit | 否 | METRIC |

## 代码示例

**Swift**

```swift
Task{
    do {
        let parameter = GridWeatherParameter(longitude: 116.41, latitude: 39.92)
        let response = try await QWeather.instance
            .gridNow(parameter)
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
GridWeatherParameter *parameter = [GridWeatherParameter instanceWithLongitude:116.41 latitude:39.92 lang:@(LangZH_HANS) unit:@(UnitMETRIC)];
[QWeatherObjc gridNow:parameter completionHandler:^(GridNowResponse * _Nullable response, NSError * _Nullable error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
}];
```

## 返回数据

**GridNowResponse**

{% include api-response.html group="weather" type="gnow" prefix="now"  %}

---
title: 格点实时天气
tag: [guide, ios, grid-weather, now]
ref: 1-sdk-ios-grid-weather-now
---

基于全球任意坐标的高精度实时天气，精确到3-5公里范围，包括：温度、湿度、大气压、天气状况、风力、风向等。

| 接口代码          | 接口     | 数据类             |
| --------------------------- | ---- | ------------------ |
| gridNow | 格点实时天气| GridNowResponse |


## 请求参数 GridWeatherParameter

| 参数名   | 参数类型 | 必选 | 示例值 |
| -------- | -------- | ---- | ------ |
| longitude | Double | 是 | 116.41 |
| latitude | Double | 是 | 39.92 |
| lang | Lang | 否 | ZH_HANS |
| unit | Unit | 否 | METRIC |

## 代码示例

Swift

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

Objective-C
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

{% include api-snippet.html %}

{% include api-response.html group="weather" type="gnow" prefix="now"  %}

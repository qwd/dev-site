---
title: 格点每日天气预报
tag: [guide, ios, weather, grid-daily]
ref: 2-sdk-ios-grid-weather-daily-forecast
---

基于数值模式的天气预报数据，提供全球指定坐标的每日天气预报，分辨率3-5公里。

> **提示：** 格点天气预报是基于数值预报模型生成，不适宜与观测站数据对比。如需基于观测站的城市天气，请使用[城市每日天气API](/docs/ios-sdk/weather/ios-weather-daily-forecast/)。格点天气采用UTC 0时区表示时间。

| 接口代码            | 接口     | 数据类             |
| ---------- ------- | ---- | ------------------ |
| grid3d | 格点3天预报| GridDailyResponse |
| grid7d | 格点7天预报| GridDailyResponse |


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
        /*
        * 格点3天预报
        */
        let _ = try await QWeather.instance
            .grid3d(parameter)
        
        /*
        * 格点7天预报
        */
        let _ = try await QWeather.instance
            .grid7d(parameter)

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

void (^handler)(GridDailyResponse *, NSError *) = ^(GridDailyResponse *response,
    NSError *error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
};

/*
* 格点3天预报
*/
[QWeatherObjc grid3d:parameter completionHandler:handler];

/*
* 格点7天预报
*/
[QWeatherObjc grid7d:parameter completionHandler:handler];
```

## 返回数据

**GridDailyResponse**

{% include api-response.html group="weather" type="gdaily" prefix="daily"  %}

---
title: 格点每日天气预报
tag: [guide, ios, grid-weather, daily]
ref: 2-sdk-ios-grid-weather-daily-forecast
---

基于全球任意坐标的高精度每日天气预报，精确到3-5公里范围，包括温度、湿度、大气压、天气状况、风力、风向等。

| 接口代码            | 接口     | 数据类             |
| ---------- ------- | ---- | ------------------ |
| grid3d | 格点3天预报| GridDailyResponse |
| grid7d | 格点7天预报| GridDailyResponse |


## 请求参数 

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

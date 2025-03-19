---
title: 格点逐小时天气预报
tag: [guide, ios, grid-weather, hourly]
ref: 3-sdk-ios-grid-weather-hourly-forecast
---

基于全球任意坐标的高精度逐小时天气预报，精确到3-5公里范围，包括温度、湿度、大气压、天气状况、风力、风向等。

| 接口代码           | 接口     | 数据类             |
| --------------------------- | ---- | ------------------ |
| grid24h | 逐小时预报（未来24小时）| GridHourlyResponse |
| grid72h | 逐小时预报（未来72小时）| GridHourlyResponse |


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
        * 逐小时预报（未来24小时）
        */
        let _ = try await QWeather.instance
            .grid24h(parameter)
        
        /*
        * 逐小时预报（未来72小时）
        */
        let _ = try await QWeather.instance
            .grid72h(parameter)

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

void (^handler)(GridHourlyResponse *, NSError *) = ^(GridHourlyResponse *response,
    NSError *error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
};

/*
* 逐小时预报（未来24小时）
*/
[QWeatherObjc grid24h:parameter completionHandler:handler];

/*
* 逐小时预报（未来72小时）
*/
[QWeatherObjc grid72h:parameter completionHandler:handler];
```

## 返回数据

**GridHourlyResponse**

{% include api-response.html group="weather" type="ghourly" prefix="hourly"  %}


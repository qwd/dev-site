---
title: 太阳辐射逐小时预报
tag: [guide, ios, solar-radiation, hourly]
ref: 1-sdk-ios-solar-radiation-hourly-forecast
---

太阳辐射API支持获取全球任意坐标的辐射数据，包括净太阳辐射，太阳散射辐射和太阳直接辐射。

| 接口代码           | 接口     | 数据类             |
| --------------------------- | ---- | ------------------ |
| solarRadiation24h | 逐小时预报（未来24小时）| SolarRadiationResponse |
| solarRadiation72h | 逐小时预报（未来72小时）| SolarRadiationResponse |

> **注意：**在一些特殊情况下，未来72小时预报有可能会缺少最后若干小时的数据。
{:.bqwarning}

## 请求参数 SolarRadiationParameter

| 参数名   | 参数类型 | 必选 | 示例值 |
| -------- | -------- | ---- | ------ |
| longitude | Double | 是 | 116.41 |
| latitude | Double | 是 | 39.92 |

## 示例代码

Swift
```swift
Task{
    do {
            let parameter = SolarRadiationParameter(longitude:116.41,latitude: 39.92)

            /*
            *  逐小时预报（未来24小时）
            */
            let _ = try await QWeather.instance
                .solarRadiation24h(parameter)

            /*
            *  逐小时预报（未来72小时）
            */
            let _ = try await QWeather.instance
                .solarRadiation72h(parameter)

        } catch QWeatherError.errorResponse(let error) {
            print(error)
        } catch {
            print(error)
    }
}
```

Objective-C

```objc
    SolarRadiationParameter * parameter = [SolarRadiationParameter instanceWithLongitude:116.41 latitude:39.92 ];

    void (^handler)(SolarRadiationResponse *, NSError *) = ^(SolarRadiationResponse *response,
        NSError *error) {
        if (response) {
            NSLog(@"%@", response.description);
        }
        if (error) {
            NSLog(@"%@", error.localizedDescription);
        }
    };


    [QWeatherObjc solarRadiation24h:parameter completionHandler:handler];

    [QWeatherObjc solarRadiation24h:parameter completionHandler:handler];
```

## 返回数据

{% include api-snippet.html flag="sun" %}

> 除非特别说明，本数据返回的太阳辐射均指地表垂直向下的短波辐射，单位w/m<sup>2</sup>

{% include api-response.html group="radiation" type="radiation" prefix="radiation" fxlink=0 %}

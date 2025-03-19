---
title: 监测站数据(new)
tag: [guide, ios, aq-v1, station-v1]
ref: 1-sdk-ios-air-station-v1
---

监测站数据API提供各个国家或地区监测站的污染物浓度值。

> **警告：**监测站的观测值仅供参考，可能由于故障、移除、维护或当地法律法规等各种原因导致数据延迟或缺失，我们无法确保该数据的可用性。
{:.bqdanger}

| 接口代码 | 接口         | 数据类型       |
| --------------- | ---------------- | ------------ |
| airStation | 监测站数据(new)  | AirV1StationResponse |


## 请求参数

**AirV1StationParameter**

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="p-location-id-aqsta" %}

{% include params.html p="lang-def" %}

## 代码示例

**Swift**

```swift
Task{
    do {
        let parameter = AirV1StationParameter(locationID: "P58911")
        let response = try await QWeather.instance
            .airStation(parameter)
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
AirV1StationParameter * parameter = [AirV1StationParameter instanceWithLocationID:@"P58911" lang:@(LangZH_HANS)];
    [QWeatherObjc airStation:parameter completionHandler:^(AirV1StationResponse * _Nullable response, NSError * _Nullable error) {
        if (response) {
            NSLog(@"%@", response.description);
        }
        if (error) {
            NSLog(@"%@", error.localizedDescription);
        }
    }];
```

## 返回数据

**AirV1StationResponse**

{% include api-snippet.html snippet="aq-v1-station-v1" %}

{% include api-response.html group="air" type="station-v1" prefix="nil" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag sources"  %}
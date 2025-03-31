---
title: 天气预警城市列表
tag: [guide, ios, warning, list]
ref: 2-sdk-ios-weather-warning-city-list
---

获取指定国家或地区当前正在发生天气灾害预警的城市列表，根据这些城市列表再查询对应城市的[天气灾害预警](/docs/ios-sdk/warning/ios-weather-warning/)。

> **注意：**目前天气预警城市列表仅适用于获取中国（包括港澳台）城市列表。其他国家和地区，请使用[天气灾害预警](/docs/ios-sdk/warning/ios-weather-warning/)。
{:.bqwarning}

> **提示：**关于更多天气预警数据的说明，请参考[实用资料-预警信息](/docs/resource/warning-info/)。

| 接口代码         | 接口             | 数据类           |
| ------------------------ | ---------------- | ---------------- |
| warningList | 灾害预警城市列表 | WarningListResponse |

## 参数

**WarningListParameter**

{% include params.html p="range-warning" %}

## 示例代码

**Swift**

```swift
Task{
    do {
        let parameter = WarningListParameter(range: .CN)
        let response = try await QWeather.instance
            .warningList(parameter)
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
WarningListParameter *parameter = [WarningListParameter instanceWithRange:RangeCN];
[QWeatherObjc warningList:parameter completionHandler:^(WarningListResponse * _Nullable response, NSError * _Nullable error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
}];
```

## 返回数据

**WarningListResponse**

{% include api-response.html group="warning" type="list" prefix="warningLocList" fxlink=0 %}

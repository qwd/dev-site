<!--
 * @Date: 2025-03-06 10:02:06
 * @LastEditors: bolepichi
 * @LastEditTime: 2025-03-14 15:41:33
 * @FilePath: /dev-site/docs/_zh/ios-sdk/warning/ios-weather-warning.md
-->
---
title: 天气灾害预警
tag: [guide, ios, warning, now]
ref: 1-sdk-ios-weather-warning
---

天气灾害预警iOS SDK可以获取中国及全球多个国家或地区官方发布的实时天气灾害预警数据。

> **提示：**关于更多天气预警数据的说明，请参考[实用资料-预警信息](/docs/resource/warning-info/)。


| 接口代码     | 接口     | 数据类           |
| -------------------- | -------- | ---------------- |
| warningNow: | 灾害预警 | WarningResponse |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="location-def lang-def" %}

### 示例代码

Swift

```swift
    Task {
        do {
            let parameter = WarningNowParameter(location: "101120501")
            let response = try await QWeather.instance
                .warningNow(parameter)
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
    WarningNowParameter *parameter = [WarningNowParameter instanceWithLocation:@"101120501" lang:@(LangTypeZH_HANS)];
    [QWeatherObjc warningNow:parameter completionHandler:^(WarningResponse * _Nullable response, NSError * _Nullable error) {
        if (response) {
            NSLog(@"%@", response.description);
        }
        if (error) {
            NSLog(@"%@", error.localizedDescription);
        }
    }];
```

### 返回数据

{% include api-response.html group="warning" type="warning" prefix="warning" %}


### 预警类型和等级

查看[预警类型和等级](/docs/resource/warning-info/)
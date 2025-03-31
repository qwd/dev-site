---
title: 天气灾害预警
tag: [guide, ios, warning, now]
ref: 1-sdk-ios-weather-warning
---

天气灾害预警iOS SDK可以获取中国及全球多个国家或地区官方发布的实时天气灾害预警数据。

> **提示：**天气预警有较多规则和需要注意的事项，在开始使用天气预警之前，你应该先阅读[实用资料-预警信息](/docs/resource/warning-info/)。


| 接口代码     | 接口     | 数据类           |
| -------------------- | -------- | ---------------- |
| warningNow | 天气灾害预警 | WarningResponse |

## 参数

**WarningNowParameter**

{% include params.html p="location-def lang-def" %}

## 示例代码

**Swift**

```swift
Task {
    do {
        let parameter = WarningNowParameter(location: "101010100")
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

**Objective-C**

```objc
WarningNowParameter *parameter = [WarningNowParameter instanceWithLocation:@"101010100" lang:@(LangZH_HANS)];
[QWeatherObjc warningNow:parameter completionHandler:^(WarningResponse * _Nullable response, NSError * _Nullable error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
}];
```

## 返回数据

**WarningResponse**

{% include api-response.html group="warning" type="warning" prefix="warning" %}


### 预警类型和等级

查看[预警类型和等级](/docs/resource/warning-info/)
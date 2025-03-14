<!--
 * @Date: 2025-03-06 10:02:06
 * @LastEditors: bolepichi
 * @LastEditTime: 2025-03-14 15:22:51
 * @FilePath: /dev-site/docs/_zh/ios-sdk/tropical-cyclone/ios-storm-list.md
-->
---
title: 台风列表
tag: [guide, ios, storm, list]
data: tropical-cyclone
ref: 1-sdk-ios-storm-list
---

台风列表API提供全球主要海洋流域最近2年的台风列表。

> 目前仅支持中国沿海地区，即`basin=NP`

| 接口代码        | 接口     | 数据类             |
| ------------------- | -------- | ---------------- |
| tropicalStormList: | 台风列表 | StormListResponse |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="basin year" %}

### 示例代码

Swift

```swift
    Task{
        do {
            let parameter = StormListParameter(basin: .NP, year: 2024)
            let response = try await QWeather.instance
                .tropicalStormList(parameter)
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
    StormListParameter *parameter = [StormListParameter instanceWithBasin:BasinTypeNP year:2024];
    [QWeatherObjc tropicalStormList:parameter completionHandler:^(StormListResponse * _Nullable response, NSError * _Nullable error) {
        if (response) {
            NSLog(@"%@", response.description);
        }
        if (error) {
            NSLog(@"%@", error.localizedDescription);
        }
    }];
```
     
### 返回数据

{% include api-response.html group="storm" type="ios-list" prefix="storm"  %}


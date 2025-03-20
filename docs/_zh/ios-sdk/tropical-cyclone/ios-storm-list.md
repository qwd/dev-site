---
title: 台风列表
tag: [guide, ios, storm, list]
data: tropical-cyclone
ref: 1-sdk-ios-storm-list
---

台风列表提供全球主要海洋流域最近2年的台风列表。

> 目前仅支持中国沿海地区，即`basin=NP`

| 接口代码        | 接口     | 数据类             |
| ------------------- | -------- | ---------------- |
| tropicalStormList | 台风列表 | StormListResponse |

## 请求参数

**StormListParameter**

{% include params.html p="basin year" %}

## 示例代码

**Swift**

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

**Objective-C**

```objc
StormListParameter *parameter = [StormListParameter instanceWithBasin:BasinNP year:2024];
[QWeatherObjc tropicalStormList:parameter completionHandler:^(StormListResponse * _Nullable response, NSError * _Nullable error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
}];
```
     
## 返回数据

**StormListResponse**

{% include api-response.html group="storm" type="ios-list" prefix="storm"  %}


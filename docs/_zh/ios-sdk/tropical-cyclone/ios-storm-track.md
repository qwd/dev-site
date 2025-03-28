---
title: 台风实况和路径
tag: [guide, ios, storm, track]
ref: 2-sdk-ios-storm-track
---

台风实况和路径提供全球主要海洋流域的台风实时位置、等级、气压、风力、速度以及活跃台风的轨迹路径。

| 接口代码          | 接口           | 数据类                |
| ---------------- | -------------- | ------------------- |
| tropicalStormTrack | 台风实况和路径   | StormTrackResponse |

## 请求参数

**StormParameter**

{% include params.html p="stormid-sdk" %}

## 示例代码

**Swift**

```swift
Task{
    do {
        let parameter = StormParameter(stormid: "NP_2421")
        let response = try await QWeather.instance
            .tropicalStormTrack(parameter)
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
StormParameter *parameter = [StormParameter instanceWithStormid:@"NP_2421"];
[QWeatherObjc tropicalStormTrack:parameter completionHandler:^(StormTrackResponse * _Nullable response, NSError * _Nullable error) {
    if (response) {
        NSLog(@"%@", response.description);
    }
    if (error) {
        NSLog(@"%@", error.localizedDescription);
    }
}];
```
     
## 返回数据

**StormTrackResponse**

{% include api-response.html group="storm" type="active now track"  prefix="nil now track"%}


### 台风等级

GBT 19201-2006

| 热带气旋等级        | 底层中心附近最大平均风速(m/s) | 底层中心附近最大风力(级) |
| ------------------- | ----------------------------- | ------------------------ |
| 热带气压（TD）      | 10.8-17.1                     | 6-7                      |
| 热带风暴（TS）      | 17.2-24.4                     | 8-9                      |
| 强热带风暴（STS）   | 24.5-32.6                     | 10-11                    |
| 台风（TY）          | 32.7-41.4                     | 12-13                    |
| 强台风（STY）       | 41.5-50.9                     | 14-15                    |
| 超强台风（SuperTY） | ≥51.0                         | 16或以上                 |

---
title: 台风列表
tag: [guide, ios, storm, list]
data: tropical-cyclone
ref: 1-sdk-ios-storm-list
---

台风列表API提供全球主要海洋流域最近2年的台风列表。

> 目前仅支持中国沿海地区，即`basin=NP`

| 接口代码（枚举）        | 接口     | 数据类             |
| ----------------------- | -------- | ------------------ |
| INQUIRE_TYPE_STORM_LIST | 台风列表 | StormListBaseClass |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="basin year key-ios" %}

### 示例代码

```objc
    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;    
    QWeatherConfigInstance.basin = BASIN_TYPE_NP;
    QWeatherConfigInstance.year = @"2021";
    [QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_STORM_LIST WithSuccess:^(StormListBaseClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```
     
### 返回数据

{% include api-response.html group="storm" type="ios-list" prefix="storm"  %}


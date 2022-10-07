---
title: 天气预警城市列表
tag: [guide, ios, warning, list]
ref: 2-sdk-ios-weather-warning-city-list
---

获取指定国家或地区当前正在发生预警的城市列表。你可以通过这个列表快速的了解到当前国家或地区都有哪些地方正在发生天气预警。

根据这些城市列表再查询详细的[预警数据](/docs/api/warning/weather-warning/)。

> 关于天气预警数据的更多信息，可以参考[实用资料-预警信息](/docs/resource/warning-info/)。

| 接口代码（枚举）         | 接口             | 数据类           |
| ------------------------ | ---------------- | ---------------- |
| INQUIRE_TYPE_WARNINGLIST | 灾害预警城市列表 | WarningListClass |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="range-warning key-ios" %}

### 示例代码

```objc
 
    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;    
    QWeatherConfigInstance.range = @"cn";
    [QWeatherConfigInstance weatherWithInquireType: INQUIRE_TYPE_WARNINGLIST WithSuccess:^(WarningListClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```

### 返回数据

{% include api-response.html group="warning" type="list" prefix="warningLocList" fxlink=0 %}

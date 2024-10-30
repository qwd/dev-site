---
title: 天气预警城市列表
tag: [guide, ios, warning, list]
ref: 2-sdk-ios-weather-warning-city-list
---

获取指定国家或地区当前正在发生天气灾害预警的城市列表，根据这些城市列表再查询对应城市的[天气灾害预警](/docs/ios-sdk/warning/ios-weather-warning/)。

> **注意：**目前天气预警城市列表仅适用于获取中国（包括港澳台）城市列表。其他国家和地区，请使用[天气灾害预警](/docs/ios-sdk/warning/ios-weather-warning/)。
{:.bqwarning}

> **提示：**关于更多天气预警数据的说明，请参考[实用资料-预警信息](/docs/resource/warning-info/)。

| 接口代码（枚举）         | 接口             | 数据类           |
| ------------------------ | ---------------- | ---------------- |
| INQUIRE_TYPE_WARNINGLIST | 灾害预警城市列表 | WarningListClass |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="range-warning" %}

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

---
title: 天气灾害预警
tag: ios-sdk
version: v4
description: 和风天气灾害预警提供了全球极端天气预警服务，覆盖中国及全球数十个国家或地区，实时获取台风预警、暴雨暴雪预警、寒潮预警、大风预警、空气重污染预警以及沙尘暴、高温、干旱、雷电、冰雹、霜冻、大雾、道路结冰、干热风、雷雨大风、森林火险、降温、冰冻、雷暴大风、龙卷风、低温冻害、低温雨雪冰冻、强对流、强降雨、强降温、雪灾、雷暴、严寒、沙尘等50多种气象灾害预警信息。
ref: 5-sdk-ios-warning
---

天气灾害预警服务可以获取中国及全球多个国家或地区实时天气灾害预警数据，了解更多[预警信息](/docs/resource/warning-info/)。

## 灾害预警

| 接口代码（枚举）     | 接口     | 数据类           |
| -------------------- | -------- | ---------------- |
| INQUIRE_TYPE_WARNING | 灾害预警 | WarningBaseClass |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="location-ios" %}

> 天气预警并非在所有地区可用，了解[天气预警支持的国家或地区](/docs/resource/warning-info/#supported-regions)。

{% include params.html p="key-ios lang-zhen-sdk" %}

### 示例代码

```objc
 
    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;    
    QWeatherConfigInstance.location = @"101010100";
    QWeatherConfigInstance.lang = @"";
    QWeatherConfigInstance.unit = @"";
    [QWeatherConfigInstance weatherWithInquireType: INQUIRE_TYPE_WARNING WithSuccess:^(WarningBaseClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```

### 返回数据

{% include api-response.html group="warning" type="warning" prefix="warning" %}

## 灾害预警列表

获取指定国家或地区当前正在发生预警的城市列表。

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

## 预警类型和等级

查看[预警类型和等级](/docs/resource/warning-info/)
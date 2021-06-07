---
title: 天气灾害预警
tag: ios-sdk
version: v4
description: 获取天气灾害预警数据，实时获取台风预警、暴雨暴雪预警、寒潮预警、大风预警、空气重污染预警以及沙尘暴、高温、干旱、雷电、冰雹、霜冻、大雾、道路结冰、干热风、雷雨大风、森林火险、降温、冰冻、雷暴大风、龙卷风、低温冻害、低温雨雪冰冻、强对流、强降雨、强降温、雪灾、雷暴、严寒、沙尘等50多种气象灾害预警信息。
ref: 5-sdk-ios-warning
---

和风天气灾害预警支持全国3240个市县区天气灾害预警，预警类型和级别包括：

- 预警种类：台风、暴雨、暴雪、寒潮、大风、沙尘暴、高温、干旱、雷电、冰雹、霜冻、大雾、霾、道路结冰、寒冷、灰霾、雷雨大风、森林火险、降温、道路冰雪、干热风、低温、冰冻、空气重污染、海上大雾、雷暴大风、持续低温、浓浮尘、龙卷风、低温冻害、海上大风、低温雨雪冰冻、强对流、臭氧、大雪、强降雨、强降温、雪灾、森林（草原）火险、雷暴、严寒、沙尘、海上雷雨大风、海上雷电、海上台风。
- 预警级别：白色（仅限广东省内）、蓝色、黄色、橙色、红色

## 灾害预警

| 接口代码（枚举）     | 接口     | 数据类           |
| -------------------- | -------- | ---------------- |
| INQUIRE_TYPE_WARNING | 灾害预警 | WarningBaseClass |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="location-ios key-ios lang-zhen-sdk" %}

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

| 参数              | 描述                                                                 | 示例值                                                           |
| ----------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------- |
| code              | 状态码，具体含义请参考[状态码](/docs/start/status-code/)              | 200                                                              |
| updateTime        | 当前[数据最近更新时间](/docs/start/glossary#update-time)   | 2013-12-30T01:45+08:00                                           |
| fxLink            | 该城市的灾害预警详情自适应网页，可嵌入网站或应用。**可能为空。**     | http://hfx.link/ae45                                             |
| warning.id        | 本条预警的唯一标识，可判断本条预警是否已经存在，id有效期不超过72小时 | 202010110345679813                                               |
| warning.pubTime   | 预警发布时间                                                         | 2017-10-25T12:03+08:00                                           |
| warning.title     | 预警信息标题                                                         | 广东省深圳市气象台发布雷电黄色预警                               |
| warning.startTime | 预警开始时间，**不适用于所有国家，可能为空。**                       | 广东省深圳市气象台发布雷电黄色预警                               |
| warning.endTime   | 预警结束时间，**不适用于所有国家，可能为空。**                       | 广东省深圳市气象台发布雷电黄色预警                               |
| warning.status    | 预警状态，**不适用于所有国家，可能为空。**                           | 预警中                                                           |
| warning.level     | 预警等级                                                             | 黄色                                                             |
| warning.type      | 预警类型                                                             | 雷电                                                             |
| warning.txt       | 预警详细文字描述                                                     | 深圳市气象局于10月04日12时59分发布雷电黄色预警信号，请注意防御。 |
| refer.sources     | 原始数据来源，可能为空                                               |                                                                  |
| refer.license     | 使用许可，可能为空                                                   |                                                                  |

## 灾害预警列表

获取当前中国发生天气预警的城市列表。

| 接口代码（枚举）         | 接口             | 数据类           |
| ------------------------ | ---------------- | ---------------- |
| INQUIRE_TYPE_WARNINGLIST | 灾害预警城市列表 | WarningListClass |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="range-cn key-ios" %}

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

| 参数                      | 描述                                                               | 示例值                 |
| ------------------------- | ------------------------------------------------------------------ | ---------------------- |
| code                      | 状态码，具体含义请参考[状态码](/docs/start/status-code/)            | 200                    |
| updateTime                | 当前[数据最近更新时间](/docs/start/glossary#update-time) | 2013-12-30T01:45+08:00 |
| warningLocList.locationId | 当前国家预警的城市/地区ID                                          | 101010100              |
---
title: 实时空气质量和预报
tag: ios-sdk
version: v4
description: 使用和风天气iOS SDK获取实时空气质量和空气质量预报数据，支持中国3240市县区以及1700个监测站实时空气质量的查询，包括AQI数值、空气质量等级、首要污染物、PM10、PM2.5、臭氧、二氧化氮、二氧化硫、一氧化碳数值。
ref: 6-sdk-ios-air
---

实时空气质量和空气质量预报数据，支持中国3240市县区以及1700个监测站实时空气质量的查询，包括AQI数值、空气质量等级、首要污染物、PM10、PM2.5、臭氧、二氧化氮、二氧化硫、一氧化碳数值。

| 接口代码（枚举）| 接口                         | 数据类       |
| --------------- | ---------------------------- | ------------ |
| INQUIRE_TYPE_WEATHER_AIR_NOW| 空气质量实况     | AirBaseClass |
| INQUIRE_TYPE_WEATHER_AIR_5D| 空气质量5天预报   | AirBaseClass |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="location-ios key-ios lang-sdk" %}

### 示例代码

```objc
    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;    
    QWeatherConfigInstance.location = @"101010100";
    QWeatherConfigInstance.lang = @"";
    QWeatherConfigInstance.unit = @"";
    [QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_WEATHER_AIR_NOW WithSuccess:^(AirBaseClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```

### 返回数据

> `station`数据，即监测站数据仅限在[空气质量监测站列表](https://github.com/qwd/LocationList/blob/master/POI-Air-Monitoring-Station-List-latest.csv)中的城市返回。

{% include api-response.html group="air" type="now station daily" prefix="now station daily"  %}

### 空气质量指数等级

请查看[空气质量信息](/docs/resource/air-info/)。
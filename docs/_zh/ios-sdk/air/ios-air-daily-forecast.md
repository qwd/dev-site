---
title: 空气质量每日预报
tag: [guide, ios, air, daily]
ref: 2-sdk-ios-air-daily-forecast
---

空气质量每日预报iOS SDK，支持全国3000+市县区空气质量预报数据的查询，包括AQI预报、首要污染物预报、空气质量等级预报。

| 接口代码（枚举）| 接口                         | 数据类       |
| --------------- | ---------------------------- | ------------ |
| INQUIRE_TYPE_WEATHER_AIR_5D| 空气质量5天预报   | AirBaseClass |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="location-ios key-ios lang-def" %}

### 示例代码

```objc
    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;    
    QWeatherConfigInstance.location = @"101010100";
    QWeatherConfigInstance.lang = @"";
    QWeatherConfigInstance.unit = @"";
    [QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_WEATHER_AIR_5D WithSuccess:^(AirBaseClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```

### 返回数据


{% include api-response.html group="air" type="daily" prefix="daily"  %}

### 空气质量指数等级

请查看[空气质量信息](/docs/resource/air-info/)。
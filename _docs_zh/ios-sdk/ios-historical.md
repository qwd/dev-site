---
title: 历史天气和空气质量
tag: ios-sdk
version: v4
description: 和风天气iOS SDK历史天气和空气质量的开发文档，获取全国最近10天历史天气和历史空气质量
ref: 7-sdk-ios-historical
---

获取最近10天全国历史天气和历史空气质量数据。

| 接口代码（枚举）| 接口                         | 数据类                     |
| ------------ | ------------------------------- | -------------------------- |
| INQUIRE_TYPE_HISTORICAL_WEATHER| 历史天气      | WeatherHistoricalBaseClass |
| INQUIRE_TYPE_HISTORICAL_AIR| 历史空气质量      | WeatherHistoricalBaseClass |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="location-id-ios date10back key-ios lang-sdk unit-sdk" %}

### 示例代码

```objc

     //历史天气
    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;    
    QWeatherConfigInstance.location = @"101010100";
    QWeatherConfigInstance.date = @"20200425";
    [QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_HISTORICAL_WEATHER WithSuccess:^(WeatherHistoricalBaseClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
    //历史空气质量
      QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;    QWeatherConfigInstance.location = @"101010100";
    QWeatherConfigInstance.date = @"20200425";
    [QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_HISTORICAL_AIR WithSuccess:^(WeatherHistoricalBaseClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```
### 返回数据

**最近历史天气数据**

{% include api-response.html group="hisweather" type="daily hourly" prefix="weatherDaily weatherHourly" update=0 %}

**最近空气质量历史数据**

{% include api-response.html group="air" type="now" prefix="airHourly" update=0 %}
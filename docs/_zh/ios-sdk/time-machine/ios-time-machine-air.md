---
title: 历史空气质量
tag: [guide, ios, time-machine, air]
ref: 2-sdk-ios-historical-air
---

获取最近10天的中国空气质量历史再分析数据。

> 例如今天是12月30日，最多可获取12月20日至12月29日的空气质量历史数据。

| 接口代码（枚举）| 接口                         | 数据类                     |
| ------------ | ------------------------------- | -------------------------- |
| INQUIRE_TYPE_HISTORICAL_AIR| 历史空气质量      | WeatherHistoricalBaseClass |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="location-id-ios date10back key-ios lang-def" %}

### 示例代码

```objc
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


{% include api-response.html group="air" type="now" prefix="airHourly" update=0 %}
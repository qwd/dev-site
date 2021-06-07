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

| 参数             | 描述                                                                                                                        | 示例值                 |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| code             | 状态码，具体含义请参考[状态码](/docs/start/status-code/)                                                                     | 200                    |
| updateTime       | 当前[数据最近更新时间](/docs/start/glossary#update-time)                                                          | 2013-12-30T01:45+08:00 |
| fxLink           | 该城市的天气预播啊自适应网页，可嵌入网站或应用，**可能为空**                                                                | http://hfx.link/ae45   |
| now.pubTime      | 实时空气质量数据发布时间                                                                                                    | 2013-12-30T01:45+08:00 |
| now.aqi          | 实时空气质量指数                                                                                                            | 74                     |
| now.level        | 实时空气质量指数等级                                                                                                        | 2                      |
| now.category     | 实时空气质量指数级别                                                                                                        | 良                     |
| now.primary      | 实时空气质量的主要污染物，空气质量为优时，返回值为空                                                                        | pm2.5                  |
| now.pm10         | 实时 pm10                                                                                                                   | 78                     |
| now.pm2p5        | 实时 pm2.5                                                                                                                  | 66                     |
| now.no2          | 实时 二氧化氮                                                                                                               | 40                     |
| now.so2          | 实时 二氧化硫                                                                                                               | 30                     |
| now.co           | 实时 一氧化碳                                                                                                               | 33                     |
| now.o3           | 实时 臭氧                                                                                                                   | 20                     |
| station.pubTime  | 监测站实时空气质量数据发布时间    | 2013-12-30T01:45+08:00 |
| station.name     | 监测站名称                         | 万寿西宫               |
| station.cid      | 监测站ID           | CNA110000              |
| station.aqi      | 监测站实时空气质量指数    | 74                     |
| station.level    | 监测站实时空气质量指数等级                               | 2                      |
| station.category | 监测站实时空气质量指数级别                               | 良                     |
| station.primary  | 监测站实时主要污染物 | pm25                   |
| station.pm10     | 监测站实时PM10   | 78                     |
| station.pm2p5    | 监测站实时PM2.5  | 66                     |
| station.no2      | 监测站实时二氧化氮    | 40                     |
| station.so2      | 监测站实时二氧化硫  | 30                     |
| station.co       | 监测站实时一氧化碳  | 33                     |
| station.o3       | 监测站实时臭氧   | 20                     |
| daily.fxDate     | 空气质量逐天预报日期                                                                                                        | 2018-05-31             |
| daily.aqi        | 空气质量逐天预报指数                                                                                                        | 74                     |
| daily.level      | 逐逐天预报的空气质量指数等级                                                                                                | 2                      |
| daily.category   | 逐天预空气质量指数级别                                                                                                      | 良                     |
| daily.primary    | 空气质量逐天预报的主要污染物，空气质量为优时，返回值为空                                                                    | pm2.5                  |
| hourly.fxTime    | 空气质量逐小时预报日期                                                                                                      | 2013-12-30T01:45+08:00 |
| hourly.aqi       | 空气质量逐小时预报指数                                                                                                      | 74                     |
| hourly.level     | 逐逐天预报的空气质量指数等级                                                                                                | 2                      |
| hourly.category  | 逐天预空气质量指数级别                                                                                                      | 良                     |
| houry.primary    | 空气质量逐小时预报的主要污染物，空气质量为优时，返回值为空                                                                  | pm2.5                  |
| refer.sources    | 原始数据来源，可能为空                                                                                                      |                        |
| refer.license    | 使用许可，可能为空                                                                                                          |                        |
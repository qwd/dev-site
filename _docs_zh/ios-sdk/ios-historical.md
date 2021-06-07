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

| 参数                    | 描述                                                                                                 | 示例值                 |
| ----------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------- |
| code                    | 状态码，具体含义请参考[状态码](/docs/start/status-code/)                                              | 200                    |
| fxLink                  | 所查询城市的历史天气和历史空气质量网页，自适应PC和移动端，便于嵌入你的网站或应用。仅限中国城市返回。 | http://hfx.link/ae45   |
| weatherDaily.date       | 历史当天天气日期                                                                                     | 2018-05-31             |
| weatherDaily.sunrise    | 当天日出时间                                                                                         | 07:36                  |
| weatherDaily.sunset     | 当天日落时间                                                                                         | 16:58                  |
| weatherDaily.moonrise   | 当天月升时间                                                                                         | 04:47                  |
| weatherDaily.moonset    | 当天月落时间                                                                                         | 14:59                  |
| weatherDaily.moonPhase  | 当天月相名称                                                                                         | 上弦月                 |
| weatherDaily.tempMax    | 当天最高温度                                                                                         | 4                      |
| weatherDaily.tempMin    | 当天最低温度                                                                                         | -5                     |
| weatherDaily.humidity   | 当天相对湿度                                                                                         | 37                     |
| weatherDaily.precip     | 当天降水量                                                                                           | 0                      |
| weatherDaily.pressure   | 当天大气压强                                                                                         | 1018                   |
| weatherHourly.time      | 历史当天天气时间                                                                                     | 2013-12-30T01:45+08:00 |
| weatherHourly.temp      | 当天每小时温度                                                                                       | 2                      |
| weatherHourly.icon      | 当天每小时天气状况图标的代码，图标可通过[天气状况和图标](/docs/start/icons/)下载                      | 101                    |
| weatherHourly.text      | 当天每小时天气状况代码                                                                               | 多云                   |
| weatherHourly.precip    | 当天每小时累计降水量                                                                                 | 1.2                    |
| weatherHourly.windDir   | 当天每小时风向                                                                                       | 西北                   |
| weatherHourly.windScale | 当天每小时风力                                                                                       | 4                      |
| weatherHourly.windSpeed | 当天每小时风速，公里/小时                                                                            | 15                     |
| weatherHourly.wind360   | 当天每小时风向360角度                                                                                | 305                    |
| weatherHourly.humidity  | 当天每小时相对湿度                                                                                   | 30                     |
| weatherHourly.pressure  | 当天每小时大气压强                                                                                   | 1030                   |
| airHourly.pubTime       | 历史当天空气质量数据发布时间,格式yyyy-MM-dd HH:mm                                                    | 2013-12-30T01:45+08:00 |
| airHourly.aqi           | 当天每小时空气质量指数                                                                               | 74                     |
| airHourly.primary       | 当天每小时主要污染物                                                                                 | pm2.5                  |
| airHourly.level         | 当天每小时空气质量指数等级                                                                           | 2                      |
| airHourly.category      | 当天每小时空气质量指数级别                                                                           | 良                     |
| airHourly.pm10          | 当天每小时pm10                                                                                       | 78                     |
| airHourly.pm2p5         | 当天每小时pm2.5                                                                                      | 66                     |
| airHourly.no2           | 当天每小时二氧化氮                                                                                   | 40                     |
| airHourly.so2           | 当天每小时二氧化硫                                                                                   | 30                     |
| airHourly.co            | 当天每小时一氧化碳                                                                                   | 33                     |
| airHourly.o3            | 当天每小时臭氧                                                                                       | 20                     |
| refer.sources           | 原始数据来源，可能为空                                                                               | qweather.com           |
| refer.license           | 使用许可，可能为空                                                                                   |                        |

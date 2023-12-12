---
title: 天气时光机
tag: [guide, ios, time-machine, weather]
ref: 7-sdk-ios-historical-weather
---

获取最近10天的天气历史再分析数据。

> 例如今天是12月30日，最多可获取12月20日至12月29日的天气历史数据。

> 和风天气额外提供了2000年至今的历史再分析气象数据，通过数据文件的形式发送，如需要长时间的历史气象数据数据，请提供下列信息，发送邮件至sales@qweather.com，我们将有专人与你联系:
> 
> * 企业名称
> * 联系方式
> * 所需要的城市或坐标
> * 所需要的时间范围

| 接口代码（枚举）| 接口                         | 数据类                     |
| ------------ | ------------------------------- | -------------------------- |
| INQUIRE_TYPE_HISTORICAL_WEATHER| 历史天气      | WeatherHistoricalBaseClass |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="location-id-ios date10back key-ios lang-def unit-def" %}

### 示例代码

```objc
    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;    
    QWeatherConfigInstance.location = @"101010100";
    QWeatherConfigInstance.date = @"20200425";
    [QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_HISTORICAL_WEATHER WithSuccess:^(WeatherHistoricalBaseClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
```
### 返回数据

{% include api-response.html group="hisweather" type="daily hourly" prefix="weatherDaily weatherHourly" update=0 %}

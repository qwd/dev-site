---
title: 实时天气和预报
tag: ios-sdk
version: v4
description: 使用和风天气iOS SDK获取全球天气预报、逐小时天气预报、未来15天预报等数据。和风天气支持全国4000+个市县区和海外15万个城市天气预报。
ref: 3-sdk-ios-weather
---

## 天气预报和实况

全国4000+个市县区和海外15万个城市天气数据，包括实时温度、体感温度、风力风向、相对湿度、大气压强、降水量、能见度、露点温度、云量等数据。

| 接口代码（枚举）          | 接口          | 数据类           |
| ------------------------- | ------------- | ---------------- |
| INQUIRE_TYPE_WEATHER_NOW  | 实况天气      | WeatherBaseClass |
| INQUIRE_TYPE_WEATHER_3D   | 3天预报       | WeatherBaseClass |
| INQUIRE_TYPE_WEATHER_7D   | 7天预报       | WeatherBaseClass |
| INQUIRE_TYPE_WEATHER_10D  | 10天预报      | WeatherBaseClass |
| INQUIRE_TYPE_WEATHER_15D  | 15天预报      | WeatherBaseClass |
| INQUIRE_TYPE_WEATHER_24H  | 24小时预报况  | WeatherBaseClass |
| INQUIRE_TYPE_WEATHER_72H  | 72小时预报况  | WeatherBaseClass |
| INQUIRE_TYPE_WEATHER_168H | 168小时预报况 | WeatherBaseClass |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="location-ios key-ios lang-sdk unit-sdk" %}

### 示例代码

```objc
QWeatherConfigInstance.publicID = @"publicID";
QWeatherConfigInstance.appKey = @"key";
QWeatherConfigInstance.appType = APP_TYPE_BIZ;
QWeatherConfigInstance.location = @"101010100";
QWeatherConfigInstance.lang = @"";
QWeatherConfigInstance.unit = @"";
[QWeatherConfigInstance weatherWithInquireType:INQUIRE_TYPE_WEATHER_NOW WithSuccess:^(WeatherBaseClass  *responseObject) {
        
    NSLog(@"描述->%@",[responseObject description]);
        
} faileureForError:^(NSError *error) {
    NSLog(@"error->%@",error);
        
}]; 
```

### 返回数据

| 参数                 | 描述                                                                          | 示例值                 |
| -------------------- | ----------------------------------------------------------------------------- | ---------------------- |
| code                 | 状态码，具体含义请参考[状态码](/docs/start/status-code/)                       | 200                    |
| updateTime           | 当前[数据最近更新时间](/docs/start/glossary#update-time)            | 2013-12-30T01:45+08:00 |
| fxLink               | 该城市的天气预报详情自适应网页，可嵌入网站或应用                              | http://hfx.link/ae45   |
| now.obsTime          | 实况观测时间                                                                  | 2013-12-30T01:45+08:00 |
| now.temp             | 实况温度，默认单位：摄氏度                                                    | 21                     |
| now.feelsLike        | 实况体感温度，默认单位：摄氏度                                                | 23                     |
| now.icon             | 当前天气状况和图标的代码，图标可通过[天气状况和图标](/docs/start/icons/)下载   | 100                    |
| now.text             | 实况天气状况的文字描述，包括阴晴雨雪等天气状态的描述                          | 晴                     |
| now.wind360          | 实况风向360角度                                                               | 305                    |
| now.windDir          | 实况风向                                                                      | 西北                   |
| now.windScale        | 实况风力等级                                                                  | 3                      |
| now.windSpeed        | 实况风速，公里/小时                                                           | 15                     |
| now.humidity         | 实况相对湿度，百分比数值                                                      | 40                     |
| now.precip           | 实况降水量，默认单位：毫米                                                    | 1.2                    |
| now.pressure         | 实况大气压强，默认单位：百帕                                                  | 1020                   |
| now.vis              | 实况能见度，默认单位：公里                                                    | 10                     |
| now.cloud            | 实况云量，百分比数值                                                          | 23                     |
| now.dew              | 实况露点温度                                                                  | 12                     |
| daily.fxDate         | 预报日期                                                                      | 2013-05-31             |
| daily.sunrise        | 日出时间                                                                      | 07:34                  |
| daily.sunset         | 日落时间                                                                      | 17:21                  |
| daily.moonrise       | 月升时间                                                                      | 16:09                  |
| daily.moonset        | 月落时间                                                                      | 04:21                  |
| daily.moonPhase      | 月相名称                                                                      | 满月                   |
| daily.tempMax        | 预报当天最高温度                                                              | 4                      |
| daily.tempMin        | 预报当天最低温度                                                              | -5                     |
| daily.iconDay        | 预报白天天气状况的图标代码，图标可通过[天气状况和图标](/docs/start/icons/)下载 | 100                    |
| daily.textDay        | 预报白天天气状况文字描述，包括阴晴雨雪等天气状态的描述                        | 晴                     |
| daily.iconNight      | 预报夜间天气状况的图标代码，图标可通过[天气状况和图标](/docs/start/icons/)下载 | 100                    |
| daily.textNight      | 预报晚间天气状况文字描述，包括阴晴雨雪等天气状态的描述                        | 晴                     |
| daily.wind360Day     | 预报白天风向360角度                                                           | 305                    |
| daily.windDirDay     | 预报白天风向                                                                  | 西北                   |
| daily.windScaleDay   | 预报白天风力等级                                                              | 3-4                    |
| daily.windSpeedDay   | 预报白天风速，公里/小时                                                       | 15                     |
| daily.wind360Night   | 预报夜间风向360角度                                                           | 305                    |
| daily.WindDirNight   | 预报夜间当天风向                                                              | 西北                   |
| daily.windScaleNight | 预报夜间风力等级                                                              | 3-4                    |
| daily.windSpeedNight | 预报夜间风速，公里/小时                                                       | 15                     |
| daily.humidity       | 预报当天相对湿度，百分比数值                                                  | 40                     |
| daily.precip         | 预报当天降水量，默认单位：毫米                                                | 1.2                    |
| daily.pressure       | 预报当天大气压强，默认单位：百帕                                              | 1020                   |
| daily.vis            | 预报当天能见度，默认单位：公里                                                | 10                     |
| daily.cloud          | 预报当天云量，百分比数值                                                      | 23                     |
| daily.uvIndex        | 预报当天紫外线强度指数                                                        | 3                      |
| hourly.fxTime        | 逐小时预报时间                                                                | 2013-12-30T13:00+08:00 |
| hourly.temp          | 逐小时预报温度                                                                | 2                      |
| hourly.icon          | 逐小时预报天气状况图标代码，图标可通过[天气状况和图标](/docs/start/icons/)下载 | 101                    |
| hourly.text          | 逐小时预报天气状况文字描述，包括阴晴雨雪等天气状态的描述                      | 多云                   |
| hourly.wind360       | 逐小时预报风向360角度                                                         | 305                    |
| hourly.windDir       | 逐小时预报风向                                                                | 西北                   |
| hourly.windScale     | 逐小时预报风力等级                                                            | 3                      |
| hourly.windSpeed     | 逐小时预报风速，公里/小时                                                     | 15                     |
| hourly.humidity      | 逐小时预报相对湿度，百分比数值                                                | 40                     |
| hourly.precip        | 逐小时预报降水量，默认单位：毫米                                              | 1.2                    |
| hourly.pop           | 逐小时预报降水概率，百分比数值，可能为空                                      | 5                      |
| hourly.pressure      | 逐小时预报大气压强，默认单位：百帕                                            | 1020                   |
| hourly.cloud         | 逐小时预报云量，百分比数值                                                    | 23                     |
| hourly.dew           | 逐小时预报露点温度                                                            | 12                     |
| refer.sources        | 原始数据来源，可能为空                                                        |                        |
| refer.license        | 使用许可，可能为空                                                            |                        |

## 分钟降水

分钟级降水提供中国地区未来2小时内每5分钟降水数据、降水类型以及未来2小时的降水概况信息。可实现精确到1公里格点的全国分钟级降雨/降雪预报，为每一分钟的降雨进行预测。

| 接口代码（枚举）             | 接口      | 数据类                   |
| -------- | ----------------------------- | ------------------------ |
|  INQUIRE_TYPE_WEATHER_MINUTELY| 分钟降水 | WeatherMinutelyBaseClass |

### 接口参数

{% include params.html p="location-coord key-ios lang-zhen-sdk" %}

### 示例代码

```objc
 
    QWeatherConfigInstance.publicID = @"publicID";
    QWeatherConfigInstance.appKey = @"key";
    QWeatherConfigInstance.appType = APP_TYPE_BIZ;    
    QWeatherConfigInstance.location = @"116.41,39.92";
    QWeatherConfigInstance.lang = @"";
    [QWeatherConfigInstance weatherWithInquireType: INQUIRE_TYPE_WEATHER_MINUTELY WithSuccess:^(WeatherMinutelyBaseClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
 
```

### 返回数据

| 参数            | 描述                                                               | 示例                   |
| :-------------- | :----------------------------------------------------------------- | :--------------------- |
| code            | 状态码，具体含义请参考[状态码](/docs/start/status-code/)            | 200                    |
| updateTime      | 当前[数据最近更新时间](/docs/start/glossary#update-time) | 2013-12-30T01:45+08:00 |
| fxLink          | 该城市的分钟降水详情自适应网页，可嵌入网站或应用。**有可能为空。** | http://hfx.link/ae45   |
| summary         | 分钟降水描述                                                       | 未来2小时无降雨        |
| minutely.fxTime | 预报时间                                                           | 2013-12-30T01:45+08:00 |
| minutely.precip | 降水量                                                             | 10                     |
| minutely.type   | 降水类型<br />`rain`雨<br />`snow`雪                               | rain                   |
| refer.sources   | 原始数据来源，可能为空                                             |                        |
| refer.license   | 使用许可，可能为空                                                 |                        |
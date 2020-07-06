---
title: iOS SDK 实体类属性
tag: [sdk]
version: v4
description: 和风天气iOS SDK 实体类属性对照表
toc: true
---

## 天气预报和实况

接口 | 接口代码（枚举） | 数据类
--------- | ------------- | -----------
实况天气| INQUIRE_TYPE_WEATHER_NOW | WeatherBaseClass
3天预报| INQUIRE_TYPE_WEATHER_3D | WeatherBaseClass
7天预报| INQUIRE_TYPE_WEATHER_7D | WeatherBaseClass
10天预报 | INQUIRE_TYPE_WEATHER_10D | WeatherBaseClass
15天预报| INQUIRE_TYPE_WEATHER_15D | WeatherBaseClass
24小时预报况 | INQUIRE_TYPE_WEATHER_24H | WeatherBaseClass
72小时预报况 | INQUIRE_TYPE_WEATHER_72H | WeatherBaseClass
168小时预报况 | INQUIRE_TYPE_WEATHER_168H | WeatherBaseClass

#### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

**location** {{ site.data.text.required }}

需要查询地区的[LocationID](/docs/start/glossary#locationid)或以逗号分隔的[经度/纬度坐标](/docsgetting-started/glossary#coordinate)（十进制），LocationID可通过[城市搜索](#城市查询)服务获取。例如： location=101010100 或 location=39.92,116.41

**appKey** {{ site.data.text.required }}

用户认证key，例如 `appKey=123456789ABC`
 
**lang** {{ site.data.text.optional }}

多语言设置，支持31种语言，**默认中文**。具体的语言参数值请参考[多语言参数值](/docs/start/language)。

**unit** {{ site.data.text.optional }}

[度量衡单位参数](/docs/start/unit)选择，例如温度选摄氏度或华氏度、公里或英里。**默认公制单位**。

| 语言 | 语言代码 | 常量属性    |
| ---- | -------- | ----------- |
| 公制 | m        | UNIT_TYPE_M |
| 英制 | i        | UNIT_TYPE_I |

#### 示例代码

```objc
HeConfigInstance.publicID = @"publicID";
HeConfigInstance.appKey = @"key";
HeConfigInstance.appType = APP_TYPE_BIZ;
HeConfigInstance.location = @"101010100";
HeConfigInstance.lang = @"";
HeConfigInstance.unit = @"";
[HeConfigInstance weatherWithInquireType:INQUIRE_TYPE_WEATHER_NOW WithSuccess:^(WeatherBaseClass  *responseObject) {
        
    NSLog(@"描述->%@",[responseObject description]);
        
} faileureForError:^(NSError *error) {
    NSLog(@"error->%@",error);
        
}]; 
```

#### 返回数据

| 参数       | 描述              | 示例值    |
| ---------- | ----------------- | --------- |
| code          | 状态码，具体含义请参考[状态码](/docs/start/status-code)                    | 200                                                                        |
| updateTime    | 当前[数据最近更新时间](/docs/getting-started/glossary#updatetime)              | 2013-12-30T01:45+08:00                                                     |
| fxLink | 该城市的天气预报详情自适应网页，可嵌入网站或应用 | http://hfx.link/ae45 |
| now.obsTime    | 实况观测时间                                                                                            | 2013-12-30T01:45+08:00 |
| now.temp        | 实况温度，默认单位：摄氏度                                                                                  | 21               |
| now.feelsLike         | 实况体感温度，默认单位：摄氏度                                                                              | 23               |
| now.icon   | 当前天气状况和图标的代码，图标可通过[天气状况和图标](/docs/start/icons)下载  | 100              |
| now.text | 实况天气状况的文字描述，包括阴晴雨雪等天气状态的描述                                                                                      | 晴               |
| now.wind360    | 实况风向360角度                                                                                             | 305              |
| now.windDir    | 实况风向                                                                                                    | 西北             |
| now.windScale     | 实况风力等级                                                                                                    | 3                |
| now.windSpeed    | 实况风速，公里/小时                                                                                         | 15               |
| now.humidity        | 实况相对湿度，百分比数值                                                                                    | 40               |
| now.precip       | 实况降水量，默认单位：毫米                                                                                  | 1.2              |
| now.pressure       | 实况大气压强，默认单位：百帕                                                                                | 1020             |
| now.vis        | 实况能见度，默认单位：公里                                                                                  | 10               |
| now.cloud      | 实况云量，百分比数值                                                                                        | 23               |
| now.dew        | 实况露点温度                                                                                        | 12               |
| daily.fxDate      | 预报日期                                                                                            | 2013-05-31 |
| daily.sunrise          | 日出时间                                                                                            | 07:34      |
| daily.sunset          | 日落时间                                                                                            | 17:21      |
| daily.moonrise          | 月升时间                                                                                            | 16:09      |
| daily.moonset          | 月落时间                                                                                            | 04:21      |
| daily.moonPhase       | 月相名称                                                                                                |  满月          |
| daily.tempMax      | 预报当天最高温度                                                                                            | 4          |
| daily.tempMin      | 预报当天最低温度                                                                                            | -5         |
| daily.iconDay   | 预报白天天气状况的图标代码，图标可通过[天气状况和图标](/docs/start/icons)下载 | 100        |
| daily.textDay | 预报白天天气状况文字描述，包括阴晴雨雪等天气状态的描述                                                                                | 晴         |
| daily.iconNight   | 预报夜间天气状况的图标代码，图标可通过[天气状况和图标](/docs/start/icons)下载 | 100        |
| daily.textNight | 预报晚间天气状况文字描述，包括阴晴雨雪等天气状态的描述                                                                                | 晴         |
| daily.wind360Day     | 预报白天风向360角度                                                                                         | 305        |
| daily.windDirDay     | 预报白天风向                                                                                                | 西北       |
| daily.windScaleDay      | 预报白天风力等级                                                                                                | 3-4        |
| daily.windSpeedDay     | 预报白天风速，公里/小时                                                                                     | 15         |
| daily.wind360Night     | 预报夜间风向360角度                                                                                         | 305        |
| daily.WindDirNight     | 预报夜间当天风向                                                                                                | 西北       |
| daily.windScaleNight      | 预报夜间风力等级                                                                                                | 3-4        |
| daily.windSpeedNight     | 预报夜间风速，公里/小时                                                                                    | 15         |
| daily.humidity         | 预报当天相对湿度，百分比数值                                                                                | 40         |
| daily.precip        | 预报当天降水量，默认单位：毫米                                                                              | 1.2        |
| daily.pressure        | 预报当天大气压强，默认单位：百帕                                                                            | 1020       |
| daily.vis         | 预报当天能见度，默认单位：公里                                                                              | 10         |
| daily.cloud       | 预报当天云量，百分比数值                                                                                    | 23         |
| daily.uvIndex     | 预报当天紫外线强度指数                                                                                      | 3          |
| hourly.fxTime     | 逐小时预报时间                                                                                        | 2013-12-30T13:00+08:00 |
| hourly.temp        | 逐小时预报温度                                                                                            | 2                |
| hourly.icon   | 逐小时预报天气状况图标代码，图标可通过[天气状况和图标](/docs/start/icons)下载  | 101              |
| hourly.text | 逐小时预报天气状况文字描述，包括阴晴雨雪等天气状态的描述                                                                                | 多云             |
| hourly.wind360    | 逐小时预报风向360角度                                                                                     | 305              |
| hourly.windDir    | 逐小时预报风向                                                                                            | 西北             |
| hourly.windScale     | 逐小时预报风力等级                                                                                            | 3                |
| hourly.windSpeed    | 逐小时预报风速，公里/小时                                                                                 | 15               |
| hourly.humidity        | 逐小时预报相对湿度，百分比数值                                                                            | 40               |
| hourly.precip       | 逐小时预报降水量，默认单位：毫米                                                                          | 1.2              |
| hourly.pop       | 逐小时预报降水概率，百分比数值，可能为空                                                                          | 5              |
| hourly.pressure       | 逐小时预报大气压强，默认单位：百帕                                                                        | 1020             |
| hourly.cloud      | 逐小时预报云量，百分比数值                                                                                | 23               |
| hourly.dew        | 逐小时预报露点温度                                                                                        | 12               |
| refer.sources | 原始数据来源，可能为空                             |                                                                            |
| refer.license | 	使用许可，可能为空                                 |                                                                            |

## 分钟降水

接口 | 接口代码（枚举） | 数据类
--------- | ------------- | -----------
分钟降水 | INQUIRE_TYPE_WEATHER_MINUTELY | WeatherMinutelyBaseClass

#### 接口参数

**location** {{ site.data.text.required }}

需要查询地区的以逗号分隔的[经度/纬度坐标](/docsgetting-started/glossary#coordinate)（十进制）。例如： location=39.92,116.41

**appKey** {{ site.data.text.required }}

用户认证key，例如 `appKey=123456789ABC`

**lang** {{ site.data.text.optional }}

多语言设置，支持31种语言，**默认中文**。具体的语言参数值请参考[多语言参数值](/docs/start/language)。

#### 示例代码

```objc
 
    HeConfigInstance.publicID = @"publicID";
    HeConfigInstance.appKey = @"key";
    HeConfigInstance.appType = APP_TYPE_BIZ;    
    HeConfigInstance.location = @"116.41,39.92";
    HeConfigInstance.lang = @"";
    [HeConfigInstance weatherWithInquireType: INQUIRE_TYPE_WEATHER_MINUTELY WithSuccess:^(WeatherMinutelyBaseClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
 
```

#### 返回数据

| 参数            | 描述                                                                   | 示例                   |
| :-------------- | :--------------------------------------------------------------------- | :--------------------- |
| code            | 状态码，具体含义请参考[状态码](/docs/start/status-code)                                              | 200                    |
| updateTime      | 当前[数据最近更新时间](/docs/getting-started/glossary#updatetime)                                       | 2013-12-30T01:45+08:00 |
| fxLink          | 该城市的分钟降水详情自适应网页，可嵌入网站或应用。**有可能为空。** | http://hfx.link/ae45   |
| summary         | 分钟降水描述                                                           | 未来2小时无降雨        |
| minutely.fxTime | 预报时间                                                               | 2013-12-30T01:45+08:00 |
| minutely.precip | 降水量                                                                 | 10                     |
| minutely.type   | 降水类型<br />`rain`雨<br />`snow`雪                                   | rain                   |
| refer.sources   | 原始数据来源，可能为空                                           |                        |
| refer.license   | 使用许可，可能为空                                          |                        |



## 空气质量

接口 | 接口代码（枚举） | 数据类
--------- | ------------- | -----------
空气质量实况 | INQUIRE_TYPE_WEATHER_AIR_NOW | AirBaseClass
空气质量5天预报 | INQUIRE_TYPE_WEATHER_AIR_5D | AirBaseClass

#### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

**location** {{ site.data.text.required }}

需要查询地区的[LocationID](/docs/start/glossary#locationid)或以逗号分隔的[经度/纬度坐标](/docsgetting-started/glossary#coordinate)（十进制），LocationID可通过[城市搜索](#城市查询)服务获取。例如： location=101010100 或 location=39.92,116.41

**appKey** {{ site.data.text.required }}

用户认证key，例如 `appKey=123456789ABC`
 
**lang** {{ site.data.text.optional }}

多语言设置，支持31种语言，**默认中文**。具体的语言参数值请参考[多语言参数值](/docs/start/language)。

#### 示例代码

```objc
   HeConfigInstance.publicID = @"publicID";
    HeConfigInstance.appKey = @"key";
    HeConfigInstance.appType = APP_TYPE_BIZ;    
    HeConfigInstance.location = @"101010100";
    HeConfigInstance.lang = @"";
    HeConfigInstance.unit = @"";
    [HeConfigInstance weatherWithInquireType:INQUIRE_TYPE_WEATHER_AIR_NOW WithSuccess:^(AirBaseClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```

#### 返回数据

| 参数       | 描述              | 示例值    |
| ---------- | ----------------- | --------- |
| code          | 状态码，具体含义请参考[状态码](/docs/start/status-code)                     | 200                                                                        |
| updateTime    | 当前[数据最近更新时间](/docs/getting-started/glossary#updatetime)               | 2013-12-30T01:45+08:00                                                     |
| fxLink | 该城市的天气预播啊自适应网页，可嵌入网站或应用，**可能为空** | http://hfx.link/ae45 |
| now.pubTime | 实时空气质量数据发布时间 | 2013-12-30T01:45+08:00 |
| now.aqi      | 实时空气质量指数，[AQI和PM25的关系](https://www.heweather.com/blog/aqi) | 74               |
| now.level     | 实时空气质量指数等级	 | 2 |
| now.category     | 实时空气质量指数级别	 | 良 |
| now.primary     | 实时空气质量的主要污染物，空气质量为优时，返回值为空             | pm2.5             |
| now.pm10     | 实时 pm10             | 78               |
| now.pm2p5     | 实时 pm2.5                   | 66               |
| now.no2      | 实时 二氧化氮          | 40               |
| now.so2      | 实时 二氧化硫         | 30               |
| now.co       | 实时 一氧化碳         | 33               |
| now.o3       | 实时 臭氧                   | 20               |
| station.pubTime | 国控站点实时空气质量数据发布时间，仅在[环保部国控站点的城市](https://cdn.heweather.com/air_gov.xlsx)中返回    | 2013-12-30T01:45+08:00 |
| station.name  | 国控站点名称，仅在[环保部国控站点的城市](https://cdn.heweather.com/air_gov.xlsx)中返回                                                     | 万寿西宫         |
| station.cid     | 国控站点ID，仅在[环保部国控站点的城市](https://cdn.heweather.com/air_gov.xlsx)中返回                                                       | CNA110000        |
| station.aqi      | 国控站点实时空气质量指数，仅在[环保部国控站点的城市](https://cdn.heweather.com/air_gov.xlsx)中返回  | 74               |
| station.level     | 监测站实时空气质量指数等级，仅在国控站点的城市中返回 | 2               |
| station.category     | 监测站实时空气质量指数级别，仅在国控站点的城市中返回| 良 |
| station.primary     | 国控站点实时主要污染物，仅在[环保部国控站点的城市](https://cdn.heweather.com/air_gov.xlsx)中返回。空气质量为优时，返回值为空                                                   | pm25             |
| station.pm10     | 国控站点实时 pm10，仅在[环保部国控站点的城市](https://cdn.heweather.com/air_gov.xlsx)中返回                                                          | 78               |
| station.pm2p5    | 国控站点实时 pm2.5，仅在[环保部国控站点的城市](https://cdn.heweather.com/air_gov.xlsx)中返回                                                          | 66               |
| station.no2      | 国控站点实时 二氧化氮，仅在[环保部国控站点的城市](https://cdn.heweather.com/air_gov.xlsx)中返回                                                      | 40               |
| station.so2      | 国控站点实时 二氧化硫，仅在[环保部国控站点的城市](https://cdn.heweather.com/air_gov.xlsx)中返回                                                      | 30               |
| station.co       | 国控站点实时 一氧化碳，仅在[环保部国控站点的城市](https://cdn.heweather.com/air_gov.xlsx)中返回                                                      | 33               |
| station.o3       | 国控站点实时 臭氧，仅在[环保部国控站点的城市](https://cdn.heweather.com/air_gov.xlsx)中返回                                                          | 20               |
| daily.fxDate | 空气质量逐天预报日期                                      | 2018-05-31 |
| daily.aqi  | 空气质量逐天预报指数 | 74         |
| daily.level | 逐逐天预报的空气质量指数等级| 2         |
| daily.category     | 逐天预空气质量指数级别 | 良 |
| daily.primary | 空气质量逐天预报的主要污染物，空气质量为优时，返回值为空     | pm2.5       |
| hourly.fxTime | 空气质量逐小时预报日期 | 2013-12-30T01:45+08:00       |
| hourly.aqi  | 空气质量逐小时预报指数 | 74         |
| hourly.level | 逐逐天预报的空气质量指数等级| 2         |
| hourly.category     | 逐天预空气质量指数级别 | 良 |
| houry.primary | 空气质量逐小时预报的主要污染物，空气质量为优时，返回值为空     | pm2.5       |
| refer.sources | 	原始数据来源，可能为空                            |                                                                            |
| refer.license | 	使用许可，可能为空                                 |                                                                            |

## 灾害预警

接口 | 接口代码（枚举） | 数据类
--------- | ------------- | -----------
灾害预警 | INQUIRE_TYPE_WARNING | WarningBaseClass

#### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

**location** {{ site.data.text.required }}

需要查询地区的[LocationID](/docs/start/glossary#locationid)或以逗号分隔的[经度/纬度坐标](/docsgetting-started/glossary#coordinate)（十进制），LocationID可通过[城市搜索](#城市查询)服务获取。例如： location=101010100 或 location=39.92,116.41

**appKey** {{ site.data.text.required }}

用户认证key，例如 `appKey=123456789ABC`

**lang** {{ site.data.text.optional }}

多语言设置，支持31种语言，**默认中文**。具体的语言参数值请参考[多语言参数值](/docs/start/language)。

#### 示例代码

```objc
 
    HeConfigInstance.publicID = @"publicID";
    HeConfigInstance.appKey = @"key";
    HeConfigInstance.appType = APP_TYPE_BIZ;    
    HeConfigInstance.location = @"101010100";
    HeConfigInstance.lang = @"";
    HeConfigInstance.unit = @"";
    [HeConfigInstance weatherWithInquireType: INQUIRE_TYPE_WARNING WithSuccess:^(WarningBaseClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```

#### 返回数据

| 参数              | 描述                                                                   | 示例值                                                           |
| ----------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------- |
| code              | 	状态码，具体含义请参考[状态码](/docs/start/status-code)                                              | 200                                                              |
| updateTime        | 当前[数据最近更新时间](/docs/getting-started/glossary#updatetime)                                        | 2013-12-30T01:45+08:00                                           |
| fxLink            | 该城市的灾害预警详情自适应网页，可嵌入网站或应用。**可能为空。** | http://hfx.link/ae45                                             |
| warning.id        | 本条预警的唯一标识，可判断本条预警是否已经存在，id有效期不超过72小时       | 202010110345679813                                               |
| warning.pubTime   | 预警发布时间                                                           | 2017-10-25T12:03+08:00                                           |
| warning.title     | 预警信息标题                                                           | 广东省深圳市气象台发布雷电黄色预警                               |
| warning.startTime | 预警开始时间，**不适用于所有国家，可能为空。**                       | 广东省深圳市气象台发布雷电黄色预警                               |
| warning.endTime   | 预警结束时间，**不适用于所有国家，可能为空。**                       | 广东省深圳市气象台发布雷电黄色预警                               |
| warning.status    | 预警状态，**不适用于所有国家，可能为空。**                           | 预警中                                                           |
| warning.level     | 预警等级                                                               | 黄色                                                             |
| warning.type      | 预警类型                                                               | 雷电                                                             |
| warning.txt       | 预警详细文字描述                                                           | 深圳市气象局于10月04日12时59分发布雷电黄色预警信号，请注意防御。 |
| refer.sources     | 原始数据来源，可能为空                                           |                                                                  |
| refer.license     | 使用许可，可能为空                                          |                                                                  |

## 灾害预警列表

接口 | 接口代码（枚举） | 数据类
--------- | ------------- | -----------
灾害预警城市列表 | INQUIRE_TYPE_WARNINGLIST | WarningListClass

#### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

**range** {{ site.data.text.required }}

选择指定的国家，目前仅支持中国。例如`range=cn`。

**appKey** {{ site.data.text.required }}

用户认证key，例如 `appKey=123456789ABC`

#### 示例代码

```objc
 
    HeConfigInstance.publicID = @"publicID";
    HeConfigInstance.appKey = @"key";
    HeConfigInstance.appType = APP_TYPE_BIZ;    
    HeConfigInstance.range = @"cn";
    [HeConfigInstance weatherWithInquireType: INQUIRE_TYPE_WARNINGLIST WithSuccess:^(WarningListClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```

#### 返回数据

| 参数       | 描述              | 示例值    |
| ---------- | ----------------- | --------- |
| code | 状态码，具体含义请参考[状态码](/docs/start/status-code)| 200  |
| updateTime    | 当前[数据最近更新时间](/docs/getting-started/glossary#updatetime)              | 2013-12-30T01:45+08:00                                                     |
| warningLocList.locationId   | 当前国家预警的城市/地区ID      | 101010100 |

## 生活指数

接口 | 接口代码（枚举） | 数据类
--------- | ------------- | -----------
当天生活指数| INQUIRE_TYPE_INDICES_1D | IndicesBaseClass
3天生活指数 | INQUIRE_TYPE_INDICES_3D | IndicesBaseClass

#### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

**indices** {{ site.data.text.required }}

生活指数数据类型，包括洗车指数、穿衣指数、钓鱼指数等。可以一次性获取多个类型的生活指数。

indices内放入需要的INDICES_TYPESTRING类型，如选择`INDICES_TYPE_all`，则不能再使用其他生活指数类型。
 
类型 | DATA_TYPE | 
--------- | ------------- | 
INDICES_TYPE_all|全部指数
INDICES_TYPE_comf| 舒适度指数 
INDICES_TYPE_cw |洗车指数
INDICES_TYPE_drsg|穿衣指数
INDICES_TYPE_flu|感冒指数
INDICES_TYPE_spt |运动指数
INDICES_TYPE_trav|旅游指数
INDICES_TYPE_uv|紫外线指数
INDICES_TYPE_ap|空气污染扩散条件指数
INDICES_TYPE_ac|空调开启指数
INDICES_TYPE_ag |花粉过敏指数
INDICES_TYPE_gl |太阳镜指数
INDICES_TYPE_mu|化妆指数
INDICES_TYPE_dc|晾晒指数
INDICES_TYPE_ptfc |交通指数
INDICES_TYPE_fis |钓鱼指数
INDICES_TYPE_spi|防晒指数
INDICES_TYPE_ski|滑雪指数
 
**location** {{ site.data.text.required }}

需要查询地区的[LocationID](/docs/start/glossary#locationid)或以逗号分隔的[经度/纬度坐标](/docsgetting-started/glossary#coordinate)（十进制），LocationID可通过[城市搜索](#城市查询)服务获取。例如： location=101010100 或 location=39.92,116.41

**appKey** {{ site.data.text.required }}

用户认证key，例如 `appKey=123456789ABC`

#### 示例代码

```objc
 
    HeConfigInstance.location = @"101010100";
    HeConfigInstance.appKey = @"key";
    HeConfigInstance.appType = APP_TYPE_BIZ;
    [HeConfigInstance weatherWithInquireType:INQUIRE_TYPE_INDICES_1D WithSuccess:^(IndicesBaseClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```
#### 返回数据

| 参数          | 描述                                                 | 示例值                                                                     |
| ------------- | ---------------------------------------------------- | -------------------------------------------------------------------------- |
| code          | 状态码，具体含义请参考[状态码](/docs/start/status-code)                            | 200                                                                        |
| updateTime    | 当前[数据最近更新时间](/docs/getting-started/glossary#updatetime)                     | 2013-12-30T01:45+08:00                                                     |
| fxLink        | 该城市的天气预报详情自适应网页，可嵌入网站或应用 | http://hfx.link/ae45                                                       |
| daily.date    | 预报日期                                             | 2018-05-30                                                                 |
| daily.type    | 生活指数预报类型                                     | 2                                                                       |
| daily.name    | 生活指数预报类型的名称                               | 舒适度指数                                                                 |
| daily.level   | 生活指数预报等级                                     | 1                                                                       |
| daily.category   | 生活指数预报级别名称                                     |                                                                        |
| daily.text    | 生活指数预报的详细描述                               | 白天温度适宜，应会感到比较清爽和舒适。 |
| refer.sources | 原始数据来源，可能为空                        |                                                                            |
| refer.license | 	使用许可，可能为空                         |                                                                            |

#### 生活指数等级

生活指数等级仅供参考，等级有可能会进行调整。

| 生活指数类型名称       | 类型ID | 等级                                                               |
| ---------------------- | ------ | ------------------------------------------------------------------ |
| 全部生活指数           | 0      |                                                                    |
| 运动指数               | 1      | 适宜(1)、较适宜(2)、较不宜(3)                                               |
| 洗车指数               | 2      | 适宜(1)、较适宜(2)、较不宜(3)、不宜(4)                                         |
| 穿衣指数               | 3      | 寒冷(1)、冷(2)、较冷(3)、较舒适(4)、舒适(5)、热(6)、炎热(7)                            |
| 钓鱼指数               | 4      | 适宜(1)、较适宜(2)、不宜(3)                                                 |
| 紫外线指数             | 5      | 最弱(1)、弱(2)、中等(3)、强(4)、很强(5)                                           |
| 旅游指数               | 6      | 适宜(1)、较适宜(2)、一般(3)、较不宜(4)、不适宜(5)                                |
| 花粉过敏指数           | 7      | 极不易发(1)、不易发(2)、较易发(3)、易发(4)、极易发(5)                             |
| 舒适度指数             | 8      | 舒适(1)、较舒适(2)、较不舒适(3)、很不舒适(4)、极不舒适(5)、不舒适(6)、非常不舒适(7)     |
| 感冒指数               | 9      | 少发(1)、较易发(2)、易发(3)、极易发(4)                                         |
| 空气污染扩散条件指数数 | 10     | 优(1)、良(2)、中(3)、较差(4)、很差(5)                                             |
| 空调开启指数           | 11     | 长时间开启(1)、部分时间开启(2)、较少开启(3)、开启制暖空调(4)                   |
| 太阳镜指数             | 12     | 不需要(1)、需要(2)、必要(3)、很必要(4)、非常必要(5)                               |
| 化妆指数               | 13     | 保湿(1)、保湿防晒(2)、去油防晒(3)、防脱水防晒(4)、去油(5)、防脱水(6)、防晒(7)、滋润保湿(8) |
| 晾晒指数               | 14     | 极适宜(1)、适宜(2)、基本适宜(3)、不太适宜(4)、不宜(5)、不适宜(6)                     |
| 交通指数               | 15     | 良好(1)、较好(2)、一般(3)、较差(4)、很差(5)                                       |
| 防晒指数               | 16     | 弱(1)、较弱(2)、中等(3)、强(4)、极强(5)                                           |
| 滑雪指数               | 17     | 非常适宜(1)、适宜(2)、不适宜(3)、非常不适宜(4)                                           |


## 景点天气预报

接口 | 接口代码（枚举） | 数据类
--------- | ------------- | -----------
景点实况天气 | INQUIRE_TYPE_WEATHER_POI_NOW | WeatherPoiBaseClass
景点7天预报 | INQUIRE_TYPE_WEATHER_POI_7D | WeatherPoiBaseClass

#### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

**location** {{ site.data.text.required }}

需要查询景点的LocationID，LocationID可通过[城市搜索](#城市查询)服务获取。例如： location=101010100

**appKey** {{ site.data.text.required }}

用户认证key，例如 `appKey=123456789ABC`

**lang** {{ site.data.text.optional }}

多语言设置，支持31种语言，**默认中文**。具体的语言参数值请参考[多语言参数值](/docs/start/language)。

**unit** {{ site.data.text.optional }}

[度量衡单位参数](/docs/start/unit)选择，例如温度选摄氏度或华氏度、公里或英里。**默认公制单位**。

| 语言 | 语言代码 | 常量属性    |
| ---- | -------- | ----------- |
| 公制 | m        | UNIT_TYPE_M |
| 英制 | i        | UNIT_TYPE_I |

#### 示例代码

```objc

    HeConfigInstance.publicID = @"publicID";
    HeConfigInstance.appKey = @"key";
    HeConfigInstance.appType = APP_TYPE_BIZ;    
    HeConfigInstance.location = @"10101010004A";
    HeConfigInstance.lang = @"";
    HeConfigInstance.unit = @"";
    [HeConfigInstance weatherWithInquireType:INQUIRE_TYPE_WEATHER_POI_NOW WithSuccess:^(WeatherPoiBaseClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```
#### 返回数据

| 参数              | 描述                                                                              | 示例值           |
| ----------------- | --------------------------------------------------------------------------------- | ---------------- |
| code          | 	状态码，具体含义请参考[状态码](/docs/start/status-code)                    | 200                                                                        |
| updateTime    | 	当前[数据最近更新时间](/docs/getting-started/glossary#updatetime)              | 2013-12-30T01:45+08:00                                                     |
| fxLink | 该城市的天气预报详情自适应网页，可嵌入网站或应用，**可能为空** | http://hfx.link/ae45 |
| now.obsTime       | 实况观测时间                                                                      | 2013-12-30T01:45+08:00 |
| now.temp           | 实况温度，默认单位：摄氏度                                                        | 21               |
| now.feelsLike            | 实况体感温度，默认单位：摄氏度                                                    | 23               |
| now.icon      | 当前天气状况和图标的代码，图标可通过[天气状况和图标](/docs/start/icons)下载   | 100              |
| now.text    | 实况天气状况的文字描述，包括阴晴雨雪等天气状态的描述                              | 晴               |
| now.windDir       | 实况风向                                                                          | 西北             |
| now.windScale        | 实况风力等级                                                                      | 3                |
| now.humidity           | 实况相对湿度，百分比数值                                                          | 40               |
| now.precip          | 实况降水量，默认单位：毫米                                                        | 1.2              |
| now.pressure          | 实况大气压强，默认单位：百帕                                                      | 1020             |
| daily.fxDate      | 预报日期                                                                          | 2018-05-31       |
| daily.tempMax      | 预报最高温度                                                                      | 4                |
| daily.tempMin      | 预报最低温度                                                                      | -5               |
| daily.iconDay   | 预报白天天气状况图标的代码，图标可通过[天气状况和图标](/docs/start/icons)下载 | 100              |
| daily.textDay | 预报白天天气状况描述                                                              | 晴               |
| daily.iconNight   | 预报夜间天气状况图标的代码，图标可通过[天气状况和图标](/docs/start/icons)下载 | 100              |
| daily.textNight | 晚间天气状况描述                                                                  | 晴               |
| daily.windDirDay    | 预报白天风向                                                                      | 东               |
| daily.windScaleDay     | 预报白天风力                                                                      | 2-3              |
| daily.windDirNight    | 预报夜间风向                                                                      | 东               |
| daily.windScaleNight     | 预报夜间风力                                                                      | 2-3              |
| refer.sources | 	原始数据来源，可能为空                             |                                                                            |
| refer.license | 使用许可，可能为空                                 |                                                                            |

## 历史天气

接口 | 接口代码（枚举） | 数据类
--------- | ------------- | -----------
历史天气 | INQUIRE_TYPE_HISTORICAL_WEATHER | WeatherHistoricalBaseClass
历史空气质量 | INQUIRE_TYPE_HISTORICAL_AIR | WeatherHistoricalBaseClass

#### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

**location** {{ site.data.text.required }}

需要查询地区的LocationID，LocationID可通过[城市搜索](#城市查询)服务获取。例如： location=101010100

**date** {{ site.data.text.required }}

选择获取历史的日期限度，最多可选择最近10天的数据，例如今天是7月5日，最多可获取6月25日至7月4日的历史数据。日期格式为yyyyMMdd，例如 `date=20200531`

**appKey** {{ site.data.text.required }}


用户认证key，例如 `appKey=123456789ABC`

**lang** {{ site.data.text.optional }}

多语言设置，支持31种语言，**默认中文**。具体的语言参数值请参考[多语言参数值](/docs/start/language)。

**unit** {{ site.data.text.optional }}

[度量衡单位参数](/docs/start/unit)选择，例如温度选摄氏度或华氏度、公里或英里。**默认公制单位**。

| 语言 | 语言代码 | 常量属性    |
| ---- | -------- | ----------- |
| 公制 | m        | UNIT_TYPE_M |
| 英制 | i        | UNIT_TYPE_I |

#### 示例代码

```objc

     //历史天气
    HeConfigInstance.publicID = @"publicID";
    HeConfigInstance.appKey = @"key";
    HeConfigInstance.appType = APP_TYPE_BIZ;    
    HeConfigInstance.location = @"101010100";
    HeConfigInstance.date = @"20200425";
    [HeConfigInstance weatherWithInquireType:INQUIRE_TYPE_HISTORICAL_WEATHER WithSuccess:^(WeatherHistoricalBaseClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
    //历史空气质量
      HeConfigInstance.publicID = @"publicID";
    HeConfigInstance.appKey = @"key";
    HeConfigInstance.appType = APP_TYPE_BIZ;    HeConfigInstance.location = @"101010100";
    HeConfigInstance.date = @"20200425";
    [HeConfigInstance weatherWithInquireType:INQUIRE_TYPE_HISTORICAL_AIR WithSuccess:^(WeatherHistoricalBaseClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```
#### 返回数据

| 参数       | 描述              | 示例值    |
| ---------- | ----------------- | --------- |
| code | 	状态码，具体含义请参考[状态码](/docs/start/status-code)| 200  |
| fxLink | 所查询城市的历史天气和历史空气质量网页，自适应PC和移动端，便于嵌入你的网站或应用。仅限中国城市返回。 | http://hfx.link/ae45 |
| weatherDaily.date   | 历史当天天气日期     | 2018-05-31 |
| weatherDaily.sunrise     | 当天日出时间 | 07:36      |
| weatherDaily.sunset     | 当天日落时间 | 16:58      |
| weatherDaily.moonrise     | 当天月升时间 | 04:47      |
| weatherDaily.moonset     | 当天月落时间 | 14:59      |
| weatherDaily.moonPhase     | 当天月相名称 | 上弦月      |
| weatherDaily.tempMax | 当天最高温度 | 4          |
| weatherDaily.tempMin | 当天最低温度 | -5         |
| weatherDaily.humidity    | 当天相对湿度 | 37         |
| weatherDaily.precip   | 当天降水量   | 0          |
| weatherDaily.pressure   | 当天大气压强 | 1018       |
| weatherHourly.time      | 历史当天天气时间 | 2013-12-30T01:45+08:00 |
| weatherHourly.temp       | 当天每小时温度                       | 2                |
| weatherHourly.icon | 当天每小时天气状况图标的代码，图标可通过[天气状况和图标](/docs/start/icons)下载              | 101              |
| weatherHourly.text  | 当天每小时天气状况代码               | 多云             |
| weatherHourly.precip      | 当天每小时累计降水量           | 1.2              |
| weatherHourly.windDir  | 当天每小时风向                       | 西北             |
| weatherHourly.windScale   | 当天每小时风力                       | 4                |
| weatherHourly.windSpeed  | 当天每小时风速，公里/小时            | 15               |
| weatherHourly.wind360  | 当天每小时风向360角度            | 305               |
| weatherHourly.humidity       | 当天每小时相对湿度                   | 30               |
| weatherHourly.pressure      | 当天每小时大气压强                   | 1030             |
| airHourly.pubTime | 历史当天空气质量数据发布时间,格式yyyy-MM-dd HH:mm | 2013-12-30T01:45+08:00 |
| airHourly.aqi     | 当天每小时空气质量指数                      | 74               |
| airHourly.primary    | 当天每小时主要污染物                        | pm2.5            |
| airHourly.level    | 当天每小时空气质量指数等级                          | 2               |
| airHourly.category    | 当天每小时空气质量指数级别                         | 良               |
| airHourly.pm10    | 当天每小时pm10                              | 78               |
| airHourly.pm2p5   | 当天每小时pm2.5                              | 66               |
| airHourly.no2     | 当天每小时二氧化氮                          | 40               |
| airHourly.so2     | 当天每小时二氧化硫                          | 30               |
| airHourly.co      | 当天每小时一氧化碳                          | 33               |
| airHourly.o3      | 当天每小时臭氧                              | 20               |
| refer.sources | 原始数据来源，可能为空                             |                                                                            |
| refer.license | 使用许可，可能为空                                |                                                                            |

## 太阳和月亮

接口 | 接口代码（枚举） | 数据类
--------- | ------------- | -----------
太阳和月亮 | INQUIRE_TYPE_SUNMOON | SunMoonBaseModel

#### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

**location** {{ site.data.text.required }}

需要查询地区的[LocationID](/docs/start/glossary#locationid)或以逗号分隔的[经度/纬度坐标](/docsgetting-started/glossary#coordinate)（十进制），LocationID可通过[城市搜索服务](/docs/api/geo)获取。例如：`location=101010100` 或 `location=116.41,39.92`

**date** {{ site.data.text.required }}

选择日期，最多可选择最近60天的数据。日期格式为yyyyMMdd，例如 date=20200531

**appKey** {{ site.data.text.required }}

用户认证key，例如 `appKey=123456789ABC`

**lang** {{ site.data.text.optional }}

多语言设置，支持31种语言，**默认中文**。具体的语言参数值请参考[多语言参数值](/docs/start/language)。

#### 示例代码

```objc
      HeConfigInstance.publicID = @"publicID";
    HeConfigInstance.appKey = @"key";
    HeConfigInstance.appType = APP_TYPE_BIZ;    
    HeConfigInstance.location = @"101010100";
    HeConfigInstance.date = @"20200425";
    [HeConfigInstance weatherWithInquireType:INQUIRE_TYPE_SUNMOON WithSuccess:^(SunMoonBaseModel  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
```
     
#### 返回数据

| 参数                   | 描述                                                               | 示例值                 |
| ---------------------- | ------------------------------------------------------------------ | ---------------------- |
| code                   | 状态码，具体含义请参考[状态码](/docs/start/status-code)         | 200                    |
| updateTime             | 当前[数据最近更新时间](/docs/getting-started/glossary#updatetime) | 2013-12-30T01:45+08:00 |
| fxLink                 | 该城市的天气预报详情自适应网页，可嵌入网站或应用               | http://hfx.link/ae45   |
| sunrise                | 日出时间                                                           | 2013-12-30T05:44+08:00 |
| sunset                 | 日落时间                                                           | 2013-12-30T17:02+08:00 |
| moonrise               | 月升时间                                                           | 2013-12-30T13:19+08:00 |
| moonset                | 月落时间                                                           | 2013-12-31T23:31+08:00 |
| moonPhase.fxTime       | 月相逐小时预报时间                                                 | 2013-12-31T23:31+08:00 |
| moonPhase.value        | 月相数值                                                           | 0.25                   |
| moonPhase.name         | 月相名字                                                           | 上弦月                 |
| moonPhase.illumination | 月亮照明度，百分比数值                                             | 30                   |
| refer.sources          | 原始数据来源，**可能为空**                                         |                        |
| refer.license          | 数据许可证                                                         |                        |

## 城市查询

接口 | 接口代码（枚举） | 数据类
--------- | ------------- | -----------
城市查询 | INQUIRE_TYPE_GEO_CITY_LOOKUP | GeoBaseClass

#### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

**location** {{ site.data.text.required }}

输入需要查询的城市名称，可使用Location ID、中文、英文、以逗号分隔的经度/纬度坐标、ADCode（仅限中国城市）。例如location=beijing， location=116.4,39.1

**mode** {{ site.data.text.optional }}

搜索查询的方式。在使用名称搜索的时候，可选择模糊搜索或精准搜索，精准搜索最多返回1个结果，模糊搜索最多返回10个结果。**默认精准搜索 mode = SERCHMODE_TYPE_EXACT
。**

类型 | SEARCH_TYPE | 
--------- | ------------- | 
SERCHMODE_TYPE_EXACT | 精准查询，默认
SERCHMODE_TYPE_FUZZY | 模糊查询

**appKey** {{ site.data.text.required }}

用户认证key，例如 `appKey=123456789ABC`

**lang** {{ site.data.text.optional }}

多语言设置，支持31种语言，**默认中文**。具体的语言参数值请参考[多语言参数值](/docs/start/language)。

**range** {{ site.data.text.optional }}

搜索范围，**默认搜索全球城市。** 可设定只在某个国家范围内进行搜索，国家名称需使用[ISO 3166 所定义的国家代码](https://www.heweather.com/blog/iso-3166)。

- `world` 全球城市范围，默认
- `cn` 中国城市范围，可替换为其他国家的 [ISO 3166 国家代码](https://www.heweather.com/blog/iso-3166)，例如`range=us`

**number** {{ site.data.text.optional }}

返回城市的数量，取值范围1-20，默认返回10个结果。

#### 示例代码

```objc 
    HeConfigInstance.publicID = @"publicID";
    HeConfigInstance.appKey = @"key";
    HeConfigInstance.appType = APP_TYPE_BIZ;    
    HeConfigInstance.location = @"beijing";
    [HeConfigInstance weatherWithInquireType:INQUIRE_TYPE_GEO_CITY_LOOKUP WithSuccess:^(GeoBaseClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
    
```

#### 返回参数和数值说明

| 参数         | 描述                                             | 示例                 |
| ------------ | ------------------------------------------------ | -------------------- |
| code       | 状态码，具体含义请参考[状态码](/docs/start/status-code)           | 200                  |
| location.name | 地区/城市名称                                    | 南山区               |
| location.cid   | 地区/城市ID                                      | 101280604            |
| location.lat          | 地区/城市纬度                                    | 22.53122             |
| location.lon          | 地区/城市经度                                    | 113.92942            |
| location.adm2         | 该地区/城市的上级行政区划名称                            | 深圳市               |
| location.adm1         | 该地区/城市所属一级行政区域                          | 广东省               |
| location.country         | 该地区/城市所属国家名称                          | 中国                 |
| location.tz           | 该地区/城市所在时区                              | +0800                |
| location.utcOffset          | 该地区/城市目前与UTC时间偏移的小时数，参考详细说明         | +08:00   |
| location.isDst           | 该地区/城市是否当前处于夏令时                               | 0                |
| location.type         | 该地区/城市的属性                                | city                 |
| location.rank         | 地区评分                                         | 10                   |
| location.fxLink       | 该地区的天气预报网页链接，便于嵌入你的网站或应用 | http://hfx.link/34T5 |
| refer.sources | 原始数据来源，可能为空                             |                                                                            |
| refer.license | 	使用许可，可能为空                                 |                                                                            |

## 热门城市查询

接口 | 接口代码（枚举） | 数据类
--------- | ------------- | -----------
热门城市查询 | INQUIRE_TYPE_GEO_TOPCITY | GeoBaseClass

#### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

**appKey** {{ site.data.text.required }}


用户认证key，例如 `appKey=123456789ABC`

**lang** {{ site.data.text.optional }}

多语言设置，支持31种语言，**默认中文**。具体的语言参数值请参考[多语言参数值](/docs/start/language)。

**range** {{ site.data.text.optional }}

搜索范围，**默认搜索全球城市。** 可设定只在某个国家范围内进行搜索，国家名称需使用[ISO 3166 所定义的国家代码](https://www.heweather.com/blog/iso-3166)。

- `world` 全球城市范围，默认
- `cn` 中国城市范围，可替换为其他国家的 [ISO 3166 国家代码](https://www.heweather.com/blog/iso-3166)，例如`range=us`

**number** {{ site.data.text.optional }}

返回城市的数量，取值范围1-20，默认返回10个结果。


#### 示例代码

```objc 

    HeConfigInstance.publicID = @"publicID";
    HeConfigInstance.appKey = @"key";
    HeConfigInstance.appType = APP_TYPE_BIZ;    
    HeConfigInstance.location = @"beijing";
    [HeConfigInstance weatherWithInquireType:INQUIRE_TYPE_GEO_TOPCITY WithSuccess:^(GeoBaseClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
    
```

#### 返回参数和数值说明

| 参数         | 描述                                             | 示例                 |
| ------------ | ------------------------------------------------ | -------------------- |
| code       | 状态码，具体含义请参考[状态码](/docs/start/status-code)           | 200                  |
| location.name | 地区/城市名称                                    | 南山区               |
| location.cid   | 地区/城市ID                                      | 101280604            |
| location.lat          | 地区/城市纬度                                    | 22.53122             |
| location.lon          | 地区/城市经度                                    | 113.92942            |
| location.adm2         | 该地区/城市的上级行政区划名称                            | 深圳市               |
| location.adm1         | 该地区/城市所属一级行政区域                          | 广东省               |
| location.country         | 该地区/城市所属国家名称                          | 中国                 |
| location.tz           | 该地区/城市所在时区                              | +0800                |
| location.utcOffset          | 该地区/城市目前与UTC时间偏移的小时数，参考详细说明         | +08:00   |
| location.isDst           | 该地区/城市是否当前处于夏令时                               | 0                |
| location.type         | 该地区/城市的属性                                | city                 |
| location.rank         | 地区评分                                         | 10                   |
| location.fxLink       | 该地区的天气预报网页链接，便于嵌入你的网站或应用 | http://hfx.link/34T5 |
| refer.sources | 原始数据来源，可能为空                             |                                                                            |
| refer.license | 	使用许可，可能为空                                 |                                                                            |


## POI信息搜索

接口 | 接口代码（枚举） | 数据类
--------- | ------------- | -----------
POI信息搜索 | INQUIRE_TYPE_GEO_POI_LOOKUP | GeoBaseClass

#### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

**location** {{ site.data.text.required }}

输入需要查询的POI名称，可使用中文、英文。最少一个汉字或2个英文字母，返回结果将按照相关性和Rank值进行排列。例如location=故宫

**appKey** {{ site.data.text.required }}

用户认证key，例如 `appKey=123456789ABC`

**type** {{ site.data.text.required }}

POI类型，可选择搜索某一类型的POI，目前仅限景点。例如type=scenic

**lang** {{ site.data.text.optional }}

多语言设置，支持31种语言，**默认中文**。具体的语言参数值请参考[多语言参数值](/docs/start/language)。

**city** {{ site.data.text.optional }}

选择POI所在城市，可设定只搜索在特定城市内的POI信息。城市名称可以是中文、英文或城市的LocationID。默认全世界范围。

城市名称需要精准匹配，建议使用LocaitonID，如城市名称无法识别，则数据返回为空。

**number** {{ site.data.text.optional }}

返回城市的数量，取值范围1-20，默认返回10个结果。


#### 示例代码

```objc 

    HeConfigInstance.publicID = @"publicID";
    HeConfigInstance.appKey = @"key";
    HeConfigInstance.appType = APP_TYPE_BIZ;    
    HeConfigInstance.location = @"beijing";
    [HeConfigInstance weatherWithInquireType:INQUIRE_TYPE_GEO_POI_LOOKUP WithSuccess:^(GeoBaseClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
    
```

#### 返回参数和数值说明

| 参数         | 描述                                             | 示例                 |
| ------------ | ------------------------------------------------ | -------------------- |
| code       | 状态码，具体含义请参考[状态码](/docs/start/status-code)           | 200                  |
| location.name | 地区/城市名称                                    | 南山区               |
| location.cid   | 地区/城市ID                                      | 101280604            |
| location.lat          | 地区/城市纬度                                    | 22.53122             |
| location.lon          | 地区/城市经度                                    | 113.92942            |
| location.adm2         | 该地区/城市的上级行政区划名称                            | 深圳市               |
| location.adm1         | 该地区/城市所属一级行政区域                          | 广东省               |
| location.country         | 该地区/城市所属国家名称                          | 中国                 |
| location.tz           | 该地区/城市所在时区                              | +0800                |
| location.utcOffset          | 该地区/城市目前与UTC时间偏移的小时数，参考详细说明         | +08:00   |
| location.isDst           | 该地区/城市是否当前处于夏令时                               | 0                |
| location.type         | 该地区/城市的属性                                | city                 |
| location.rank         | 地区评分                                         | 10                   |
| location.fxLink       | 该地区的天气预报网页链接，便于嵌入你的网站或应用 | http://hfx.link/34T5 |
| refer.sources | 原始数据来源，可能为空                             |                                                                            |
| refer.license | 	使用许可，可能为空                                 |                                                                            |


## POI范围搜索

接口 | 接口代码（枚举） | 数据类
--------- | ------------- | -----------
POI范围搜索 | INQUIRE_TYPE_GEO_POI_RANGE | GeoBaseClass

#### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

**location** {{ site.data.text.required }}

输入需要查询的POI坐标，坐标以逗号分隔的经度/纬度坐标。例如location=116.4,39.1

**appKey** {{ site.data.text.required }}

用户认证key，例如 `appKey=123456789ABC`

**radius** {{ site.data.text.optional }}

搜索范围，可设置搜索半径，取值范围1-50，单位：公里。默认5公里。

**lang** {{ site.data.text.optional }}

多语言设置，支持31种语言，**默认中文**。具体的语言参数值请参考[多语言参数值](/docs/start/language)。

**number** {{ site.data.text.optional }}

返回城市的数量，取值范围1-20，默认返回10个结果。

#### 示例代码

```objc 

    HeConfigInstance.publicID = @"publicID";
    HeConfigInstance.appKey = @"key";
    HeConfigInstance.appType = APP_TYPE_BIZ;    
    HeConfigInstance.location = @"116.4,39.1";
    [HeConfigInstance weatherWithInquireType:INQUIRE_TYPE_GEO_POI_RANGE WithSuccess:^(GeoBaseClass  *responseObject) {
        
        NSLog(@"描述->%@",[responseObject description]);
        
    } faileureForError:^(NSError *error) {
        NSLog(@"error->%@",error);
        
    }];
    
```

#### 返回参数和数值说明

| 参数         | 描述                                             | 示例                 |
| ------------ | ------------------------------------------------ | -------------------- |
| code       | 状态码，具体含义请参考[状态码](/docs/start/status-code)           | 200                  |
| location.name | 地区/城市名称                                    | 南山区               |
| location.cid   | 地区/城市ID                                      | 101280604            |
| location.lat          | 地区/城市纬度                                    | 22.53122             |
| location.lon          | 地区/城市经度                                    | 113.92942            |
| location.adm2         | 该地区/城市的上级行政区划名称                            | 深圳市               |
| location.adm1         | 该地区/城市所属一级行政区域                          | 广东省               |
| location.country         | 该地区/城市所属国家名称                          | 中国                 |
| location.tz           | 该地区/城市所在时区                              | +0800                |
| location.utcOffset          | 该地区/城市目前与UTC时间偏移的小时数，参考详细说明         | +08:00   |
| location.isDst           | 该地区/城市是否当前处于夏令时                               | 0                |
| location.type         | 该地区/城市的属性                                | city                 |
| location.rank         | 地区评分                                         | 10                   |
| location.fxLink       | 该地区的天气预报网页链接，便于嵌入你的网站或应用 | http://hfx.link/34T5 |
| refer.sources | 原始数据来源，可能为空                             |                                                                            |
| refer.license | 	使用许可，可能为空                                 |                                                                            |





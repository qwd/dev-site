---
title: 历史天气和空气质量
tag: android-sdk
version: v4
description: 使用和风天气Android SDK获取最近10天全国历史天气和历史空气质量数据。
ref: 7-sdk-android-historical
---

获取最近10天全国历史天气和历史空气质量数据。

## 历史天气

| 接口代码| 接口说明                  | 数据类             |
| ------------ | -------------------- | ------------------ |
| getWeatherHistorical| 历史天气数据  | HistoryWeatherBean |

### 接口参数说明

{% include params.html p="location-id-android date10back lang-sdk unit-sdk" %}

### 示例代码

```java
QWeather.getHistoricalWeather(Context context, String location, String date, QWeather.OnResultWeatherHistoricalBeanListener listener) ;

QWeather.getHistoricalWeather(Context context, String location, String date, Lang lang, Unit unit,QWeather.OnResultWeatherHistoricalBeanListener listener)
```

### HistoryWeatherBean属性

| 属性           | 说明                       | 示例值                 |
| -------------- | -------------------------- | ---------------------- |
| getCode        | 接口状态                   | [Status Code](/docs/start/status-code/) |
| getDailyBean   | 当天概况                   | DailyBean              |
| getHourlyBeans | 当天逐小时数据             | List&lt;HourlyBean&gt; |
| getRefer       | Refer 数据来源以及数据授权 | Refer                  |
| getBasic       | Basic 基础信息             | Basic                  |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | qweather.com      |
| getLicenseList | 使用许可     | commercial license |

**Basic**

| 属性          | 说明                     | 示例值               |
| ------------- | ------------------------ | -------------------- |
| getUpdateTime | 接口更新时间             | 2017-10-25T04:34+08:00     |
| getFxLink     | 所查询城市的天气预报网页 | http://hfx.link/ae45 |

**DailyBean 基础信息**

| 属性         | 说明     | 示例值     |
| ------------ | -------- | ---------- |
| getDate      | 预报日期 | 2013-12-30 |
| getSunrise   | 日出时间 | 07:36      |
| getSunset    | 日落时间 | 16:58      |
| getMoonRise  | 月升时间 | 04:47      |
| getMoonSet   | 月落时间 | 14:59      |
| getMoonPhase | 月相     | 满月       |
| getTempMax   | 最高温度 | 4          |
| getTempMin   | 最低温度 | -5         |
| getHumidity  | 相对湿度 | 37         |
| getPrecip    | 降水量   | 0          |
| getPressure  | 大气压强 | 1018       |

**HourlyBean 基础信息**

| 属性         | 说明                                   | 示例值           |
| ------------ | -------------------------------------- | ---------------- |
| getTime      | 历史当天天气时间 | 2013-12-30T13:00+08:00 |
| getTemp      | 温度                                   | 2                |
| getIcon      | 天气状况代码                           | 101              |
| getText      | 天气状况代码                           | 多云             |
| getWind360   | 风向360角度                            | 290              |
| getWindDir   | 风向                                   | 西北             |
| getWindScale | 风力                                   | 3-4              |
| getWindSpeed | 风速                                   | 15               |
| getHumidity  | 湿度                                   | 30               |
| getPressure  | 大气压强                               | 1030             |
| getPrecip    | 逐小时预报降水量，默认单位：毫米       | 1.2              |

## 历史空气质量

| 接口代码| 接口说明                  | 数据类            |
| ---------------- | ---------------- | ----------------- |
| getHistoricalAir| 历史空气质量数据  | HistoricalAirBean |

### 接口参数说明

{% include params.html p="location-id date10back lang-sdk" %}

### 示例代码

```java
QWeather.getHistoricalAir(Context context, String location, String date, QWeather.OnResultAirHistoricalBeanListener listener) ;

QWeather.getHistoricalAir(Context context, String location, String date, Lang lang, Unit unit,QWeather.OnResultAirHistoricalBeanListener listener)
```

### HistoricalAirBean属性

| 属性              | 说明                       | 示例值                    |
| ----------------- | -------------------------- | ------------------------- |
| getCode           | 接口状态                   | [Status Code](/docs/start/status-code/)    |
| getRefer          | Refer 数据来源以及数据授权 | Refer                     |
| getBasic          | Basic 基础信息             | Basic                     |
| getAirHourlyBeans | 当天逐小时空气质量数据     | List&lt;AirHourlyBean&gt; |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | qweather.com      |
| getLicenseList | 使用许可     | commercial license |

**Basic**

| 属性          | 说明                     | 示例值               |
| ------------- | ------------------------ | -------------------- |
| getUpdateTime | 接口更新时间             | 2017-10-25T04:34+08:00     |
| getFxLink     | 所查询城市的天气预报网页 | http://hfx.link/ae45 |

**AirHourlyBean 历史当天逐小时空气质量数据**

| 属性        | 说明                              | 示例值           |
| ----------- | --------------------------------- | ---------------- |
| getPubTime  | 数据发布时间 | 2017-03-20T12:30+08:00 |
| getAqi      | 空气质量指数，AQI和PM25的关系     | 74               |
| getPrimary  | 主要污染物                        | PM2.5             |
| getLevel    | 实时空气质量指数等级              | 2                |
| getCategory | 实时空气质量指数级别              | 良               |
| getPm10     | pm10                              | 78               |
| getPm2p5    | pm25                              | 66               |
| getNo2      | 二氧化氮                          | 40               |
| getSo2      | 二氧化硫                          | 30               |
| getCo       | 一氧化碳                          | 0.3               |
| getO3       | 臭氧                              | 20               |

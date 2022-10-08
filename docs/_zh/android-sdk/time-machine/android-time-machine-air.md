---
title: 历史空气质量
tag: [guide, android, time-machine, air]
ref: 2-sdk-android-historical-air
---

获取最近10天的中国空气质量历史再分析数据。

> 例如今天是12月30日，最多可获取12月20日至12月29日的空气质量历史数据。


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
| getCode           | 接口状态                   | [Status Code](/docs/resource/status-code/)    |
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

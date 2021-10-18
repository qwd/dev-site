---
title: 空气质量
tag: android-sdk
version: v4
description: 使用和风天气Android SDK获取实时空气质量和空气质量预报数据，支持中国3240市县区以及1700个国控站点实时空气质量的查询，包括AQI数值、空气质量等级、首要污染物、PM10、PM2.5、臭氧、二氧化氮、二氧化硫、一氧化碳数值。
toc: true
ref: 6-sdk-android-air
---

实时空气质量和空气质量预报数据，支持中国3240市县区以及1700个国控站点实时空气质量的查询，包括AQI数值、空气质量等级、首要污染物、PM10、PM2.5、臭氧、二氧化氮、二氧化硫、一氧化碳数值。

## 空气质量实况

| 接口代码| 接口说明           | 数据类     |
| ---------------- | --------- | ---------- |
| getAirNow| 空气质量实况数据  | AirNowBean |

### 接口参数说明

{% include params.html p="location-android lang-sdk" %}

### 示例代码

```java
QWeather.getAirNow(Context context, String location, Lang lang,
QWeather.OnResultAirNowListener listener)
```

### AirNowBean 属性

| 属性                 | 说明                       | 示例值                        |
| -------------------- | -------------------------- | ----------------------------- |
| getCode              | 接口状态                   | [Status Code](/docs/start/status-code/)     |
| getAirNowStationBean | AQI站点实况                | List&lt;AirNowStationBean&gt; |
| getNow               | AQI城市实况                | NowBean                       |
| getRefer             | Refer 数据来源以及数据授权 | Refer                         |
| getBasic             | Basic 基础信息             | Basic                         |

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

**NowBean AQI城市实况**

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

**AirNowStationBean AQI站点实况**

| 属性        | 说明                              | 示例值           |
| ----------- | --------------------------------- | ---------------- |
| getPubTime  | 数据发布时间 | 2017-03-20T12:30+08:00 |
| getName     | 站点名称                          | 万寿西宫         |
| getId       | 站点ID，请参考所有站点ID          | CNA1001          |
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

## 空气质量逐天预报

| 接口代码| 接口说明             | 数据类       |
| ------------------- | -------- | ------------ |
| getAir5D| 空气质量5天预报数据  | AirDailyBean |

### 接口参数说明

{% include params.html p="location-android lang-sdk" %}

### 示例代码

```java

/**
 * 空气质量5天预报数据
 */

QWeather.getAir5D(Context context, String location, Lang lang, QWeather.OnResultAirDailyListener listener)

```

### AirDailyBean 属性

| 属性        | 说明                       | 示例值                |
| ----------- | -------------------------- | --------------------- |
| getCode     | 接口状态                   | [Status Code](/docs/start/status-code/)   |
| getAirDaily | 空气质量 AQI 7天预报       | List&lt;DailyBean&gt; |
| getRefer    | Refer 数据来源以及数据授权 | Refer                 |
| getBasic    | Basic 基础信息             | Basic                 |

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

**DailyBean AQI城市逐天预报**

| 属性        | 说明                          | 示例值     |
| ----------- | ----------------------------- | ---------- |
| getFxDate   | 预报日期,格式yyyy-MM-dd       | 2017-08-09 |
| getAqi      | 空气质量指数，AQI和PM25的关系 | 74         |
| getPrimary  | 主要污染物                    | PM2.5       |
| getLevel    | 实时空气质量指数等级          | 2          |
| getCategory | 实时空气质量指数级别          | 良         |

## 空气质量指数等级

请查看[空气质量信息](/docs/resource/air-info/)。
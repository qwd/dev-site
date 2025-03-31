---
title: 实时空气质量
tag: [guide, android, air, now]
ref: 1-sdk-android-air-now
---

实时空气质量Android SDK，支持中国3000+市县区以及1700+国控站点实时空气质量的查询，包括AQI数值、空气质量等级、首要污染物、PM10、PM2.5、臭氧、二氧化氮、二氧化硫、一氧化碳数值。

> **注意：**[空气质量API v1（新版）](/docs/api/air-quality/)现已发布，请尝试使用并升级到新版本。

| 接口代码| 接口           | 数据类     |
| ---------------- | --------- | ---------- |
| airNow| 空气质量实况数据  | AirNowResponse |

## 参数

**AirParameter**

{% include params.html p="location-def lang-def" %}

## 示例代码

```java
public void airNow(AirParameter parameter, Callback<AirNowResponse> callback);
```

## 返回数据 

**AirNowResponse**

{% include api-response.html group="air" type="now station" prefix="now station"  %}

<!-- | 属性                 | 说明                       | 示例值                        |
| -------------------- | -------------------------- | ----------------------------- |
| getCode              | 参考[状态码](/docs/resource/status-code/)                    | 200    |
| getUpdateTime | 接口更新时间             | 2017-10-25T04:34+08:00     |
| getFxLink     | 所查询城市的天气预报网页 | https://www.qweather.com/air/beijing-101010100.html |
| getStation | AQI站点实况                | List&lt;AirStation&gt; |
| getNow               | AQI城市实况                | AirNow                       |
| getRefer             | Refer 数据来源以及数据授权 | Refer                         |

**Refer**

| 属性        | 说明        | 类型                | 示例值        |
| ---------- | ----------- | ------------------ | ------------ |
| getSources | 原始数据来源  | List&lt;String&gt; | QWeather     |
| getLicense | 使用许可     | List&lt;String&gt; | QWeather Developers License |

**AirNow**

| 属性        | 说明                              | 示例值           |
| ----------- | --------------------------------- | ---------------- |
| getPubTime  | 数据发布时间 | 2017-03-20T12:30+08:00 |
| getAqi      | 空气质量指数，AQI和PM25的关系     | 74               |
| getPrimary  | 主要污染物                        | PM2.5             |
| getLevel    | 实时空气质量指数等级              | 2                |
| getCategory | 实时空气质量指数级别              | 良               |
| getPm10     | pm10                              | 78               |
| getPm2p5    | pm2.5                              | 66               |
| getNo2      | 二氧化氮                          | 40               |
| getSo2      | 二氧化硫                          | 30               |
| getCo       | 一氧化碳                          | 0.3               |
| getO3       | 臭氧                              | 20               |

**AirStation**

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
 -->


### 空气质量指数等级

请查看[空气质量信息](/docs/resource/air-info/)。

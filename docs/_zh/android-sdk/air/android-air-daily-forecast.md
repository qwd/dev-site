---
title: 空气质量预报
tag: [guide, android, air, daily]
ref: 2-sdk-android-air-daily-forecast
---

空气质量每日预报Android SDK，支持全国3000+市县区空气质量预报数据的查询，包括AQI预报、首要污染物预报、空气质量等级预报。

| 接口代码| 接口说明             | 数据类       |
| ------------------- | -------- | ------------ |
| air5d| 空气质量5天预报数据  | AirDailyResponse |

### 接口参数说明

{% include params.html p="location-def lang-def" %}

### 示例代码

```java

/**
 * 空气质量5天预报数据
 */

public void air5d(AirParameter parameter, Callback<AirDailyResponse> callback);

```

### AirDailyResponse 属性

| 属性        | 说明                       | 示例值                |
| ----------- | -------------------------- | --------------------- |
| getCode     | 参考[状态码](/docs/resource/status-code/)                    | 200  |
| getUpdateTime | 接口更新时间             | 2017-10-25T04:34+08:00     |
| getFxLink     | 所查询城市的天气预报网页 | https://www.qweather.com/air/beijing-101010100.html |
| getDaily | 空气质量 AQI 5天预报       | List&lt;AirDaily&gt; |
| getRefer    | Refer 数据来源以及数据授权 | Refer                 |

**Refer**

| 属性        | 说明        | 类型                | 示例值        |
| ---------- | ----------- | ------------------ | ------------ |
| getSources | 原始数据来源  | List&lt;String&gt; | QWeather     |
| getLicense | 使用许可     | List&lt;String&gt; | QWeather Developers License |

**AirDaily AQI城市逐天预报**

| 属性        | 说明                          | 示例值     |
| ----------- | ----------------------------- | ---------- |
| getFxDate   | 预报日期,格式yyyy-MM-dd       | 2017-08-09 |
| getAqi      | 空气质量指数，AQI和PM25的关系 | 74         |
| getPrimary  | 主要污染物                    | PM2.5       |
| getLevel    | 实时空气质量指数等级          | 2          |
| getCategory | 实时空气质量指数级别          | 良         |

### 空气质量指数等级

请查看[空气质量信息](/docs/resource/air-info/)。

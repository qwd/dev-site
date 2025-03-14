<!--
 * @Date: 2025-03-06 10:02:06
 * @LastEditors: 韩笑白
 * @LastEditTime: 2025-03-13 18:31:17
 * @FilePath: /dev-site/docs/_en/android-sdk/air/android-air-daily-forecast.md
-->
---
title: Air Quality Daily Forecast
tag: [guide, android, air, daily]
ref: 2-sdk-android-air-daily-forecast
---

Air Quality Daily Forecast API for Chinese cities, including AQI, air quality levels, primary pollutants.

| Interface | Interface Code | Class |
| ------------------- | -------- | ------------ |
| air5d| Air quality 5-day forecast  | AirDailyBaseResponse |

### Parameter

{% include params.html p="location-def lang-def" %}

### Sample Code

```java
public void air5d(AirParameter parameter, Callback<AirDailyBaseResponse> callback);
```

### Properties

Properties of AirDailyBean

| Property | Description | Example |
| ----------- | -------------------------- | --------------- |
| getCode | See [Status Code](/en/docs/resource/status-code/) | 200 |
| getUpdateTime | [Last updated time](/en/docs/resource/glossary/#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | https://www.qweather.com/air/beijing-101010100.html |
| getDaily | Air quality 5-day forecast | List&lt;AirDaily&gt; |
| getRefer | Reference data, includes data source, statements and license | Refer |

**Refer**

| Property | Description  |  Type |  Example  |
| ---------- | ----------- | ------------------ | ------------ |
| getSources | Data source and other statements  | List&lt;String&gt; | QWeather     |
| getLicense | Data license      | List&lt;String&gt; | QWeather Developers License |

**AirDaily**

| Property | Description | Example |
| ----------- | ----------------------------- | -------- |
| getFxDate | Forecast date, format yyyy-MM-dd | 2017-08-09 |
| getAqi | Air quality index | 74 |
| getPrimary | The main pollutant. When the air quality category is `excellent`, return `NA` | PM2.5 |
| getLevel | Real-time air quality index level  | 2 |
| getCategory | Real-time air quality index category  | Good |

## Air Quality Index Level

See [Air Quality Info](/en/docs/resource/air-info/).

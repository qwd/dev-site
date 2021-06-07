---
title: Air Quality
tag: android-sdk
version: v4
description: QWeather Android SDK air quality supported all cities and 1700+ monitoring stations in China.
ref: 6-sdk-android-air
---

Air Quality real-time and daily forecast for Chinese cities and 1,700 monitoring stations, including AQI, air quality levels, primary pollutants, PM10, PM2.5, ozone, and nitrogen dioxide , sulfur dioxide, carbon monoxide values.

## Real-time Air Quality

| Interface Code| Interface  | Class |
| ---------------- | --------- | ---------- |
| getAirNow| Real-time Air Quality  | AirNowBean |

### Parameter

{% include params.html p="location-android lang-sdk" %}

### Sample Code

```java
QWeather.getAirNow(Context context, String location, Lang lang,
QWeather.OnResultAirNowListener listener)
```

### Properties

Properties of AirNowBean

| Property | Description | Example |
| -------------------- | -------------------------- |------------------- |
| getCode | Status code, please refer to [Status Code](/en/docs/start/status-code/) | Code |
| getAirNowStationBean | Real-time AQI for monitoring station | List&lt;AirNowStationBean&gt; |
| getNow | Real-time AQI for cities | NowBean |
| getRefer | Reference data, includes data source, statements and license | Refer |
| getBasic | Basic Information | Basic |

**Refer**

| Property | Description | Example |
| -------------- | ------------ | ------------------ |
| getSourcesList | Data source and other statements | qweather.com |
| getLicenseList | Data license | commercial license |

**Basic**

| Property | Description | Example |
| ------------- | ------------------------ | ------------- |
| getUpdateTime | [Last updated time](/en/docs/start/glossary#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | http://hfx.link/ae45 |

**NowBean**

| Property | Description | Example |
| ----------- | --------------------------------- | ------------- |
| getPubTime | The data release time from the data source. | 2017-03-20T12:30+08:00 |
| getAqi | Real-time air quality index | 74 |
| getPrimary | The main pollutant. When the air quality category is `excellent`, return `NA` | PM2.5 |
| getLevel | Real-time air quality index level  | 2 |
| getCategory | Real-time air quality index category  | Good |
| getPm10 | PM10 | 78 |
| getPm2p5 | PM25 | 66 |
| getNo2 | Nitrogen dioxide | 40 |
| getSo2 | Sulfur dioxide | 30 |
| getCo | Carbon monoxide | 0.3 |
| getO3 | Ozone | 20 |

**AirNowStationBean**

| Property | Description | Example |
| ----------- | --------------------------------- | ------------ |
| getPubTime | The data release time from the data source. | 2017-03-20T12:30+08:00 |
| getName | The name of the monitoring station | Longevity West Palace |
| getId | ID of the monitoring station | CNA1001 |
| getAqi | Real-time air quality index | 74 |
| getPrimary | The main pollutants per hour of the day. When the air quality category is `excellent`, return `NA` | PM2.5 |
| getLevel | Real-time air quality index level  | 2 |
| getCategory | Real-time air quality index category  | Good |
| getPm10 | PM10 | 78 |
| getPm2p5 | PM2.5 | 66 |
| getNo2 | Nitrogen dioxide | 40 |
| getSo2 | Sulfur dioxide | 30 |
| getCo | Carbon monoxide | 0.3 |
| getO3 | Ozone | 20 |

## Air quality daily forecast

| Interface | Interface Code | Class |
| ------------------- | -------- | ------------ |
| getAir5D| Air quality 5-day forecast  | AirDailyBean |

### Parameter

{% include params.html p="location-android lang-sdk" %}

### Sample Code

```java
QWeather.getAir5D(Context context, String location, Lang lang, QWeather.OnResultAirDailyListener listener)
```

### Properties

Properties of AirDailyBean

| Property | Description | Example |
| ----------- | -------------------------- | --------------- |
| getCode | Status code, please refer to [Status Code](/en/docs/start/status-code/) | Code |
| getAirDaily | Air quality 5-day forecast | List&lt;DailyBean&gt; |
| getRefer | Reference data, includes data source, statements and license | Refer |
| getBasic | Basic Information | Basic |

**Refer**

| Property | Description | Example |
| -------------- | ------------ | ------------------ |
| getSourcesList | Data source and other statements | qweather.com |
| getLicenseList | Data license | commercial license |

**Basic**

| Property | Description | Example |
| ------------- | ------------------------ | -------------- |
| getUpdateTime | [Last updated time](/en/docs/start/glossary#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | http://hfx.link/ae45 |

**DailyBean**

| Property | Description | Example |
| ----------- | ----------------------------- | -------- |
| getFxDate | Forecast date, format yyyy-MM-dd | 2017-08-09 |
| getAqi | Air quality index | 74 |
| getPrimary | The main pollutant. When the air quality category is `excellent`, return `NA` | PM2.5 |
| getLevel | Real-time air quality index level  | 2 |
| getCategory | Real-time air quality index category  | Good |

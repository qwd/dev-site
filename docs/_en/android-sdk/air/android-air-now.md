---
title: Real-time Air Quality
tag: [guide, android, air, now]
ref: 1-sdk-android-air-now
---

Real-time air quality for Chinese cities and 1,700 monitoring stations, including AQI, air quality levels, primary pollutants, PM10, PM2.5, ozone, nitrogen dioxide sulfur dioxide and carbon monoxide values.

> **Note:** [Air Quality API v1 (new)](/en/docs/api/air-quality/) is now available, please try to use and upgrade.

| Interface code| Interface  | Class |
| ---------------- | --------- | ---------- |
| airNow| Real-time Air Quality  | AirNowResponse |

## Request Parameters

**AirParameter**

{% include params.html p="location-def lang-def" %}

## Sample Code

```java
public void airNow(AirParameter parameter, Callback<AirNowResponse> callback);
```

## Response

**AirNowResponse**

{% include api-response.html group="air" type="now station" prefix="now station" %}

<!-- | Property | Description | Example |
| -------------------- | -------------------------- |------------------- |
| getCode | See [Status Code](/en/docs/resource/status-code/) | 200 |
| getUpdateTime | [Last updated time](/en/docs/resource/glossary/#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | https://www.qweather.com/air/beijing-101010100.html |
| getStation | Real-time AQI for monitoring station | List&lt;AirStation&gt; |
| getNow | Real-time AQI for cities | AirNow |
| getRefer | Reference data, includes data source, statements and license | Refer |

**Refer**

| Property | Description  |  Type |  Example  |
| ---------- | ----------- | ------------------ | ------------ |
| getSources | Data source and other statements  | List&lt;String&gt; | QWeather     |
| getLicense | Data license      | List&lt;String&gt; | QWeather Developers License |

**AirNow**

| Property | Description | Example |
| ----------- | --------------------------------- | ------------- |
| getPubTime | The data release time from the data source. | 2017-03-20T12:30+08:00 |
| getAqi | Real-time air quality index | 74 |
| getPrimary | The main pollutant. When the air quality category is `excellent`, return `NA` | PM2.5 |
| getLevel | Real-time air quality index level  | 2 |
| getCategory | Real-time air quality index category  | Good |
| getPm10 | PM10 | 78 |
| getPm2p5 | PM2.5 | 66 |
| getNo2 | Nitrogen dioxide | 40 |
| getSo2 | Sulfur dioxide | 30 |
| getCo | Carbon monoxide | 0.3 |
| getO3 | Ozone | 20 |

**AirStation**

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
| getO3 | Ozone | 20 | -->

## Air Quality Index Level

See [Air Quality Info](/en/docs/resource/air-info/).

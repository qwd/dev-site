---
title: Time Machine for Air Quality
tag: [guide, android, time-machine, air]
ref: 2-sdk-android-historical-air
---

Get the last 10 days of air quality history data.

> Let's say, today is December 30, you can get data from Dec. 20 to Dec. 29.


| Interface code| Interface  | Class |
| ---------------- | ---------------- | ---------------- |
| historicalAir| Historical air quality data  | HistoricalAirResponse |

## Request Parameters

**HistoricalAirParameter**

{% include params.html p="location-id date10back lang-def" %}

## Sample Code

```java
public void historicalAir(HistoricalAirParameter parameter, Callback<HistoricalAirResponse> callback);
```

## Response

**HistoricalAirResponse**

{% include api-response.html group="air" type="now" prefix="airHourly" update=0 %}

<!-- | Property | Description | Example |
| ----------------- | -------------------------- | ------------------------- |
| getCode | See [Status Code](/en/docs/resource/status-code/) | 200 |
| getUpdateTime | [Last updated time](/en/docs/resource/glossary/#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | https://www.qweather.com/historical/beijing-101010100.html |
| getAirHourly | Hourly air quality data for the day | List&lt;HistoricalAirHourly&gt; |
| getRefer | Reference data, includes data source, statements and license | Refer |

**Refer**

| Property | Description  |  Type |  Example  |
| ---------- | ----------- | ------------------ | ------------ |
| getSources | Data source and other statements  | List&lt;String&gt; | QWeather     |
| getLicense | Data license      | List&lt;String&gt; | QWeather Developers License |


**HistoricalAirHourly**

| Property | Description | Example |
| ----------- | --------------------------------- | --------------- |
| getPubTime | The data release time from the data source. | 2017-03-20T12:30+08:00 |
| getAqi | Air quality index | 74 |
| getPrimary | The main pollutants per hour of the day. When the air quality category is `excellent`, return `NA` | pm25 |
| getLevel | Air quality index level  | 2 |
| getCategory | Air quality index category  | Good |
| getPm10 | PM10 | 78 |
| getPm2p5 | PM2.5 | 66 |
| getNo2 | Nitrogen dioxide | 40 |
| getSo2 | Sulfur dioxide | 30 |
| getCo | Carbon monoxide | 0.3 |
| getO3 | Ozone | 20 | -->

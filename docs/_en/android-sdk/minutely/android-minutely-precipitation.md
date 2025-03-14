<!--
 * @Date: 2025-03-06 10:02:06
 * @LastEditors: 韩笑白
 * @LastEditTime: 2025-03-13 15:55:56
 * @FilePath: /dev-site/docs/_en/android-sdk/minutely/android-minutely-precipitation.md
-->
---
title: Minutely Precipitation
tag: [guide, android, minutely, precip]
ref: 1-sdk-android-minutely-precip
---

Get minute-level precipitation forecast data every 5 minutes for the next 2 hours in China.

> This data is only supported for Chinese cities.

| Interface Code| Interface  | Class |
| ---------- | ----------- | ------------ |
| minutely | Minutely Precipitation  | MinutelyBaseResponse |

### Parameter

{% include params.html p="location-coord lang-def" %}

### Sample Code

```java
public void minutely(MinutelyParameter parameter, Callback<MinutelyBaseResponse> callback);
```

### Properties

Properties of MinutelyBaseResponse

| Property | Description | Example |
| --------------- | -------------- | -------------- |
| getCode | See [Status Code](/en/docs/resource/status-code/) | 200 |
| getUpdateTime | [Last updated time](/en/docs/resource/glossary/#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | https://www.qweather.com |
| getSummary | Precipitation description | No precipitation in the next 2 hours |
| getMinutely | Minutely data | List&lt;Minutely&gt; |
| getRefer | Reference data, includes data source, statements and license | Refer |

**Refer**

| Property | Description  |  Type |  Example  |
| ---------- | ----------- | ----------- | ------------ |
| getSources | Data source and other statements  | List&lt;String&gt; | QWeather    |
| getLicense | Data license      | List&lt;String&gt; | QWeather Developers License |

**Minutely precipitation in the next two hours and 5 minutes**

| Property | Description | Example |
| --------- | ---------------- | ---------------- |
| getFxTime | Forecast time | 2013-12-30T20:35+08:00 |
| getPrecip | Accumulated precipitation in 5 minutes, unit is millimeter | 10 |
| getType | Type of precipitation <br />`rain`<br />`snow` | rain |

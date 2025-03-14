<!--
 * @Date: 2025-03-06 10:02:06
 * @LastEditors: 韩笑白
 * @LastEditTime: 2025-03-13 17:52:45
 * @FilePath: /dev-site/docs/_en/android-sdk/astronomy/android-sunrise-sunset.md
-->
---
title: Sunrise and Sunset
tag: [guide, android, astronomy, sun]
ref: 1-sdk-android-sun
---

Get the sunrise and sunset times for any location around the world for the next 60 days.

| Interface Code| Interface  | Class |
| -------------- | ---------- | ----------- |
| astronomySun | Sunrise and sunset data  | AstronomySunBaseResponse |

### Parameter

{% include params.html p="location-def date60" %}

### Sample Code

```java
public void astronomySun(AstronomySunParameter parameter, Callback<AstronomySunBaseResponse> callback);
```

### Properties

Properties of AstronomySunBaseResponse

| Property | Description | Example |
| -------------------- | -------------------------- |- ------------------------ |
| getCode | See [Status Code](/en/docs/resource/status-code/) | 200 |
| getUpdateTime | [Last updated time](/en/docs/resource/glossary/#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | https://www.qweather.com/weather/beijing-101010100.html |
| getSunrise | [Sunrise time](/en/docs/resource/sun-moon-info/#sunrise-and-sunset). **Maybe null in high latitude area** | 2017-10-25T06:01+08:00 |
| getSunset | [Sunset time](/en/docs/resource/sun-moon-info/#sunrise-and-sunset). **Maybe null in high latitude area** | 2017-10-25T18:01+08:00 |
| getRefer | Reference data, includes data source, statements and license | Refer |

**Refer**

| Property | Description  |  Type |  Example  |
| ---------- | ----------- | ------------------ | ------------ |
| getSources | Data source and other statements  | List&lt;String&gt; | QWeather   |
| getLicense | Data license     | List&lt;String&gt; | QWeather Developers License |

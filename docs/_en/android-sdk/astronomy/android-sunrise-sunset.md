---
title: Sunrise and Sunset
tag: [guide, android, astronomy, sun]
ref: 1-sdk-android-sun
---

Get the sunrise and sunset times for any location around the world for the next 60 days.

| Interface Code| Interface  | Class |
| -------------- | ---------- | ----------- |
| getSun| Sunrise and sunset data  | SunBean |

### Parameter

{% include params.html p="location-android date60" %}

### Sample Code

```java
QWeather.getSun(Context context, String location, String date, final OnResultSunListener listener) ;

QWeather.getSun(Context context, String location, Lang lang, String date, final OnResultSunListener listener) 
```

### Properties

Properties of SunBean

| Property | Description | Example |
| -------------------- | -------------------------- |- ------------------------ |
| getCode | Status code, please refer to [Status Code](/en/docs/resource/status-code/) | Code |
| getRefer | Reference data, includes data source, statements and license | Refer |
| getSunrise | [Sunrise time](/en/docs/resource/sun-moon-info/#sunrise-and-sunset). **Maybe null in high latitude area** | 2017-10-25T06:01+08:00 |
| getSunset | [Sunset time](/en/docs/resource/sun-moon-info/#sunrise-and-sunset). **Maybe null in high latitude area** | 2017-10-25T18:01+08:00 |

**Refer**

| Property | Description | Example |
| -------------- | ------------ | ------------------ |
| getSourcesList | Data source and other statements | qweather.com |
| getLicenseList | Data license | commercial license |

**Basic**

| Property | Description | Example |
| ------------- | ------------------------ | ---------- ---------- |
| getUpdateTime | [Last updated time](/en/docs/resource/glossary/#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | http://hfx.link/ae45 |

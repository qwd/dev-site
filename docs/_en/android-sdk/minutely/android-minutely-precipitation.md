---
title: Minutely Precipitation
tag: [guide, android, minutely, precip]
ref: 1-sdk-android-minutely-precip
---

Get minute-level precipitation forecast data every 5 minutes for the next 2 hours in China.

> This data is only supported for Chinese cities.

| Interface Code| Interface  | Class |
| ---------- | ----------- | ------------ |
| getMinutely| Minutely Precipitation  | MinutelyBean |

### Parameter

{% include params.html p="location-coord lang-zhen-sdk" %}

### Sample Code

```java
QWeather.getMinutely(Context context, String location, QWeather.OnResultMinutelyListener listener);

QWeather.getMinutely(Context context, String location, Lang lang, QWeather.OnResultMinutelyListener listener);
```

### Properties

Properties of GridMinutelyBean

| Property | Description | Example |
| --------------- | -------------------------- | ------ -------------- |
| getCode | See [Status Code](/en/docs/resource/status-code/) | 200 |
| getSummary | Precipitation description | No precipitation in the next 2 hours |
| getMinutelyList | Minutely data | List&lt;Minutely&gt; |
| getRefer | Reference data, includes data source, statements and license | Refer |
| getBasic | Basic Information | Basic |

**Refer**

| Property | Description | Example |
| -------------- | ------------ | ------------------ |
| getSourcesList | Data source and other statements | QWeather |
| getLicenseList | Data license | QWeather Developers License |

**Basic**

| Property | Description | Example |
| ------------- | ------------------------ | ---------- ---------- |
| getUpdateTime | [Last updated time](/en/docs/resource/glossary/#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | https://www.qweather.com |

**Minutely precipitation in the next two hours and 5 minutes**

| Property | Description | Example |
| --------- | -------------------------- | ------------ ---- |
| getFxTime | Forecast time | 2013-12-30T20:35+08:00 |
| getPrecip | Accumulated precipitation in 5 minutes, unit is millimeter | 10 |
| getType | Type of precipitation <br />`rain`<br />`snow` | rain |

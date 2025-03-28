---
title: Minutely Precipitation
tag: [guide, android, minutely, precip]
ref: 1-sdk-android-minutely-precip
---

Get minute-level precipitation forecast data every 5 minutes for the next 2 hours in China.

> This data is only supported for Chinese cities.

| Interface code| Interface  | Class |
| ---------- | ----------- | ------------ |
| minutely | Minutely Precipitation  | MinutelyResponse |

### Reequest Parameters

| Name  | Type | Required | Exemple |
| -------- | -------- | ---- | ------ |
| longitude | double | true | 116.41 |
| latitude | double | true | 39.92 |
| lang | Lang | false | ZH_HANS |

## Sample Code

```java
public void minutely(MinutelyParameter parameter, Callback<MinutelyResponse> callback);
```

## Response

**MinutelyResponse**

{% include api-response.html group="minutely" prefix="nil"  %}

<!-- | Property | Description | Example |
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

**Minutely**

| Property | Description | Example |
| --------- | ---------------- | ---------------- |
| getFxTime | Forecast time | 2013-12-30T20:35+08:00 |
| getPrecip | Accumulated precipitation in 5 minutes, unit is millimeter | 10 |
| getType | Type of precipitation <br />`rain`<br />`snow` | rain | -->

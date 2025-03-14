<!--
 * @Date: 2025-03-06 10:02:06
 * @LastEditors: 韩笑白
 * @LastEditTime: 2025-03-13 14:28:56
 * @FilePath: /dev-site/docs/_en/android-sdk/tropical-cyclone/android-storm-forecast.md
-->
---
title: Storm Forecast
tag: [guide, android, storm, forecast]
ref: 3-sdk-android-storm-forecast
---

Storm Forecast provides tropical cyclones information for a specific tropical cyclone, the data including forecast tropical cyclones location, level, pressure, wind and etc.

> **Note:** For inactive storms, the returned data is **NULL**, please get the storms status by [Storm List](/en/docs/android-sdk/tropical-cyclone/android-storm-list/) first.


| Interface Code| Interface          | Class  |
| -------- | ---------------- | ------- |
| tropicalStormForecast | Storm forecast data  | StormForecastBaseResponse |

### Parameter

{% include params.html p="stormid-sdk" %}

### Sample Code

```java
public void tropicalStormForecast(StormParameter parameter, Callback<StormForecastBaseResponse> callback)
```

### Properties

Properties of StormForecastBaseResponse

| Property            | Description     | Example                    |
| --------------- | -------- | ---------------------- |
| getCode         | Status code, please refer to [Status Code](/en/docs/resource/status-code/) | [Status Code](/docs/resource/status-code/)        |
| getUpdateTime | [Last updated time](/en/docs/resource/glossary/#update-time)  | 2017-10-25T04:34+08:00      |
| getFxLink |Responsive web page of this data, for embedded in website or APP  | https://www.qweather.com |
| getForecast | Storm forecast data | List&lt;StormForecast&gt; |
| getRefer         | Reference data, includes data source, statements and license | Refer  |

**Refer**

| Property | Description  |  Type |  Example  |
| ---------- | ----------- | ------------------ | ------------ |
| getSources | Data source and other statements  | List&lt;String&gt; | QWeather     |
| getLicense | Data license      | List&lt;String&gt; | QWeather Developers License |

**StormForecast**

| Property         | Description                                                                    | Example               |
| ------------ | ----------------------------------------------------- | -------------------- |
| getFxTime      | Storm forecast time                                 | 2020-10-29T20:00+08:00 |
| getLat        | Storm latitude        | 22.5          |
| getLon       | Storm longitude                           |    148.5    |
| getType       | Storm type                        |    TS    |
| getPressure  | Center pressure of the storm                        |  1000 |
| getWindSpeed       | Maximum wind speed near the strom                       |  18    |
| getMoveSpeed       | Storm moving speed                   |   27   |
| getMoveDir       | Storm moving direction                      |    SW    |
| getMove360       | Storm movement direction in azimuth degree          |    332    |

### Typhoon level

GBT 19201-2006

| Tropical cyclone level | Maximum average wind speed near the bottom center (m/s) | Maximum wind near the bottom center (level) |
| ------------------- | ----------------------------- | ------------------------ |
| Tropical pressure (TD) | 10.8-17.1 | 6-7 |
| Tropical Storm (TS) | 17.2-24.4 | 8-9 |
| Severe Tropical Storm (STS) | 24.5-32.6 | 10-11 |
| Typhoon (TY) | 32.7-41.4 | 12-13 |
| Severe Typhoon (STY) | 41.5-50.9 | 14-15 |
| Super Typhoon (SuperTY) | ≥51.0 | 16 or above |

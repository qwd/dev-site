<!--
 * @Date: 2025-03-06 10:02:06
 * @LastEditors: 韩笑白
 * @LastEditTime: 2025-03-13 14:28:31
 * @FilePath: /dev-site/docs/_en/android-sdk/ocean/android-currents.md
-->
---
title: Currents
tag: [guide, android, ocean, currents]
ref: 2-sdk-android-currents
---

Currents data for the next 10 days, including currents speed, direction and hourly forecast.

| Interface Code| Interface          | Class  |
| -------- | ---------------- | ------- |
| oceanCurrents| Currents data  | OceanCurrentsBaseResponse |

### Parameter

{% include params.html p="location-p6 date10" %}

### Sample Code

```java
public void oceanCurrents(OceanParameter parameter, Callback<OceanCurrentsBaseResponse> callback)
```

### Properties

Properties of OceanCurrentsBaseResponse

| Property            | Description     | Example                    |
| --------------- | -------- | ---------------------- |
| getCode         | Status code, please refer to [Status Code](/en/docs/resource/status-code/) | [Status Code](/docs/resource/status-code/)         |
| getUpdateTime | [Last updated time](/en/docs/resource/glossary/#update-time)  | 2017-10-25T04:34+08:00      |
| getFxLink |Responsive web page of this data, for embedded in website or APP  | https://www.qweather.com |
| getCurrentHourly | Hourly currents data | List\<CurrentsHourly> |
| getCurrentsTable | Currents table | List\<CurrentsTable> |
| getRefer         | Reference data, includes data source, statements and license | Refer  |

**Refer**

| Property | Description  |  Type |  Example  |
| ---------- | ----------- | ------------------ | ------------ |
| getSources | Data source and other statements  | List&lt;String&gt; | QWeather     |
| getLicense | Data license      | List&lt;String&gt; | QWeather Developers License |

**CurrentsTable**

| Property         | Description                                                                    | Example               |
| ------------ | ----------------------------------------------------- | -------------------- |
| getFxTime      | Maximum speed time                                 | 2017-10-25T04:34+08:00|
| getSpeedMax        | Maximum speed, cm/sec              | 1.23            |
| getDir360       | Currents direction in azimuth degree                              |    212    |

**CurrentsHourly**

| Property         | Description                                                                    | Example               |
| ------------ | ----------------------------------------------------- | -------------------- |
| getFxTime      | Hourly forecast time                                 | 2017-10-25T04:34+08:00|
| getSpeed        | Currents speed, cm/sec              | 1.23            |
| getDir360       | Currents direction in azimuth degree                              |    212    |



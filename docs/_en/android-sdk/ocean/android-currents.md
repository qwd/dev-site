---
title: Currents
tag: [guide, android, ocean, currents]
ref: 2-sdk-android-currents
---

Currents data for the next 10 days, including currents speed, direction and hourly forecast.

| Interface Code| Interface          | Class  |
| -------- | ---------------- | ------- |
| getOceanCurrents| Currents data  | CurrentsBean |

### Parameter

{% include params.html p="location-p6 date10" %}

### Sample Code

```java
QWeather.getOceanCurrents(Context context, String location, String date, OnResultOceanTideListener listener);
```

### Properties

Properties of CurrentsBean

| Property            | Description     | Example                    |
| --------------- | -------- | ---------------------- |
| getCode         | Status code, please refer to [Status Code](/en/docs/resource/status-code/) | [Status Code](/docs/resource/status-code/)         |
| getBasic         | Basic Informatio | Basic       |
| getRefer         | Reference data, includes data source, statements and license | Refer  |
| getHourlyList | Hourly currents data | List\<CurrentsHourlyBase> |
| getTableList | Currents table | List\<CurrentsTableBase> |

**Basic**

| Property           | Description         | Example             |
| -------------- | ------------ | ------------------ |
| getUpdateTime | [Last updated time](/en/docs/resource/glossary/#update-time)  | 2017-10-25T04:34+08:00      |
| getFxLink |Responsive web page of this data, for embedded in website or APP  | http://hfx.link/1 |

**Refer**

| Property           | Description         | Example             |
| -------------- | ------------ | ------------------ |
| getSourcesList | Data source and other statements | qweather.com      |
| getLicenseList | Data license     | commercial license |


**CurrentsTableBase**

| Property         | Description                                                                    | Example               |
| ------------ | ----------------------------------------------------- | -------------------- |
| getFxTime      | Maximum speed time                                 | 2017-10-25T04:34+08:00|
| getSpeedMax        | Maximum speed, cm/sec              | 1.23            |
| getDir360       | Currents direction in azimuth degree                              |    212    |

**CurrentsHourlyBase**

| Property         | Description                                                                    | Example               |
| ------------ | ----------------------------------------------------- | -------------------- |
| getFxTime      | Hourly forecast time                                 | 2017-10-25T04:34+08:00|
| getSpeed        | Currents speed, cm/sec              | 1.23            |
| getDir360       | Currents direction in azimuth degree                              |    212    |



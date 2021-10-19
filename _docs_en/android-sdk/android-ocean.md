---
title: Tide and Currents
tag: android-sdk
version: v4
description: The ocean SDK includes Tide and Currents data in more than 10,000 ports or locations around the world.
toc: true
ref: 9-sdk-android-ocean
---

The ocean SDK includes Tide and Currents data in more than 10,000 ports or locations around the world.

## Tide

Global tide table and forecast data for the next 10 days.

| Interface Code| Interface          | Class  |
| -------- | ---------------- | ------- |
| getOceanTide| Tide data  | TideBean |

### Parameter

{% include params.html p="location-p2 date10" %}

### Sample Code

```java
QWeather.getOceanTide(Context context, String location, String date, OnResultOceanTideListener listener);
```

### Properties

Properties of TideBean

| Property            | Description     | Example                    |
| --------------- | -------- | ---------------------- |
| getCode         | Status code, please refer to [Status Code](/en/docs/resource/status-code/) | [Status Code](/docs/resource/status-code/)        |
| getBasic         | Basic Informatio | Basic       |
| getRefer         | Reference data, includes data source, statements and license | Refer  |
| getTideHourlyList | Hourly data | List\<TideHourlyBase> |
| getTideTable | Tide table | List\<TideTableBase> |

**Basic**

| Property           | Description         | Example             |
| -------------- | ------------ | ------------------ |
| getUpdateTime | [Last updated time](/en/docs/resource/glossary#update-time)  | 2017-10-25T04:34+08:00      |
| getFxLink |Responsive web page of this data, for embedded in website or APP  | http://hfx.link/1 |

**Refer**

| Property           | Description         | Example             |
| -------------- | ------------ | ------------------ |
| getSourcesList | Data source and other statements | QWeather      |
| getLicenseList | Data license     | commercial license |


**TideTableBase**

| Property         | Description                                                                    | Example               |
| ------------ | ----------------------------------------------------- | -------------------- |
| getFxTime      | High tide or Low tide time                                 | 2017-10-25T04:34+08:00|
| getHeight        | The height of the wave, in meters                                       | 1.23            |
| getType       | High tide (H) or Low tide (L)                              |    H    |

**TideHourlyBase**

| Property         | Description                                                                    | Example               |
| ------------ | ----------------------------------------------------- | -------------------- |
| getFxTime      | Hourly forecast time                                 | 2017-10-25T04:34+08:00|
| getHeight        | The height of the wave, in meters                                     | 1.23            |


## Currents

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
| getUpdateTime | [Last updated time](/en/docs/resource/glossary#update-time)  | 2017-10-25T04:34+08:00      |
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



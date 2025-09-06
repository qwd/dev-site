---
title: Currents (Deprecated)
tag: [guide, android, ocean, currents]
deprecated: true
ref: 2-sdk-android-currents
---

Global currents data for the next 10 days, including currents speed and direction.

> **Note:** The Currents API is deprecated and is expected to be out of service on 2025-11-01.
{:.bqdanger}

| Interface code| Interface          | Class  |
| -------- | ---------------- | ------- |
| oceanCurrents| Currents data  | OceanCurrentsResponse |

## Parameters

**OceanParameter**

{% include params.html p="location-p6 date10" %}

## Sample code

```java
public void oceanCurrents(OceanParameter parameter, Callback<OceanCurrentsResponse> callback)
```

## Response

**OceanCurrentsResponse**

{% include api-response.html group="ocean" type="ctable chourly" prefix="currentsTable currentsHourly" %}

<!-- | Property            | Description     | Example                    |
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
| getDir360       | Currents direction in azimuth degree                              |    212    | -->



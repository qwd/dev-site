---
title: Tide
tag: [guide, android, ocean, tide]
ref: 1-sdk-android-tide
---

Global tidal data for the next 10 days, including tide table and hourly tide forecast data.

| Interface code | Interface        | Class   |
| -------------- | ---------------- | ------- |
| oceanTide | Tide data  | OceanTideResponse |

## Request Parameters

**OceanParameter**

{% include params.html p="location-p2 date10" %}

## Sample Code

```java
public void oceanTide(OceanParameter parameter, Callback<OceanTideResponse> callback)
```

## Response

**OceanTideResponse**

{% include api-response.html group="ocean" type="ttable thourly" prefix="tideTable tideHourly" %}

<!-- | Property        | Description     | Example                    |
| --------------- | -------- | ---------------------- |
| getCode         | Status code, please refer to [Status Code](/en/docs/resource/status-code/) | [Status Code](/docs/resource/status-code/)        |
| getUpdateTime | [Last updated time](/en/docs/resource/glossary/#update-time)  | 2017-10-25T04:34+08:00      |
| getFxLink |Responsive web page of this data, for embedded in website or APP  | https://www.qweather.com |
| getTideHourly | Hourly data | List\<TideHourly> |
| getTideTable | Tide table | List\<TideTable> |
| getRefer         | Reference data, includes data source, statements and license | Refer  |

**Refer**

| Property | Description  |  Type |  Example  |
| ---------- | ----------- | ------------------ | ------------ |
| getSources | Data source and other statements  | List&lt;String&gt; | QWeather     |
| getLicense | Data license      | List&lt;String&gt; | QWeather Developers License |

**TideTable**

| Property         | Description                                                                    | Example               |
| ------------ | ----------------------------------------------------- | -------------------- |
| getFxTime      | High tide or Low tide time                                 | 2017-10-25T04:34+08:00|
| getHeight        | The height of the wave, in meters                                       | 1.23            |
| getType       | High tide (H) or Low tide (L)                              |    H    |

**TideHourly**

| Property         | Description                                                                    | Example               |
| ------------ | ----------------------------------------------------- | -------------------- |
| getFxTime      | Hourly forecast time                                 | 2017-10-25T04:34+08:00|
| getHeight        | The height of the wave, in meters                                     | 1.23            | -->


---
title: Tide
tag: [guide, android, ocean, tide]
ref: 1-sdk-android-tide
---

Global tidal data for the next 10 days, including tide table and hourly tide forecast data.


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
| getUpdateTime | [Last updated time](/en/docs/resource/glossary/#update-time)  | 2017-10-25T04:34+08:00      |
| getFxLink |Responsive web page of this data, for embedded in website or APP  | https://www.qweather.com |

**Refer**

| Property           | Description         | Example             |
| -------------- | ------------ | ------------------ |
| getSourcesList | Data source and other statements | QWeather      |
| getLicenseList | Data license     | QWeather Developers License |


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


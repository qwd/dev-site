---
title: Tropical cyclone
tag: android-sdk
version: v4
description: Tropical cyclone SDK provides tropical cyclones (typhoon) information in major ocean basins around the world, including real-time typhoon location, level, pressure, wind and etc., as well as typhoon path and typhoon forecast information.
toc: true
ref: 91-sdk-android-tropical
---

Tropical cyclone SDK provides tropical cyclones (typhoon) information in major ocean basins around the world, including real-time typhoon location, level, pressure, wind and etc., as well as typhoon path and typhoon forecast information.

## Storm List

Get storem ID and list of tropical cyclones (typhoons) in the world’s major ocean basins.

>  Only the coastal areas of China are supported now, i.e. `basin=NP`

| Interface Code| Interface          | Class  |
| -------- | ---------------- | ------- |
| getStormList| Storm list and IDs  | StormListBean |

### Parameter

{% include params.html p="basin year" %}

### Sample Code

```java
QWeather.getStormList(Context context, String year, Basin basin, OnResultTropicalStormListListener listener);
```

### Properties

Properties of StormListBean

| Property            | Description     | Example                    |
| --------------- | -------- | ---------------------- |
| getCode         | Status code, please refer to [Status Code](/en/docs/start/status-code/) | [Status Code](/docs/start/status-code/)        |
| getBasic         | Basic Informatio | Basic       |
| getRefer         | Reference data, includes data source, statements and license | Refer  |
| getStormList | Storm list and IDs | List<StormBean> |


**Basic**

| Property           | Description         | Example             |
| -------------- | ------------ | ------------------ |
| getUpdateTime | [Last updated time](/en/docs/start/glossary#update-time)  | 2017-10-25T04:34+08:00      |
| getFxLink |Responsive web page of this data, for embedded in website or APP  | http://hfx.link/1 |

**Refer**

| Property           | Description         | Example             |
| -------------- | ------------ | ------------------ |
| getSourcesList | Data source and other statements | qweather.com      |
| getLicenseList | Data license     | commercial license |


**StormBean**

| Property         | Description                                                                    | Example               |
| ------------ | ----------------------------------------------------- | -------------------- |
| getId      | Storm ID                              | NP_2101 |
| getName        | Storm name                                      | 杜鹃           |
| getBasin       | The basin of the storm                              |    NP    |
| getYear       | Year of the storm                              |    2021    |
| getActive       | Is it an active storm?<br />`1` Active <br /> `0` Stopped                             |    0    |


## Storm Track

Storm Track provides tropical cyclones real-time information, including real-time tropical cyclones location, level, pressure, wind and etc., as well as historical position.

| Interface Code| Interface          | Class  |
| -------- | ---------------- | ------- |
| getStormTrack| Real-time storm data and storm track data  | StormTrackBean |

### Parameter

{% include params.html p="stormid-sdk" %}

### Sample Code

```java
QWeather.getStormTrack(Context context, String stormId, OnResultTropicalStormTrackListener listener);
```

### Properties

Properties of StormTrackBean

| Property            | Description     | Example                    |
| --------------- | -------- | ---------------------- |
| getCode         | Status code, please refer to [Status Code](/en/docs/start/status-code/) | [Status Code](/docs/start/status-code/)        |
| getBasic         | Basic Informatio | Basic       |
| getRefer         | Reference data, includes data source, statements and license | Refer  |
| getIsActive         | Is it an active storm?<br />`1` Active <br /> `0` Stopped | 0  |
| getNow | Ream-time storm data | StormTrackNowBean |
| getTrackList | Storm track data | List<StormTrackBaseBean> |

**Basic**

| Property           | Description         | Example             |
| -------------- | ------------ | ------------------ |
| getUpdateTime | [Last updated time](/en/docs/start/glossary#update-time)  | 2017-10-25T04:34+08:00      |
| getFxLink |Responsive web page of this data, for embedded in website or APP  | http://hfx.link/1 |

**Refer**

| Property           | Description         | Example             |
| -------------- | ------------ | ------------------ |
| getSourcesList | Data source and other statements | qweather.com      |
| getLicenseList | Data license     | commercial license |


**StormTrackNowBean**

| Property         | Description                                                                    | Example               |
| ------------ | ----------------------------------------------------- | -------------------- |
| getPubTime      | The data release time from the data source                                 | 2020-10-29T20:00+08:00 |
| getLat        | Storm latitude        | 8          |
| getLon       | Storm longitude                           |    148.5    |
| getType       | Storm type                        |    TS    |
| getPressure  | Center pressure of the storm                        |  1000 |
| getWindSpeed       | Maximum wind speed near the strom                       |  18    |
| getMoveSpeed       | Storm moving speed                   |   27   |
| getMoveDir       | Storm moving direction                      |    NE    |
| getMove360       | Storm movement direction in azimuth degre, **may be null**          |    332    |
| getWindRadius30       | Strom with level 7 wind circle, **may be null**         |    StormTrackWindBean    |
| getWindRadius50       | Strom with level 10 wind circle, **may be null**       |    StormTrackWindBean    |
| getWindRadius64       | Strom with level 12 wind circle, **may be null**     |    StormTrackWindBean    |


**StormTrackWindBean**

| Property         | Description                                                                    | Example               |
| ------------ | ----------------------------------------------------- | -------------------- |
| getNeRadius       | The northeast wind radius quadrants                    | 359|
| getSeRadius       | The southeast wind radius quadrants                    | 359                  |
| getSwRadius       | The southwest wind radius quadrants                   | 212                   |
| getNwRadius       | The northwest wind radius quadrants                    | 212                   |


**StormTrackBaseBean**

| Property         | Description                                                                    | Example               |
| ------------ | ----------------------------------------------------- | -------------------- |
| getTime      | Storm information release time                                 | 2020-10-29T20:00+08:00 |
| getLat       | Storm latitude        | 8          |
| getLon       | Storm longitude                           |    148.5    |
| getType      | Storm type                        |    TS    |
| getPressure  | Center pressure of the storm                        |  1000 |
| getWindSpeed       | Maximum wind speed near the strom                       |  18    |
| getMoveSpeed       | Storm moving speed                   |   27   |
| getMoveDir       | Storm moving direction                      |    NW    |
| getMove360       | Storm movement direction in azimuth degree          |    332    |
| getWindRadius30       | Strom with level 7 wind circle, **may be null**         |    StormTrackWindBean    |
| getWindRadius50       | Strom with level 10 wind circle, **may be null**        |    StormTrackWindBean    |
| getWindRadius64       | Strom with level 12 wind circle, **may be null**     |    StormTrackWindBean    |

## Storm Forecast

Storm Forecast provides tropical cyclones information for a specific tropical cyclone, the data including forecast tropical cyclones location, level, pressure, wind and etc.

> For historical storms, the returned data is NULL, please get the storms status by [Storm List](#storm-list) first.

| Interface Code| Interface          | Class  |
| -------- | ---------------- | ------- |
| getStormForecast| Storm forecast data  | StormForecastBean |

### Parameter

{% include params.html p="stormid-sdk" %}

### Sample Code

```java
QWeather.getStormForecast(Context context, String stormId, OnResultTropicalStormForecastListener listener);
```

### Properties

Properties of TideBean

| Property            | Description     | Example                    |
| --------------- | -------- | ---------------------- |
| getCode         | Status code, please refer to [Status Code](/en/docs/start/status-code/) | [Status Code](/docs/start/status-code/)        |
| getBasic         | Basic Informatio | Basic       |
| getRefer         | Reference data, includes data source, statements and license | Refer  |
| getForecastList | Storm forecast data | List<StormForecastBaseBean> |

**Basic**

| Property           | Description         | Example             |
| -------------- | ------------ | ------------------ |
| getUpdateTime | [Last updated time](/en/docs/start/glossary#update-time)  | 2017-10-25T04:34+08:00      |
| getFxLink |Responsive web page of this data, for embedded in website or APP  | http://hfx.link/1 |

**Refer**

| Property           | Description         | Example             |
| -------------- | ------------ | ------------------ |
| getSourcesList | Data source and other statements | qweather.com      |
| getLicenseList | Data license     | commercial license |


**StormForecastBaseBean**

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

## Typhoon level

GBT 19201-2006

| Tropical cyclone level | Maximum average wind speed near the bottom center (m/s) | Maximum wind near the bottom center (level) |
| ------------------- | ----------------------------- | ------------------------ |
| Tropical pressure (TD) | 10.8-17.1 | 6-7 |
| Tropical Storm (TS) | 17.2-24.4 | 8-9 |
| Severe Tropical Storm (STS) | 24.5-32.6 | 10-11 |
| Typhoon (TY) | 32.7-41.4 | 12-13 |
| Severe Typhoon (STY) | 41.5-50.9 | 14-15 |
| Super Typhoon (SuperTY) | ≥51.0 | 16 or above |
---
title: Storm Track
tag: [guide, android, storm, track]
ref: 2-sdk-android-storm-track
---

Get the tropical cyclones location, level, pressure, windspeed, and track path of active storm in major ocean basins around the world.

>  Only the coastal areas of China are supported now, i.e. `basin=NP`

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
| getCode         | Status code, please refer to [Status Code](/en/docs/resource/status-code/) | [Status Code](/docs/resource/status-code/)        |
| getBasic         | Basic Informatio | Basic       |
| getRefer         | Reference data, includes data source, statements and license | Refer  |
| getIsActive         | Is it an active storm?<br />`1` Active <br /> `0` Stopped | 0  |
| getNow | Ream-time storm data | StormTrackNowBean |
| getTrackList | Storm track data | List<StormTrackBaseBean> |

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
---
title: Sun and Moon
tag: android-sdk
version: v4
description: Use QWeather Android SDK obtains global sunrise and sunset, moon rise/moon set, moon phase and solar elevation angle data.
ref: 8-sdk-android-astronomy
---

Get the latest 60-day global city sunrise/sunset, moon rise/moon set, moon phase and and solar elevation angle data.

## Sunrise and Sunset

Get the last 60 days of sunrise and sunset data for cities around the world.

| Interface Code| Interface  | Class |
| -------------- | ---------- | ----------- |
| getSun| Sunrise and sunset data  | SunBean |

### Parameter

{% include params.html p="location-android date60" %}

### Sample Code

```java
QWeather.getSun(Context context, String location, String date, final OnResultSunListener listener) ;

QWeather.getSun(Context context, String location, Lang lang, String date, final OnResultSunListener listener) 
```

### Properties

Properties of SunBean

| Property | Description | Example |
| -------------------- | -------------------------- |- ------------------------ |
| getCode | Status code, please refer to [Status Code](/en/docs/start/status-code/) | Code |
| getRefer | Reference data, includes data source, statements and license | Refer |
| getSunrise | Sunrise time | 2017-10-25T06:01+08:00 |
| getSunset | Sunset time | 2017-10-25T18:01+08:00 |

**Refer**

| Property | Description | Example |
| -------------- | ------------ | ------------------ |
| getSourcesList | Data source and other statements | qweather.com |
| getLicenseList | Data license | commercial license |

**Basic**

| Property | Description | Example |
| ------------- | ------------------------ | ---------- ---------- |
| getUpdateTime | [Last updated time](/en/docs/start/glossary#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | http://hfx.link/ae45 |

## Moon

Get the last 60 days of moonrise, moonset and moon phase data for cities around the world.

| Interface Code| Interface          | Class      |
| ------ | ---------- | ----------- |
| getMoon| Moonrise, moonset and moon phase data  | MoonBean |

### Parameter

{% include params.html p="location-android date60" %}

### Sample Code

```java
QWeather.getMoon(Context context, String location, String date, final OnResultMoonListener listener) ;

QWeather.getMoon(Context context, String location, Lang lang, String date, final OnResultMoonListener listener)                                
```

### Properties

Properties of MoonBean

| Property | Description | Example |
| -------------------- | -------------------------- | ------------------------- |
| getCode | Status code, please refer to [Status Code](/en/docs/start/status-code/) | Code |
| getRefer | Reference data, includes data source, statements and license | Refer |
| getMoonrise       | Moonrise time                   | 2017-10-25T01:34+08:00           |
| getMoonset       | Moonset time                   | 2017-10-25T04:34+08:00           |
| getMoonPhaseBeanList | Moon phase data                   | List\<MoonPhaseBean> |

**Refer**

| Property | Description | Example |
| -------------- | ------------ | ------------------ |
| getSourcesList | Data source and other statements | qweather.com |
| getLicenseList | Data license | commercial license |

**Basic**

| Property | Description | Example |
| ------------- | ------------------------ | ---------- ---------- |
| getUpdateTime | [Last updated time](/en/docs/start/glossary#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | http://hfx.link/ae45 |

**MoonPhaseBean**

| Property | Description | Example |
| --------------- | ---------------------- | ---------------------- |
| getFxTime       | Moon phase forecast time     | 2013-12-31T23:31+08:00 |
| getValue        | Moon phase value               | 0.25                   |
| getName         | Moon Phase Name               | 上弦月                 |
| getIllumination | Moon illuminance in percent | 30                     |

## Solar Elevation Angle

Get global solar elevation angle and azimuth.

| Interface Code| Interface  | Class |
| ------ | ---------- | ----------- |
| getSolarElevationAngle| Solar elevation angle data  | SolarElevationAngleBean |

### Parameter

{% include params.html p="location-coord date time tz alt" %}

### Sample Code

```java
QWeather.getSolarElevationAngle(Context context, String location, String date, String time, String timezone, String alt, final OnResultSolarElevationAngleListener listener)                                
```

### Properties

Properties of SolarElevationAngleBean

| Property | Description | Example |
| -------------------- | -------------------------- | ------------------------- |
| getCode | Status code, please refer to [Status Code](/en/docs/start/status-code/) | Code |
| getRefer | Reference data, includes data source, statements and license | Refer |
| getSolarElevationAngle       | Solar elevation angle                   | 70.73  |
| getSolarAzimuthAngle       |  Solar azimuth angle   | 205.95      |
| getSolarHour | Solar time，HHmm format                | 1217 |
| getHourAngle | Hour Angle                   | -4.41 |

**Refer**

| Property | Description | Example |
| -------------- | ------------ | ------------------ |
| getSourcesList | Data source and other statements | qweather.com |
| getLicenseList | Data license | commercial license |

**Basic**

| Property | Description | Example |
| ------------- | ------------------------ | ---------- ---------- |
| getUpdateTime | [Last updated time](/en/docs/start/glossary#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | http://hfx.link/ae45 |

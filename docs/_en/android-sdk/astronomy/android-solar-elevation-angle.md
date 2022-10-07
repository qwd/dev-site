---
title: Solar Elevation Angle
tag: [guide, android, astronomy, solar-elevation-angle]
ref: 3-sdk-android-solar-elevation-angle
---

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
| getCode | Status code, please refer to [Status Code](/en/docs/resource/status-code/) | Code |
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
| getUpdateTime | [Last updated time](/en/docs/resource/glossary/#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | http://hfx.link/ae45 |

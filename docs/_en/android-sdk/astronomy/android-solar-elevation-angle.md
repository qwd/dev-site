<!--
 * @Date: 2025-03-06 10:02:06
 * @LastEditors: 韩笑白
 * @LastEditTime: 2025-03-13 17:56:41
 * @FilePath: /dev-site/docs/_en/android-sdk/astronomy/android-solar-elevation-angle.md
-->
---
title: Solar Elevation Angle
tag: [guide, android, astronomy, solar-elevation-angle]
ref: 3-sdk-android-solar-elevation-angle
---

Get global solar elevation angle and azimuth.

| Interface Code| Interface  | Class |
| ------ | ---------- | ----------- |
| astronomySolarElevationAngle| Solar elevation angle data  | AstronomySolarElevationAngleResponse |

### Parameter

{% include params.html p="location-coord date time tz alt" %}

### Sample Code

```java
public void astronomySolarElevationAngle(SolarElevationAngleParameter parameter, Callback<AstronomySolarElevationAngleResponse> callback);                             
```

### Properties

Properties of AstronomySolarElevationAngleResponse

| Property | Description | Example |
| -------------------- | -------------------------- | ------------------------- |
| getCode | See [Status Code](/en/docs/resource/status-code/) | 200 |
| getUpdateTime | [Last updated time](/en/docs/resource/glossary/#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | https://www.qweather.com/weather/beijing-101010100.html |
| getSolarElevationAngle       | Solar elevation angle                   | 70.73  |
| getSolarAzimuthAngle       |  Solar azimuth angle   | 205.95      |
| getSolarHour | Solar time，HHmm format                | 1217 |
| getHourAngle | Hour Angle                   | -4.41 |
| getRefer | Reference data, includes data source, statements and license | Refer |


**Refer**

| Property | Description  |  Type |  Example  |
| ---------- | ----------- | ------------------ | ------------ |
| getSources | Data source and other statements  | List&lt;String&gt; | QWeather   |
| getLicense | Data license     | List&lt;String&gt; | QWeather Developers License |

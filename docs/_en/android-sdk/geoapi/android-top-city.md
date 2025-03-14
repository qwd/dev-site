<!--
 * @Date: 2025-03-06 10:02:06
 * @LastEditors: 韩笑白
 * @LastEditTime: 2025-03-13 16:23:29
 * @FilePath: /dev-site/docs/_en/android-sdk/geoapi/android-top-city.md
-->
---
title: Top City
tag: [guide, android, geo, top-city]
ref: 2-sdk-android-geo-top
---

Get a list of popular cities around the world.


## Top City

| Interface Code| Interface  | Class |
| ------------ | ------------- | ------- |
| geoCityTop| Top city  | GeoCityTopBaseResponse |

### Parameter

{% include params.html p="range number lang-def" %}

### Sample Code

```java
public void geoCityTop(GeoCityTopParameter parameter, Callback<GeoCityTopBaseResponse> callback);
```

### Properties

Properties of GeoCityTopBaseResponse

| Property | Description | Example |
| --------------- | -------- | ------------------------ |
| getCode | See [Status Code](/en/docs/resource/status-code/) | 200 |
| getLocation | City data | List&lt;Location&gt; |
| getRefer | Reference data, includes data source, statements and license | Refer |


**Refer**

| Property | Description  |  Type |  Example  |
| ---------- | ----------- | ------------------ | ------------ |
| getSources | Data source and other statements  | List&lt;String&gt; | QWeather     |
| getLicense | Data license     | List&lt;String&gt; | QWeather Developers License |


**Location Basic Information**

| Property | Description | Example |
| ------------ | ------------- | ------------- |
| getName | Location Name | Zhuozi |
| getId | Location ID | 101080402 |
| getLon | Longitude of the location | 112.577702 |
| getLat | Latitude of the location| 40.89576 |
| getAdm2 | Name of the superior administrative division of the location | Ulan Qab |
| getAdm1 | The first-level administrative region of the location | Inner Mongolia |
| getCountry | Country name of the location | China |
| getTz | Location [Timezone](/en/docs/resource/glossary/#timezone) | Asia/Shanghai |
| getUtcOffset | The number of hours offset between local time and UTC time, refer to [UTC-Offset](/en/docs/resource/glossary/#utc-offset) | +08:00 |
| getIsDst | Is the location currently observing Daylight Saving time<br />`1` in daylight saving time <br /> `0` not in daylight saving time | 0 |
| getType | Type of the location | city |
| getRank | [Location Rank](/en/docs/resource/glossary/#rank) | 10 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | https://www.qweather.com/weather/zhuozi-101080402.html |

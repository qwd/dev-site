---
title: Top City
tag: [guide, android, geo, top-city]
ref: 2-sdk-android-geo-top
---

Get a list of popular cities around the world.


## Top City

| Interface Code| Interface  | Class |
| ------------ | ------------- | ------- |
| getGeoTopCity| Top city  | GeoBean |

### Parameter

{% include params.html p="range number lang-sdk" %}

### Sample Code

```java
QWeather.getGeoTopCity(Context context, int number, Range range, Lang lang, final QWeather.OnResultGeoBeansListener listener);

QWeather.getGeoTopCity(Context context, final QWeather.OnResultGeoBeansListener listener);
```

### Properties

Properties of GeoBean

| Property | Description | Example |
| --------------- | -------- | ------------------------ |
| getCode | Status code, please refer to [Status Code](/en/docs/resource/status-code/) | Code |
| getLocationBean | City data | List&lt;LocationBean&gt; |


**Refer**

| Property | Description | Example |
| -------------- | ------------ | ------------------ |
| getSourcesList | Data source and other statements | qweather.com |
| getLicenseList | Data license | commercial license |


**LocationBean Basic Information**

| Property | Description | Example |
| ------------ | ------------------------------------------- | ------------- |
| getName | Location Name | Zhuozi |
| getId | Location ID | 101080402 |
| getLon | Longitude of the location | 112.577702 |
| getLat | Latitude of the location| 40.89576 |
| getAdm2 | Name of the superior administrative division of the location | Ulan Qab |
| getAdm1 | The first-level administrative region of the location | Inner Mongolia |
| getCountry | Country name of the location | China |
| getTz | Location [Timezone](/en/docs/resource/glossary#timezone) | Asia/Shanghai |
| getUtcOffset | The number of hours offset between local time and UTC time, refer to [UTC-Offset](/en/docs/resource/glossary#utc-offset) | +08:00 |
| getIsDst | Is the location currently observing Daylight Saving time<br />`1` in daylight saving time <br /> `0` not in daylight saving time | 0 |
| getType | Type of the location | city |
| getRank | [Location Rank](/en/docs/resource/glossary#rank) | 10 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | http://hfx.link/ae45 |

---
title: GeoAPI
tag: android-sdk
version: v4
description: QWeather Android SDK GeoAPI documentation
toc: true
ref: 2-sdk-android-geo
---

Weather data is based on geographic location, so you need to know specific location information before getting the weather. QWeather provides a powerful GeoAPI service, which can obtain the basic information of the city that needs to be queried, including the location ID of the city or region (you need this ID to query the weather), multilingual name, latitude and longitude, time zone, altitude, Rank value, administrative division, etc.

In addition, the GeoAPI service can also help you:

- Avoid the trouble of the same name city
- Return multiple city results based on the name entered by the user in your APP or website, so that the user can select an accurate city and return the city’s weather
- Display popular cities in your APP or website, users can directly select, reduce search steps and improve user experience
- No need to maintain the city list, city information updates are obtained in real time

> GeoAPI is free for the first 50,000 calls per day for each account, more calls refer to [price](/en/help/buy#price)
{:.bqwarning}

## City Lookup

| Interface Code| Interface  | Class |
| -------- | ---------------- | ------- |
| getGeoGityLookup| City lookup  | GeoBean |

### Parameter

{% include params.html p="location-geo range number lang-sdk" %}

### Sample Code

```java
QWeather.getGeoCityLookup(Context context, String location, Range range, int number, Lang lang, final QWeather.OnResultGeoListener listener);

QWeather.getGeoCityLookup(Context context, Range range, final QWeather.OnResultGeoBeansListener listener);

QWeather.getGeoCityLookup(Context context, String location, final QWeather.OnResultGeoBeansListener listener);
```

### Properties

Properties of GeoBean

| Property | Description | Example |
| --------------- | -------- | ------------------------ |
| getCode | Status code, please refer to [Status Code](/en/docs/start/status-code/) | Code |
| getLocationBean | City data | List&lt;LocationBean&gt; |


**Refer**

| Property | Description | Example |
| -------------- | ------------ | ------------------ |
| getSourcesList | Data source and other statements | qweather.com |
| getLicenseList | Data license | commercial license |


**LocationBean Basic Information**

| Property | Description | Example |
| ------------ | ------------- | ------------- |
| getName | Location Name | Zhuozi |
| getId | Location ID | 101080402 |
| getLon | Location longitude | 112.577702 |
| getLat | Location latitude | 40.89576 |
| getAdm2 | Name of the superior administrative division of the location | Ulan Qab |
| getAdm1 | The first-level administrative region of the location | Inner Mongolia |
| getCountry | Country name of the location | China |
| getTz | Location [Timezone](/en/docs/start/glossary#timezone) | Asia/Shanghai |
| getUtcOffset | The number of hours offset between local time and UTC time, refer to [UTC-Offset](/en/docs/start/glossary#utc-offset) | +08:00 |
| getIsDst |Is the location currently observing Daylight Saving time<br />`1` in daylight saving time <br /> `0` not in daylight saving time | 0 |
| getType | Type of the location | city |
| getRank | [Location Rank](/en/docs/start/glossary#rank) | 10 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | http://hfx.link/ae45 |

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
| getCode | Status code, please refer to [Status Code](/en/docs/start/status-code/) | Code |
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
| getTz | Location [Timezone](/en/docs/start/glossary#timezone) | Asia/Shanghai |
| getUtcOffset | The number of hours offset between local time and UTC time, refer to [UTC-Offset](/en/docs/start/glossary#utc-offset) | +08:00 |
| getIsDst | Is the location currently observing Daylight Saving time<br />`1` in daylight saving time <br /> `0` not in daylight saving time | 0 |
| getType | Type of the location | city |
| getRank | [Location Rank](/en/docs/start/glossary#rank) | 10 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | http://hfx.link/ae45 |

## POI Lookup

| Interface Code| Interface  | Class |
| ----------- | --------------- | ---------- |
| getGeoPoiLookup| POI lookup  | GeoPoiBean |

### Parameter

{% include params.html p="location-geo geo-type city number lang-sdk" %}

### Sample Code

```java
QWeather.getGeoPoiLookup(Context context, String location, String city, int number, Type type, Lang lang, final OnResultGeoPoiListener listener);

QWeather.getGeoPoiLookup(Context context, String location, Type type, final QWeather.OnResultGeoPoiListener listener);
```

### Properties

Properties of GeoPoiBean

| Property | Description | Example |
| ---------- | -------- | --------------- |
| getCode | Status code, please refer to [Status Code](/en/docs/start/status-code/) | Code |
| getPoiList | City data | List&lt;Poi&gt; |


**Refer**

| Property | Description | Example |
| -------------- | ------------ | ------------------ |
| getSourcesList | Data source and other statements | qweather.com |
| getLicenseList | Data license | commercial license |


**Poi**

| Property | Description | Example |
| ------------ | ------------------------------------ ----------------------------- | --------- |
| getName | POI name | Nanshan District |
| getId | Location ID | 101280604 |
| getLon | Longitude of the POI | 22.53122 |
| getLat | Latitude of the POI | 113.92942 |
| getAdm2 | Name of the superior administrative division of the POI | Shenzhen |
| getAdm1 | The first-level administrative region to which the POI belongs | Guangdong Province |
| getCountry | Country name of the POI | China |
| getTz | [Timezone](/en/docs/start/glossary#timezone) of the POI | Asia/Shanghai |
| getUtcOffset | The number of hours offset between local time and UTC time, refer to [UTC-Offset](/en/docs/start/glossary#utc-offset) | +08:00 |
| getIsDst | Is the location currently observing Daylight Saving time<br />`1` in daylight saving time <br /> `0` not in daylight saving time | 0 |
| getType | POI type | scenic |
| getRank | [Location Rank](/en/docs/start/glossary#rank) | 10 |

## POI Range

| Interface Code| Interface  | Class |
| ----------- | -------------- | ---------- |
| getGeoPoiRange| POI Range  | GeoPoiBean |

### Parameter

{% include params.html p="location-coord geo-type radius number lang-sdk" %}

### Sample Code

```java
QWeather.getGeoPoiRange(Context context, String location, int radius, int number, Type type, Lang lang, final OnResultGeoPoiListener listener);

QWeather.getGeoPoiRange(Context context, String location, int number, Type type, Lang lang, final OnResultGeoPoiListener listener);
```

### Properties

Properties of GeoPoiBean

| Property | Description | Example |
| ---------- | -------- | --------------- |
| getCode | Status code, please refer to [Status Code](/en/docs/start/status-code/) | Code |
| getPoiList | City data | List&lt;Poi&gt; |


**Refer**

| Property | Description | Example |
| -------------- | ------------ | ------------------ |
| getSourcesList | Data source and other statements | qweather.com |
| getLicenseList | Data license | commercial license |


**Poi**

| Property | Description | Example |
| ------- | ----------------------------------- | --------- |
| getName | POI name | Nanshan District |
| getId | Location ID | 101280604 |
| getLon | Longitude of the POI | 22.53122 |
| getLat | Latitude of the POI | 113.92942 |
| getAdm2 | Name of the superior administrative division of the POI | Shenzhen |
| getAdm1 | The first-level administrative region to which the POI belongs | Guangdong Province |
| getCountry | Country name of the POI | China |
| getTz | [Timezone](/en/docs/start/glossary#timezone) of the POI | Asia/Shanghai |
| getUtcOffset | The number of hours offset between local time and UTC time, refer to [UTC-Offset](/en/docs/start/glossary#utc-offset) | +08:00 |
| getIsDst | Is the location currently observing Daylight Saving time<br />`1` in daylight saving time <br /> `0` not in daylight saving time | 0 |
| getType | POI type | scenic |
| getRank | [Location Rank](/en/docs/start/glossary#rank) | 10 |

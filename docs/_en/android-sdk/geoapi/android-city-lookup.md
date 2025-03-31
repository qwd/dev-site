---
title: City Lookup
tag: [guide, android, geo, city-lookup]
ref: 1-sdk-android-geo-city-lookup
---

City Lookup provides reverse geocoding, geolocation lookup services, supports multi-language, fuzzy search and other functions.

With the City Lookup, you can get the basic information of the city, including the Location ID of the city (you need this ID to get the weather), multilingual name, latitude and longitude, time zone, altitude, rank, administrative, etc.

In addition, GeoAPI - City Lookup can also help you to implement fuzzy search in your APP, users only need to type 1 or 2 words to get results.

| Interface code| Interface  | Class |
| -------- | ---------------- | ------- |
| geoCityLookUp | City lookup  | GeoCityLookupResponse |

## Parameters

**GeoCityLookupParameter**

{% include params.html p="location-geo adm range number lang-def" %}

## Sample code

```java
public void geoCityLookUp(GeoCityLookupParameter parameter, Callback<GeoCityLookupResponse> callback);
```

## Response

**GeoCityLookupResponse**

{% include api-response.html group="geo" type="location" prefix="location" update=0 fxlink=0 %}

<!-- | Property | Description | Example |
| --------------- | -------- | ------------------------ |
| getCode | See [Status Code](/en/docs/resource/status-code/) | 200 |
| getLocation | City data | List&lt;Location&gt; |


**Refer**

| Property | Description  |  Type |  Example  |
| ---------- | ----------- | ------------------ | ------------ |
| getSources | Data source and other statements  | List&lt;String&gt; | QWeather   |
| getLicense | Data license     | List&lt;String&gt; | QWeather Developers License |


**Location**

| Property | Description | Example |
| ------------ | ------------- | ------------- |
| getName | Location Name | Zhuozi |
| getId | Location ID | 101080402 |
| getLon | Location longitude | 112.577702 |
| getLat | Location latitude | 40.89576 |
| getAdm2 | Name of the superior administrative division of the location | Ulan Qab |
| getAdm1 | The first-level administrative region of the location | Inner Mongolia |
| getCountry | Country name of the location | China |
| getTz | Location [Timezone](/en/docs/resource/glossary/#timezone) | Asia/Shanghai |
| getUtcOffset | The number of hours offset between local time and UTC time, refer to [UTC-Offset](/en/docs/resource/glossary/#utc-offset) | +08:00 |
| getIsDst |Is the location currently observing Daylight Saving time<br />`1` in daylight saving time <br /> `0` not in daylight saving time | 0 |
| getType | Type of the location | city |
| getRank | [Location Rank](/en/docs/resource/glossary/#rank) | 10 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | https://www.qweather.com/weather/zhuozi-101080402.html | -->

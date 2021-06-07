---
title: POI Range
tag: api
data: geo
version: v2
description: QWeather POI Range API provides the ability to query all POI information within a specified area, making it easy to display POI weather data within an area.
ref: 4-api-poi-range
---

POI Range API provides the ability to query all POI information within a specified area, making it easy to display POI weather data within an area.


> GeoAPI is free for the first 50,000 calls per day for each account, more calls refer to [price](/en/help/buy#price)
{:.bqwarning}

### Request URL

{% include api-url.html flag="poi-range" %}

### Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="location-coord geo-type key radius number lang" %}

### Response

{% include api-snippet.html flag="poi-range" %}

{% include api-response.html group="geo_poi" type="poi" prefix="poi" update=0 fxlink=0 %}

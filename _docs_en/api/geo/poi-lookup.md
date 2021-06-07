---
title: POI Lookup
tag: api
data: geo
version: v2
description: QWeather POI Lookup API provides POI query of attractions, railway stations, airports, ports, etc., and it is convenient to display POI weather data in a certain area.
ref: 3-api-poi-lookup
---

POI Lookup API provides basic information of POI(scenic spot, tide stations, currents stations, etc.)

> GeoAPI is free for the first 50,000 calls per day for each account, more calls refer to [price](/en/help/buy#price)
{:.bqwarning}

### Request URL

{% include api-url.html flag="poi-lookup" %}

### Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="location-geo geo-type key city number lang" %}

### Response

{% include api-snippet.html flag="poi-lookup" %}

{% include api-response.html group="geo_poi" type="poi" prefix="poi" update=0 fxlink=0 %}
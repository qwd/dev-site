---
title: Top City
tag: api
data: geo
version: v2
description: QWeather Top City API can get a list of popular cities in each country around the world, which allows users to easily view the weather conditions of major cities in each country.
ref: 2-api-top-city
---

Top City API can get a list of popular cities around the world.

> GeoAPI is free for the first 50,000 calls per day for each account, more calls refer to [price](/en/help/buy#price)
{:.bqwarning}

### Request URL

{% include api-url.html flag="top-city" %}

### Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="key range number lang" %}

### Response

{% include api-snippet.html flag="top-city" %}

{% include api-response.html group="geo" type="topcity"  prefix="topCityList" update=0 fxlink=0 %}

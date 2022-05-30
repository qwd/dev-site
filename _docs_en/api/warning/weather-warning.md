---
title: Weather Warning
tag: api
data: warning
version: v7
description: QWeather Weather Warning API for getting real-time local severe weather warning around the world.
ref: 1-api-weather-warning
---

Weather Warning API for getting real-time local severe weather warning around the world.

> You can also first get a list of all cities in a given country or region where warnings are currently in effect via [Weather Warning City List API](/en/docs/api/warning/weather-warning-city-list/).

### Request URL

{% include api-url.html flag="weather-warning" %}

### Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="key location" %}

> Weather warnings are not available in all cities, see [supported countries or regions for weather warnings](/en/docs/resource/warning-info/#supported-regions).

{% include params.html p="lang-zhen" %}

### Response

> If there is no warning information in the queried location, the `warning` field is empty.
{:.bqwarning}

{% include api-snippet.html %}

{% include api-response.html group="warning" type="warning" prefix="warning" %}

### See also

- [Warning Information](/en/docs/resource/warning-info/)
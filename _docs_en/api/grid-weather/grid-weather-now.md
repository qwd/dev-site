---
title: Grid Weather Real-time 
tag: api
data: grid-weather
version: v7
description: QWeather provides high-precision real-time weather at any latitude and longitude around the world, including temperature, humidity, atmospheric pressure, weather conditions, wind, wind direction, etc.
ref: api-gird-weather-now
---

Get high-precision real-time weather at any latitude and longitude around the world.

> The spatial resolution is 1x1, 3x3 or 5x5 KM, depending on the region.

### Request URL

{% include api-url.html flag="weather-grid-now" %}

### Request parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="location-coord key lang unit" %}

### Response

{% include api-snippet.html %}

{% include api-response.html group="weather" type="gnow" prefix="now"  %}

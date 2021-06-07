---
title: Grid Weather Real-time 
tag: api
data: grid-weather
version: v7
description: QWeather provides high-precision real-time weather within 1 kilometer within China, including temperature, humidity, atmospheric pressure, weather conditions, wind, wind direction, etc.
ref: api-gird-weather-now
---

Obtain high-precision real-time weather within 1 km of China, including: temperature, humidity, atmospheric pressure, weather conditions, wind direction, etc.

> This data is only supported for Chinese cities.

### Request URL

{% include api-url.html flag="weather-grid-now" %}

### Request parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="location-coord key lang unit" %}

### Response

{% include api-snippet.html %}

{% include api-response.html group="weather" type="gnow" prefix="now"  %}

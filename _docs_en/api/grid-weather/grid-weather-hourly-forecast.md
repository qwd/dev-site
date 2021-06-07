---
title: Grid Weather Hourly Forecast
tag: api
data: grid-weather
version: v7
description: QWeather provides high-precision hourly weather forecasts within 1 kilometer within China, including temperature, humidity, atmospheric pressure, weather conditions, wind, wind direction, etc.
ref: api-grid-weather-hourly-forecast
---

Obtain high-precision hourly weather forecasts within 1 km of China, including: temperature, humidity, atmospheric pressure, weather conditions, wind direction, etc.

> This data is only supported for Chinese cities.

### Request URL

{% include api-url.html flag="weather-grid-hourly" %}

### Request parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="key location-coord lang unit" %}

### Response

{% include api-snippet.html %}

{% include api-response.html group="weather" type="ghourly" prefix="hourly"  %}

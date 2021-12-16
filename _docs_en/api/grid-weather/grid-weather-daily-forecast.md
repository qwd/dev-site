---
title: Grid Weather Daily Forecast
tag: api
data: grid-weather
version: v7
description: QWeather provides high-precision weather forecasts at any latitude and longitude in the world, including temperature, humidity, atmospheric pressure, weather conditions, wind, wind direction, etc.
ref: api-grid-weather-daily-forecast
---

Get daily weather forecasts at any latitude and longitude in the world, including: temperature, humidity, atmospheric pressure, weather conditions, wind, wind direction, etc.

> The spatial resolution is 1x1, 3x3 or 5x5 KM, depending on the region.

### Request URL

{% include api-url.html flag="weather-grid-daily" %}

### Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="key location-coord lang unit" %}

### Response

{% include api-snippet.html flag="grid-weather-daily-forecast" %}

{% include api-response.html group="weather" type="gdaily" prefix="daily"  %}

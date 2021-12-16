---
title: Grid Weather Hourly Forecast
tag: api
data: grid-weather
version: v7
description: QWeather provides hourly weather forecasts at any latitude and longitude in the world, including temperature, humidity, atmospheric pressure, weather conditions, wind direction, etc.
ref: api-grid-weather-hourly-forecast
---

Get hourly weather forecasts at any latitude and longitude in the world, including: temperature, humidity, atmospheric pressure, weather conditions, wind direction, etc.

> The spatial resolution is 1x1, 3x3 or 5x5 KM, depending on the region.

### Request URL

{% include api-url.html flag="weather-grid-hourly" %}

### Request parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="key location-coord lang unit" %}

### Response

{% include api-snippet.html %}

{% include api-response.html group="weather" type="ghourly" prefix="hourly"  %}

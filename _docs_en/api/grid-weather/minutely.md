---
title: Minutely Precipitation
tag: api
data: grid-weather
version: v7
description: QWeather minute-level precipitation API provides precipitation data for the next 2 hours in China. It can predict the rainfall every minute and every 1km grid.
ref: api-weather-minutely
---

Minute-level precipitation API provides precipitation data for the next 2 hours in China. It can predict the rainfall every minute and every 1km grid.

> This data is only supported for Chinese cities.

### Request URL

{% include api-url.html flag="weather-minutely" %}

### Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="location-coord key lang-zhen" %}

### Response

{% include api-snippet.html flag="minutely" %}

{% include api-response.html group="minutely" prefix="nil"  %}

---
title: Grid Weather Real-time 
tag: [guide, api, grid-weather, now]
ref: 1-api-grid-weather-now
---

Get high-precision real-time weather at any latitude and longitude around the world.

> The spatial resolution is 1x1, 3x3 or 5x5 KM, depending on the region.

## Request URL

{% include api-url.html flag="weather-grid-now" dev=true %}

## Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="location-coord lang-def unit-def" %}

## Request Example

{% include api-url-example.html %}

## Response

{% include api-snippet.html %}

{% include api-response.html group="weather" type="gnow" prefix="now"  %}

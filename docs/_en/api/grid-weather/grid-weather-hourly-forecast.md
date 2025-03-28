---
title: Grid Weather Hourly Forecast
tag: [guide, api, grid-weather, hourly]
ref: 3-api-grid-weather-hourly-forecast
---

Get hourly weather forecasts at any latitude and longitude in the world, including: temperature, humidity, atmospheric pressure, weather conditions, wind direction, etc.

> The spatial resolution is 1x1, 3x3 or 5x5 KM, depending on the region.

## Endpoint

{% include api-url.html apidata="grid-weather-hourly-24h grid-weather-hourly-72h" title=true dev=true %}

## Parameters

#### Query parameters

{% include params.html p="location-coord lang-def unit-def" %}

## Request example

{% include api-url-example.html apidata="grid-weather-hourly-24h" %}

## Response

{% include api-snippet.html %}

{% include api-response.html group="weather" type="ghourly" prefix="hourly"  %}

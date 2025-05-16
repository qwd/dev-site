---
title: Grid Weather Real-time 
tag: [guide, api, weather, grid-now]
ref: 1-api-grid-weather-now
---

Weather forecast data based on numerical models, to provide current weather data at specified coordinates around the world, with a spatial resolution of 3-5 kilometers.

> **Hint:** The grid weather data is based on Numerical Weather Prediction (NWP) models, and it is not suitable for comparison with observation station data. For station-based city weather data, please refer to the [City Weather API](/en/docs/api/weather/weather-now/). Grid weather uses UTC+0 as the time zone.

## Endpoint

{% include api-url.html flag="weather-grid-now" dev=true %}

## Parameters

#### Query parameters

{% include params.html p="location-coord lang-def unit-def" %}

## Request example

{% include api-url-example.html %}

## Response

{% include api-snippet.html %}

{% include api-response.html group="weather" type="gnow" prefix="now"  %}

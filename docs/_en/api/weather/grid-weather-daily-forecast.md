---
title: Grid Weather Daily Forecast
tag: [guide, api, weather, grid-daily]
ref: 2-api-grid-weather-daily-forecast
---

Weather forecast data based on numerical models, to provide daily weather forecasts at specified coordinates around the world, with a spatial resolution of 3-5 kilometers.

> **Hint:** The grid weather data is based on Numerical Weather Prediction (NWP) models, and it is not suitable for comparison with observation station data. For station-based city weather data, please refer to the [City Weather API](/en/docs/api/weather/weather-daily-forecast/). Grid weather uses UTC+0 as the time zone.

## Endpoint

{% include api-url.html apidata="weather-grid-daily" %}

## Parameters

#### Path parameters

{% include params.html p="p-day7d" %}

#### Query parameters

{% include params.html p="location-coord lang-def unit-def" %}

## Request example

{% include api-url-example.html %}

## Response

{% include api-snippet.html flag="grid-weather-daily-forecast" %}

{% include api-response.html group="weather" type="gdaily" prefix="daily"  %}

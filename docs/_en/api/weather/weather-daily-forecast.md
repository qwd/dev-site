---
title: Weather Daily Forecast
tag: [guide, api, weather, daily]
ref: 2-api-weather-daily-forecast
---

Get weather daily forecasts for the next 3-30 days for cities around the world.

## Request URL

{% include api-url.html apidata="weather-daily-3d weather-daily-7d weather-daily-10d weather-daily-15d weather-daily-30d" title=true dev=true %}
  
## Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="location key lang unit" %}

## Request Example

{% include api-url-example.html apidata="weather-daily-3d" %}

## Response

{% include api-snippet.html flag="weather-daily" %}

{% include api-response.html group="weather" type="daily" prefix="daily" %}

---
title: Weather Daily Forecast
tag: [guide, api, weather, daily]
ref: 2-api-weather-daily-forecast
---

Get weather daily forecasts for the next 3-30 days for cities around the world.

## Endpoint

{% include api-url.html apidata="weather-daily" %}
  
## Parameters

#### Path parameters

{% include params.html p="p-day30d" %}

#### Query parameters

{% include params.html p="location-def lang-def unit-def" %}

## Request example

{% include api-url-example.html %}

## Response

{% include api-snippet.html flag="weather-daily" %}

{% include api-response.html group="weather" type="daily" prefix="daily" %}

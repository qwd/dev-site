---
title: Weather Hourly Forecast
tag: [guide, api, weather, hourly]
ref: 3-api-weather-hourly-forecast
---

Get hourly weather forecasts for cities around the world for the next 24-168 hours.

## Endpoint

{% include api-url.html apidata="weather-hourly" %}
  
## Parameters

#### Path parameters

{% include params.html p="p-hour168h" %}

#### Query parameters

{% include params.html p="location-def lang-def unit-def" %}

## Request example

{% include api-url-example.html %}

## Response

{% include api-snippet.html flag="weather-hourly" %}

{% include api-response.html group="weather" type="hourly" prefix="hourly" %}

---
title: Weather Hourly Forecast
tag: [guide, api, weather, hourly]
ref: 3-api-weather-hourly-forecast
---

Get hourly weather forecasts for cities around the world for the next 24-168 hours.

## Request URL

{% include api-url.html apidata="weather-hourly-24h weather-hourly-72h weather-hourly-168h" title=true dev=true %}
  
## Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="location key lang unit" %}

## Request Example

{% include api-url-example.html apidata="weather-hourly-24h" %}

## Response

{% include api-snippet.html flag="weather-hourly" %}

{% include api-response.html group="weather" type="hourly" prefix="hourly" %}

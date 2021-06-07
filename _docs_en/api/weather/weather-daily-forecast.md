---
title: Weather Daily Forecast
tag: api
data: weather
version: v7
description: QWeather weather forecast API, providing weather forecasts for the next 15 days of global cities, including sunrise and sunset, moonrise and moonset, maximum and minimum temperatures, weather conditions, wind speed, wind direction, relative humidity, atmospheric pressure, precipitation, dew point temperature, UV index, visibility, etc.
ref: 2-api-weather-daily-forecast
---

Weather forecast for the next 15 days, including: sunrise and sunset, moonrise and moonset, maximum and minimum temperatures, weather conditions, wind speed, wind direction, relative humidity, atmospheric pressure, precipitation, dew point temperature, UV index, visibility, etc.

### Request URL

{% include api-url.html flag="weather-daily" %}
  
### Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="location key lang unit" %}

### Response

{% include api-snippet.html flag="weather-daily" %}

{% include api-response.html group="weather" type="daily" prefix="daily" %}

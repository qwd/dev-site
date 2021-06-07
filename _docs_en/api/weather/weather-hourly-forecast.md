---
title: Weather Hourly Forecast
tag: api
data: weather
version: v7
description: QWeather hourly weather forecast API, provides hourly weather forecasts for global cities in the next 168 hours, including temperature, weather conditions, wind speed, wind direction, relative humidity, atmospheric pressure, precipitation probability, dew point temperature, and cloud cover.
ref: 3-api-weather-hourly-forecast
---

Hour-by-hour weather forecast for the next 168 hours, including: temperature, weather conditions, wind speed, wind direction, relative humidity, atmospheric pressure, precipitation probability, dew point temperature, and cloud cover.

### Request URL

{% include api-url.html flag="weather-hourly" %}
  
### Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="location key lang unit" %}

### Response

{% include api-snippet.html flag="weather-hourly" %}

{% include api-response.html group="weather" type="hourly" prefix="hourly" %}

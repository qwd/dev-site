---
title: Air Quality Daily Forecast
tag: api
data: air
version: v7
description: QWeather air quality AQI forecast API, which supports the query of air quality forecast data in 3240 cities and counties across the country, including AQI forecast, primary pollutant forecast, and air quality level forecast.
ref: 2-api-air-daily-forecast
---

Air Quality Daily Forecast API for Chinese cities, including AQI, air quality levels, primary pollutants.

### Request URL

{% include api-url.html %}

### Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="key location lang gzip" %}

### Response

{% include api-snippet.html flag="air-daily" %}

{% include api-response.html group="air" type="daily"  prefix="daily" %}

### Air Quality Index Level

See [Air Quality Info](/en/docs/resource/air-info/).
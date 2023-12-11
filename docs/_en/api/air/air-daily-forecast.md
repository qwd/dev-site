---
title: Air Quality Daily Forecast
tag: [guide, api, air, daily]
ref: 2-api-air-daily-forecast
---

Air Quality Daily Forecast API for Chinese cities, including AQI, air quality levels, primary pollutants.

## Request URL

{% include api-url.html dev=true%}

## Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="key location lang-def" %}

## Request Example

{% include api-url-example.html %}

## Response

{% include api-snippet.html flag="air-daily" %}

{% include api-response.html group="air" type="daily"  prefix="daily" %}

### Air Quality Index Level

See [Air Quality Info](/en/docs/resource/air-info/).
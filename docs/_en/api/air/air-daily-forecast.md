---
title: Air Quality Daily Forecast
tag: [guide, api, air, daily]
ref: 2-api-air-daily-forecast
---

Air Quality Daily Forecast API for Chinese cities, including AQI, air quality levels, primary pollutants.

> **Note:** [Air Quality API v1 (new)](/en/docs/api/air-quality/) is now available, please try to use and upgrade.

## Endpoint

{% include api-url.html dev=true%}

## Parameters

#### Query parameters

{% include params.html p="location-def lang-def" %}

## Request example

{% include api-url-example.html %}

## Response

{% include api-snippet.html flag="air-daily" %}

{% include api-response.html group="air" type="daily"  prefix="daily" %}

### Air Quality Index Level

See [Air Quality Info](/en/docs/resource/air-info/).
---
title: Air Quality Daily Forecast (deprecated)
tag: [guide, api, aq, daily]
deprecated: true
ref: 2-api-air-daily-forecast
---

Air Quality Daily Forecast API for Chinese cities, including AQI, air quality levels, primary pollutants.

> **Note:** This API (/v7/air/5d) is deprecated and is expected to be out of service on 2026-06-01. Please use [air quality API v1](/en/docs/api/air-quality/air-daily-forecast/) instead.
{:.bqdanger}

## Endpoint

{% include api-url.html apidata="air-daily" %}

## Parameters

#### Query parameters

{% include params.html p="location-def lang-def" %}

## Request example

{% include api-url-example.html apidata="air-daily" %}

## Response

{% include api-snippet.html %}

{% include api-response.html group="air" type="daily"  prefix="daily" %}

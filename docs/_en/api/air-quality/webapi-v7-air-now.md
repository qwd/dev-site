---
title: Real-time Air Quality (deprecated)
tag: [guide, api, aq, now]
deprecated: true
ref: 1-api-air-now
---

Real-time air quality for Chinese cities and 1,700 monitoring stations, including AQI, air quality levels, primary pollutants, PM10, PM2.5, ozone, nitrogen dioxide sulfur dioxide and carbon monoxide values.

> **Warning:** This API (/v7/air/now) is deprecated and is expected to be out of service on 2026-06-01. Please use [air quality API v1](/en/docs/api/air-quality/air-current/) instead.
{:.bqdanger}

## Endpoint

{% include api-url.html apidata="air-now" %}

## Parameters

#### Query parameters

{% include params.html p="location-def lang-def" %}

## Request example

{% include api-url-example.html apidata="air-now" %}

## Response

{% include api-snippet.html %}

> `station`, the air data from monitoring station are only response for cities in [POI-Air-Monitoring-Station-List](https://github.com/qwd/LocationList/blob/master/POI-Air-Monitoring-Station-List-latest.csv).

{% include api-response.html group="air" type="now station" prefix="now station" %}

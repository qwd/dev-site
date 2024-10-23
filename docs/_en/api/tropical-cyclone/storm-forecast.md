---
title: Storm Forecast
tag: [guide, api, storm, forecast]
ref: 3-api-storm-forecast
---

Storm Forecast API provides tropical cyclones location, level, pressure, wind speed for major ocean basins around the world.

> **Note:** For inactive storms, the returned data is **NULL**, please get the storms status by [Storm List API](/en/docs/api/tropical-cyclone/storm-list/) first. 

## Request URL

{% include api-url.html flag="tc-forecast" %}

## Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="stormid" %}

## Request Example

{% include api-url-example.html %}

## Response

{% include api-snippet.html %}

{% include api-response.html group="storm" type="forecast" prefix="forecast"  %}

## Typhoon level

GBT 19201-2006

| Tropical cyclone level | Maximum average wind speed near the bottom center (m/s) | Maximum wind near the bottom center (level) |
| ------------------- | ----------------------------- | ------------------------ |
| Tropical pressure (TD) | 10.8-17.1 | 6-7 |
| Tropical Storm (TS) | 17.2-24.4 | 8-9 |
| Severe Tropical Storm (STS) | 24.5-32.6 | 10-11 |
| Typhoon (TY) | 32.7-41.4 | 12-13 |
| Severe Typhoon (STY) | 41.5-50.9 | 14-15 |
| Super Typhoon (SuperTY) | ≥51.0 | 16 or above |
---
title: Real-time Air Quality
tag: [guide, api, air, now]
ref: 1-api-air-now
---

Real-time air quality for Chinese cities and 1,700 monitoring stations, including AQI, air quality levels, primary pollutants, PM10, PM2.5, ozone, nitrogen dioxide sulfur dioxide and carbon monoxide values.

> **Note:** [Air Quality API v1 (new)](/en/docs/api/air-quality/) is now available, please try to use and upgrade.

## Request URL

{% include api-url.html flag="air-now" dev=true %}

## Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="location-def lang-def" %}

## Request Example

{% include api-url-example.html %}

## Response

{% include api-snippet.html flag="air-now" %}

> `station`, the air data from monitoring station are only response for cities in [POI-Air-Monitoring-Station-List](https://github.com/qwd/LocationList/blob/master/POI-Air-Monitoring-Station-List-latest.csv).

{% include api-response.html group="air" type="now station" prefix="now station" %}

### Air Quality Index Level

See [Air Quality Info](/en/docs/resource/air-info/).
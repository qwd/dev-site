---
title: Real-time Air Quality
tag: api
data: air
version: v7
description: QWeather real-time air quality API for Chinese cities and 1,700 monitoring stations, including AQI, air quality levels, primary pollutants, PM10, PM2.5, ozone, and nitrogen dioxide , Sulfur dioxide, carbon monoxide values.
ref: 1-api-air-now
---

Real-time Air Quality API for Chinese cities and 1,700 monitoring stations, including AQI, air quality levels, primary pollutants, PM10, PM2.5, ozone, and nitrogen dioxide , sulfur dioxide, carbon monoxide values.

### Request URL

{% include api-url.html flag="air-now" %}

### Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="key location lang" %}

### Response

{% include api-snippet.html flag="air-now" %}

> `station`, the air data from monitoring station are only response for cities in [POI-Air-Monitoring-Station-List](https://github.com/qwd/LocationList/blob/master/POI-Air-Monitoring-Station-List-latest.csv).

{% include api-response.html group="air" type="now station" prefix="now station" %}

### Air Quality Index Level

See [Air Quality Info](/en/docs/resource/air-info/).
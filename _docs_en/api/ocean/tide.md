---
title: Tide
tag: api
data: ocean
version: v7
description: QWeather tide API for the next 10 days, contains more than 10,000 ports or locations around the world, including tide table and hourly tide forecast data.
ref: 1-api-tide
---

Global tide table and forecast data for the next 10 days.

### Request URL

{% include api-url.html flag="tide" %}

### Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="location-p2 date10 key" %}

### Response

{% include api-snippet.html %}

{% include api-response.html group="ocean" type="ttable thourly" prefix="tideTable tideHourly" %}

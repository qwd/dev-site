---
title: Currents
tag: api
data: ocean
version: v7
description: Currents data for the next 10 days, including currents speed, direction and hourly forecast.
ref: 2-api-currents
---

Currents data for the next 10 days, including currents speed, direction and hourly forecast.

### Request URL

{% include api-url.html %}

### Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="location-p6 date10 key" %}

### Response

{% include api-snippet.html %}

{% include api-response.html group="ocean" type="ctable chourly" prefix="currentsTable currentsHourly" %}

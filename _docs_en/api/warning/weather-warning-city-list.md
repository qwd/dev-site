---
title: Weather Warning City List
tag: api
data: warning
version: v7
description: Get a list of cities in China where weather warnings are currently in effect.
toc: true
ref: 2-api-weather-warning-city-list
---

Get a list of cities in China where weather warnings are currently in effect.

> Only China data is supported

### Request URL

{% include api-url.html flag="weather-warning-list" %}

### Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="range-cn key" %}

### Response

{% include api-snippet.html flag="weather-warning-list" %}

{% include api-response.html group="warning" type="list" prefix="warningLocList" fxlink=0 %}
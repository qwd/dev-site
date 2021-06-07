---
title: Sunrise and Sunset
tag: api
data: astronomy
version: v7
description: QWeather Sunrise and Sunset API for getting the sunrise and sunset times of global cities.
ref: 1-api-sun
---

Get the sunrise and sunset times of global cities.

### Request URL

{% include api-url.html flag="sun" %}

### Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="key location date60 lang" %}

### Response

{% include api-snippet.html flag="sun" %}

{% include api-response.html group="astro" type="sun" prefix="nil" %}

---
title: Moon and Moon Phase
tag: api
data: astronomy
version: v7
description: The moonrise, moonset and moon phase API interface of the mild weather provides the moonrise, moonset and hourly moon phase data for global cities in the last 60 days
ref: 2-api-moon
---

Moon and Moon Phase API for getting the last 60 days of moonrise, moonset and moon phase data for cities around the world.

### Request URL

{% include api-url.html flag="moon" %}

### Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="key location date60 lang" %}

### Response

{% include api-snippet.html flag="moon" %}

{% include api-response.html group="astro" type="moon" prefix="nil" %}

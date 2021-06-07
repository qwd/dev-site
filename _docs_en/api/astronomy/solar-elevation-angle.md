---
title: Solar Elevation Angle
tag: api
data: astronomy
version: v7
description: Get global solar elevation angle and azimuth, for autopilot and house construction.
ref: 3-api-solar-elevation-angle
---

Get global solar elevation angle and azimuth, for autopilot and house construction.

### Request URL

{% include api-url.html flag="solar-ea" %}

### Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="key location-coord date time tz alt" %}

### Response

{% include api-snippet.html flag="solar-elevation-angle" %}

{% include api-response.html group="astro" type="sea" prefix="nil" update=0 fxlink=0  %}

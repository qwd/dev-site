---
title: Solar Elevation Angle
tag: [guide, api, astronomy, solar-elevation-angle]
ref: 3-api-solar-elevation-angle
---

Get global solar elevation angle and azimuth.

## Request URL

{% include api-url.html flag="solar-ea" %}

## Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="location-coord date time tz alt" %}

## Request Example

{% include api-url-example.html %}

## Response

{% include api-snippet.html flag="solar-elevation-angle" %}

{% include api-response.html group="astro" type="sea" prefix="nil" update=0 fxlink=0  %}

---
title: Solar Radiation
tag: [guide, api, solar-radiation, hourly]
ref: 1-api-solar-radiation-hourly-forecast
---

Get the net solar radiation, diffuse solar radiation and direct solar radiation for any coordinate position in the world.

> Solar Radiation data is currently available to specific users only, please find out [how to request a trial](https://blog.qweather.com/announce/solar-radiation-trial/)

## Request URL

{% include api-url.html flag="solar-radiation-hourly-forecast" %}

## Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="key location-coord" %}

## Request Example

{% include api-url-example.html %}

## Response

> This data is refers to the downward solar short-wave radiation at the surface, and unit in W/m<sup>2</sup>

{% include api-response.html group="radiation" type="radiation" prefix="radiation" fxlink=0 %}

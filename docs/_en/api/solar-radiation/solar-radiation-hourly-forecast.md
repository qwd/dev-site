---
title: Solar Radiation
tag: [guide, api, solar-radiation, hourly]
ref: 1-api-solar-radiation-hourly-forecast
---

Get the net solar radiation, diffuse solar radiation and direct solar radiation for any coordinate position in the world.

## Request URL

{% include api-url.html flag="solar-radiation-hourly-forecast" %}

> **Note:** Hourly Forecast (72hrs) may be missing the last few hours data under some conditions.
{:.bqwarning}

## Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="key location-coord" %}

## Request Example

{% include api-url-example.html %}

## Response

> This data is refers to the downward solar short-wave radiation at the surface, and unit in W/m<sup>2</sup>

{% include api-response.html group="radiation" type="radiation" prefix="radiation" fxlink=0 %}

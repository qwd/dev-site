---
title: Solar Radiation Hourly Forecast
tag: api
data: astronomy
version: v7
description: QWeather Solar Radiation API supports the access to global radiation data at any coordinate, including net solar radiation, diffuse solar radiation and direct solar radiation
ref: 4-api-solar-radiation-hourly-forecast
---

Get hour-by-hour global solar radiation data.

> This data will be publicly available later this year and is currently restricted to certain users who request access

### Request URL

{% include api-url.html flag="solar-radiation-hourly-forecast" %}

### Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="key location-coord" %}

### Response

> This data is refers to the downward solar short-wave radiation at the surface, and unit in W/m<sup>2</sup>

{% include api-response.html group="radiation" type="radiation" prefix="radiation" fxlink=0 %}

---
title: Solar Radiation Hourly Forecast (deprecated)
tag: [guide, api, solar-radiation, hourly]
deprecated: true
ref: 2-api-solar-radiation-hourly-forecast
---

Get the net solar radiation, diffuse solar radiation and direct solar radiation for any coordinate position in the world.

> **Note:** This API (/v7/solar-radiation/) is deprecated and is expected to be out of service on 2026-09-01. Please use [Solar Radiation Forecast API v1](/en/docs/api/solar-radiation/solar-radiation-forecast/) instead.
{:.bqdanger}

## Endpoint

{% include api-url.html apidata="solar-radiation-hourly" %}

> **Note:** Hourly Forecast (72hrs) may be missing the last few hours data under some conditions.
{:.bqwarning}

## Parameters

#### Path parameters

{% include params.html p="p-hour72h" %}

#### Query parameters

{% include params.html p="location-coord" %}

## Request example

{% include api-url-example.html apidata="solar-radiation-hourly-24h" %}

## Response

> This data is refers to the downward solar short-wave radiation at the surface, and unit in W/m<sup>2</sup>

{% include api-response.html group="radiation" type="radiation" prefix="radiation" fxlink=0 %}

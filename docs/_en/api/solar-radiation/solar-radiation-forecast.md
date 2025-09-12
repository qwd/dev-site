---
title: Solar Radiation Forecast
tag: [guide, api, solar-radiation, forecast]
ref: 1-api-solar-radiation-forecast
---

Provide solar radiation forecasts and related data at 15-minute intervals for any location worldwide, up to 60 hours ahead, with a spatial resolution of 1×1 km.

## Endpoint

{% include api-url.html apidata="solar-radiation-v1" %}

## Parameters

#### Path parameters

{% include params.html p="p-lat p-lon" %}

#### Query parameters

{% include params.html p="q-hour60h q-interval60m q-extra-si" %}

## Request example

{% include api-url-example.html apidata="solar-radiation-v1" %}

## Response

{% include api-snippet.html snippet="solar-radiation-v1" %}

{% include api-response.html group="radiation" type="radiation-v1" prefix="forecasts" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag" %}

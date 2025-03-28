---
title: Minutely Precipitation
tag: [guide, api, minutely, precip]
ref: 1-api-minutely-precipitation
---

Get minute-level precipitation forecast data every 5 minutes for the next 2 hours in China.

> This data is only supported for Chinese cities.

## Endpoint

{% include api-url.html flag="weather-minutely" dev=true %}

## Parameters

#### Query parameters

{% include params.html p="location-coord lang-def" %}

## Request example

{% include api-url-example.html %}

## Response

{% include api-snippet.html flag="minutely" %}

{% include api-response.html group="minutely" prefix="nil"  %}

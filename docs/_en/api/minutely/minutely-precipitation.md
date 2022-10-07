---
title: Minutely Precipitation
tag: [guide, api, minutely, precip]
ref: 1-api-minutely-precipitation
---

Get minute-level precipitation forecast data every 5 minutes for the next 2 hours in China.

> This data is only supported for Chinese cities.

## Request URL

{% include api-url.html flag="weather-minutely" dev=true %}

## Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="location-coord key lang-zhen" %}

## Request Example

{% include api-url-example.html %}

## Response

{% include api-snippet.html flag="minutely" %}

{% include api-response.html group="minutely" prefix="nil"  %}

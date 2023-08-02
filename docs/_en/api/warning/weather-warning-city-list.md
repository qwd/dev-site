---
title: Weather Warning City List
tag: [guide, api, warning, list]
ref: 2-api-weather-warning-city-list
---

Get a list of cities for the specified country or region where weather warnings are currently in effect.

See also [Weather warning API](/en/docs/api/warning/weather-warning/) to get warning details.

> **Note:** Weather Warning City List only supports China (including Hong Kong, Macao and China Taiwan) now. For other countries and regions, please use [Weather Warning](/en/docs/api/warning/weather-warning/).
{:.bqwarning}

> **Tips:** For more warning description, see [Resource - Warning Info](/en/docs/resource/warning-info/).

## Request URL

{% include api-url.html flag="weather-warning-list" dev=true %}

## Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="range-warning key" %}

## Request Example

{% include api-url-example.html %}

## Response

{% include api-snippet.html flag="weather-warning-list" %}

{% include api-response.html group="warning" type="list" prefix="warningLocList" fxlink=0 %}
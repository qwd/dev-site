---
title: Tide
tag: [guide, api, ocean, tide]
ref: 1-api-tide
---

Global tidal data for the next 10 days, including tide table and hourly tide forecast data.

## Request URL

{% include api-url.html flag="tide" %}

## Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="location-p2 date10 key" %}

## Request Example

{% include api-url-example.html %}

## Response

{% include api-snippet.html %}

{% include api-response.html group="ocean" type="ttable thourly" prefix="tideTable tideHourly" %}

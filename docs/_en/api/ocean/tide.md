---
title: Tide
tag: [guide, api, ocean, tide]
ref: 1-api-tide
---

Global tidal data for the next 10 days, including tide table and hourly tide forecast data.

## Endpoint

{% include api-url.html flag="tide" %}

## Parameters

#### Query parameters

{% include params.html p="location-p2 date10" %}

## Request example

{% include api-url-example.html %}

## Response

{% include api-snippet.html %}

{% include api-response.html group="ocean" type="ttable thourly" prefix="tideTable tideHourly" %}

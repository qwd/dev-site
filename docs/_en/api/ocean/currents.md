---
title: Currents
tag: [guide, api, ocean, currents]
ref: 2-api-currents
---

Global currents data for the next 10 days, including currents speed and direction.

## Request URL

{% include api-url.html %}

## Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="location-p6 date10" %}

## Request Example

{% include api-url-example.html %}

## Response

{% include api-snippet.html %}

{% include api-response.html group="ocean" type="ctable chourly" prefix="currentsTable currentsHourly" %}

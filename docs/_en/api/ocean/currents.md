---
title: Currents
tag: [guide, api, ocean, currents]
ref: 2-api-currents
---

Global currents data for the next 10 days, including currents speed and direction.

## Endpoint

{% include api-url.html %}

## Parameters

#### Query parameters

{% include params.html p="location-p6 date10" %}

## Request example

{% include api-url-example.html %}

## Response

{% include api-snippet.html %}

{% include api-response.html group="ocean" type="ctable chourly" prefix="currentsTable currentsHourly" %}

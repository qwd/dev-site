---
title: Currents (Deprecated)
tag: [guide, api, ocean, currents]
deprecated: true
ref: 2-api-currents
---

Global currents data for the next 10 days, including currents speed and direction.

> **Note:** The Currents API is deprecated and is expected to be out of service on 2025-11-01.
{:.bqdanger}

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

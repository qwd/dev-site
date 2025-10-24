---
title: Weather Warning (deprecated)
tag: [guide, api, warning, now]
deprecated: true
ref: 1-api-weather-warning
---

Get officially issued real-time severe weather warning data around the world.

> **Note:** This API (/v7/warning/now) is deprecated and is expected to be out of service on 2026-10-01. Please use [Weather Alert API v1](/en/docs/api/warning/weather-alert/) instead.
{:.bqdanger}

## Endpoint

{% include api-url.html flag="weather-warning" dev=true %}

## Parameters

#### Query parameters

{% include params.html p="location-def lang-def" %}

## Request example

{% include api-url-example.html %}

## Response

{% include api-snippet.html %}

> **Note:** If there is no warning information in the queried location, the `warning` field is empty.
{:.bqwarning}

{% include api-response.html group="warning" type="warning" prefix="warning" %}


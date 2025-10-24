---
title: Weather Warning City List (deprecated)
tag: [guide, api, warning, list]
deprecated: true
ref: 2-api-weather-warning-city-list
---

Get a list of cities for the specified country or region where weather warnings are currently in effect.

> **Note:** This API (/v7/warning/list) is deprecated and is expected to be out of service on 2026-10-01.
{:.bqdanger}

> **Note:** Weather Warning City List only supports China (including Hong Kong, Macao and China Taiwan) now.
{:.bqwarning}

## Endpoint

{% include api-url.html flag="weather-warning-list" dev=true %}

## Parameters

#### Query parameters

{% include params.html p="range-warning" %}

## Request example

{% include api-url-example.html %}

## Response

{% include api-snippet.html flag="weather-warning-list" %}

{% include api-response.html group="warning" type="list" prefix="warningLocList" fxlink=0 %}
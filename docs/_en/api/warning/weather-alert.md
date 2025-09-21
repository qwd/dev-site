---
title: Weather Alert
tag: [guide, api, warning, current]
ref: 1-api-weather-alert
---

Get officially issued real-time severe weather warning data around the world.

> **Hint:** For the implementation of weather warnings, see [Resource - Warning Info](/en/docs/resource/warning-info/) in advance.

## Endpoint

{% include api-url.html apidata="alert-current" %}

## Parameters

#### Path parameters

{% include params.html p="p-lat p-lon" %}

#### Query parameters

{% include params.html p="lang-def" %}

## Request example

{% include api-url-example.html apidata="alert-current" %}

## Response

{% include api-snippet.html snippet="weather-alert-v1-current" %}

{% include api-response.html group="warning" type="alert-v1" prefix="alerts" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag zeroResult attributions" %}

---
title: Weather Warning
tag: [guide, api, warning, now]
ref: 1-api-weather-warning
---

Get officially issued real-time severe weather warning data around the world.

> **Hint:** For the implementation of weather warnings, see [Resource - Warning Info](/en/docs/resource/warning-info/) in advance.

## Request URL

{% include api-url.html flag="weather-warning" dev=true %}

## Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="key location-def" %}

{% include params.html p="lang-def" %}

## Request Example

{% include api-url-example.html %}

## Response

{% include api-snippet.html %}

> **Note:** If there is no warning information in the queried location, the `warning` field is empty.
{:.bqwarning}

{% include api-response.html group="warning" type="warning" prefix="warning" %}


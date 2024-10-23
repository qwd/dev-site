---
title: Sunrise and Sunset
tag: [guide, api, astronomy, sun]
ref: 1-api-sun
---

Get the sunrise and sunset times for the next 60 days at any location worldwide.

## Request URL

{% include api-url.html flag="sun" dev=true %}

## Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="location-def date60" %}

## Request Example

{% include api-url-example.html %}

## Response

{% include api-snippet.html flag="sun" %}

{% include api-response.html group="astro" type="sun" prefix="nil" %}

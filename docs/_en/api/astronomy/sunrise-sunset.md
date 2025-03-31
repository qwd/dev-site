---
title: Sunrise and Sunset
tag: [guide, api, astronomy, sun]
ref: 1-api-sun
---

Get the sunrise and sunset times for the next 60 days at any location worldwide.

## Endpoint

{% include api-url.html flag="sun" dev=true %}

## Parameters

#### Query parameters

{% include params.html p="location-def date60" %}

## Request example

{% include api-url-example.html %}

## Response

{% include api-snippet.html flag="sun" %}

{% include api-response.html group="astro" type="sun" prefix="nil" %}

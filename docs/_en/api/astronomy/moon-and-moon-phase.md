---
title: Moon and Moon Phase
tag: [guide, api, astronomy, moon]
ref: 2-api-moon
---

Get moonrise and moonset and hourly moon phase data for the next 60 days at any location worldwide.

## Request URL

{% include api-url.html flag="moon" dev=true %}

## Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="key location date60 lang" %}

## Request Example

{% include api-url-example.html %}

## Response

{% include api-snippet.html flag="moon" %}

{% include api-response.html group="astro" type="moon" prefix="nil" %}

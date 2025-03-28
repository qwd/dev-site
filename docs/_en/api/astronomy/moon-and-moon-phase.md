---
title: Moon and Moon Phase
tag: [guide, api, astronomy, moon]
ref: 2-api-moon
---

Get moonrise and moonset and hourly moon phase data for the next 60 days at any location worldwide.

## Endpoint

{% include api-url.html flag="moon" dev=true %}

## Parameters

#### Query parameters

{% include params.html p="location-def date60 lang-def" %}

## Request example

{% include api-url-example.html %}

## Response

{% include api-snippet.html flag="moon" %}

{% include api-response.html group="astro" type="moon" prefix="nil" %}

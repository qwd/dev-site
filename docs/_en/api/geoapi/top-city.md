---
title: Top City
tag: [guide, api, geo, top-city]
ref: 2-api-top-city
---

Get a list of popular cities around the world.

## Request URL

{% include api-url.html flag="top-city" %}

## Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="key range number lang-def" %}

## Request Example

{% include api-url-example.html %}

## Response

{% include api-snippet.html flag="top-city" %}

{% include api-response.html group="geo" type="topcity"  prefix="topCityList" update=0 fxlink=0 %}

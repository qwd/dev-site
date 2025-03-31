---
title: Top City
tag: [guide, api, geo, top-city]
ref: 2-api-top-city
---

Get a list of popular cities around the world.

## Endpoint

{% include api-url.html flag="top-city" %}

## Parameters

#### Query parameters

{% include params.html p="range number lang-def" %}

## Request example

{% include api-url-example.html %}

## Response

{% include api-snippet.html flag="top-city" %}

{% include api-response.html group="geo" type="topcity"  prefix="topCityList" update=0 fxlink=0 %}

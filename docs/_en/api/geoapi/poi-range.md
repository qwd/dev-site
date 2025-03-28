---
title: POI Range
tag: [guide, api, geo, poi-range]
ref: 4-api-poi-range
---

POI Range API provides the ability to query all POI information within a specified area.

## Endpoint

{% include api-url.html flag="geo-poi-range" %}

## Parameters

#### Query parameters

{% include params.html p="location-coord geo-type radius number lang-def" %}

## Request example

{% include api-url-example.html %}

## Response

{% include api-snippet.html flag="poi-range" %}

{% include api-response.html group="geo_poi" type="poi" prefix="poi" update=0 fxlink=0 %}

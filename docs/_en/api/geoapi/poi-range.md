---
title: POI Range
tag: [guide, api, geo, poi-range]
ref: 4-api-poi-range
---

POI Range API provides the ability to query all POI information within a specified area.

## Request URL

{% include api-url.html flag="poi-range" %}

## Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="location-coord geo-type key radius number lang" %}

## Request Example

{% include api-url-example.html %}

## Response

{% include api-snippet.html flag="poi-range" %}

{% include api-response.html group="geo_poi" type="poi" prefix="poi" update=0 fxlink=0 %}

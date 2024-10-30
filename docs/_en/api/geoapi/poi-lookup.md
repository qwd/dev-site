---
title: POI Lookup
tag: [guide, api, geo, poi-lookup]
ref: 3-api-poi-lookup
---

POI Lookup API provides basic information of POI(scenic spot, tide stations, currents stations, etc.)

## Request URL

{% include api-url.html flag="geo-poi-lookup" %}

## Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="location-geo geo-type city number lang-def" %}

## Request Example

{% include api-url-example.html %}

## Response

{% include api-snippet.html flag="poi-lookup" %}

{% include api-response.html group="geo_poi" type="poi" prefix="poi" update=0 fxlink=0 %}
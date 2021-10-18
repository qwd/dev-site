---
title: Weather Indices
tag: api
data: indices
version: v7
description: QWeather Weather Indices API includes more than 20 kinds of data such as car wash indices, clothing indices, cold indices, allergy indices, ultraviolet indices, fishing indices, etc. 
ref: api-indices
---

Weather Indices API provides real-time and forecast data including:

- Weather Indices in China: Comfort Indices, Car Wash Indices, Dressing Indices, Cold Indices, Sports Indices, Travel Indices, UV Indices, Air Pollution Indices, Air Conditioning Indices, Allergy Indices, Sunglasses Indices, Makeup Indices, Sunshine Indices, Traffic Indices, Fishing Indices, Sun Protection Indices
- Weather Indices worldwide: Sports Indices, Car Wash Indices, UV Indices, Fishing Indices

## Request URL

{% include api-url.html flag="indices" %}

## Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="location key idx-type lang-zhen" %}

## Response

{% include api-snippet.html flag="indices-1d" %}

{% include api-response.html group="indices" prefix="daily" %}

## Level and Type

See [Indices Info](/en/docs/resource/indices-info/).
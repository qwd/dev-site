---
title: Weather Indices Forecast
tag: [guide, api, indices, forecast]
ref: 1-api-indices-forecast
---

Get weather indices forecast data for cities in China and around the world.

- Weather Indices in China: Comfort Indices, Car Wash Indices, Dressing Indices, Cold Indices, Sports Indices, Travel Indices, UV Indices, Air Pollution Indices, Air Conditioning Indices, Allergy Indices, Sunglasses Indices, Makeup Indices, Sunshine Indices, Traffic Indices, Fishing Indices, Sun Protection Indices
- Weather Indices worldwide: Sports Indices, Car Wash Indices, UV Indices, Fishing Indices

## Request URL

{% include api-url.html flag="indices" dev=true %}

## Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="location key idx-type lang-zhen" %}

## Request Example

{% include api-url-example.html %}

## Response

{% include api-snippet.html flag="indices-1d" %}

{% include api-response.html group="indices" prefix="daily" %}

## Level and Type

See [Indices Info](/en/docs/resource/indices-info/).
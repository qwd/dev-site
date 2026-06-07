---
title: Weather Indices Forecast
tag:
- guide
- api
- indices
- forecast
ref: 1-api-indices-forecast
translationKey: 1-api-indices-forecast
type: docs
---

Get weather indices forecast data for cities in China and around the world.

- Weather Indices in China: Comfort Indices, Car Wash Indices, Dressing Indices, Cold Indices, Sports Indices, Travel Indices, UV Indices, Air Pollution Indices, Air Conditioning Indices, Allergy Indices, Sunglasses Indices, Makeup Indices, Sunshine Indices, Traffic Indices, Fishing Indices, Sun Protection Indices
- Weather Indices worldwide: Sports Indices, Car Wash Indices, UV Indices, Fishing Indices

## Endpoint

{{< api-url apidata="indices-forecast" >}}

## Parameters

#### Path parameters

{{< params p="p-day3d" >}}

#### Query parameters

{{< params p="location-def idx-type lang-def" >}}

## Request example

{{< api-url-example apidata="indices-forecast" >}}

## Response

{{< api-snippet >}}

{{< api-response group="indices" prefix="daily" >}}

## Level and Type

See [Indices Info](/en/docs/resource/indices-info/).

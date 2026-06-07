---
title: Current Air Quality
tag:
- guide
- api
- aq
- now-v1
ref: 1-api-air-now-v1
translationKey: 1-api-air-now-v1
type: docs
---

The current air quality (AQI) API provides real-time air quality data for specified locations, data resolution is 1x1 km.

- AQI, category, color and primary pollutant based on local standards for each country or region
- Generic QWeather AQI
- Pollutant concentration values and their sub-index.
- Health effects and advice
- Associated monitoring station information

We recommend to read [Air Quality Info](/en/docs/resource/air-info/) to learn about the AQIs, pollutants, supported regions and more.

## Endpoint

{{< api-url apidata="air-now-v1-coor" >}}

## Parameters

#### Path Parameters

{{< params p="p-lat p-lon" >}}

#### Query Parameters

{{< params p="lang-def" >}}

## Request example

{{< api-url-example apidata="air-now-v1-coor" >}}

## Response

{{< api-snippet >}}

{{< api-response group="air" type="now-v1" prefix="nil" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag" >}}

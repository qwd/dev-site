---
title: Air Quality Hourly Forecast
tag:
- guide
- api
- aq
- hourly-v1
ref: 1-api-air-hourly-v1
translationKey: 1-api-air-hourly-v1
type: docs
---

The air quality hourly forecast API provides air quality forecast data for each hour of the next 24 hours, including AQI, pollutants concentration, sub-indexes, health effects and advice.

We recommend to read [Air Quality Info](/en/docs/resource/air-info/) to learn about the AQIs, pollutants, supported regions and more.

## Endpoint

{{< api-url apidata="air-hourly-v1-coor" >}}

## Path Parameters

{{< params p="p-lat p-lon" >}}

## Query Parameters

{{< params p="q-localtime lang-def" >}}

## Request example

{{< api-url-example apidata="air-hourly-v1-coor" >}}

## Response

{{< api-snippet >}}

{{< api-response group="air" type="hourly-v1" prefix="hours" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag" >}}

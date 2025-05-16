---
title: Current Air Quality
tag: [guide, api, aq, now-v1]
ref: 1-api-air-now-v1
---

The current air quality (AQI) API provides real-time air quality data for specified locations, data resolution is 1x1 km.

- AQI, category, color and primary pollutant based on local standards for each country or region
- Generic QWeather AQI
- Pollutant concentration values and their sub-index.
- Health effects and advice
- Associated monitoring station information

We recommend to read [Air Quality Info](/en/docs/resource/air-info/) to learn about the AQIs, pollutants, supported regions and more.

## Endpoint

{% include api-url.html apidata="air-now-v1-coor" dev=true %}

## Parameters

#### Path Parameters

{% include params.html p="p-lat p-lon" %}

#### Query Parameters

{% include params.html p="lang-def" %}

## Request example

{% include api-url-example.html apidata="air-now-v1-coor" %}

## Response

{% include api-snippet.html %}

{% include api-response.html group="air" type="now-v1" prefix="nil" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag"  %}
---
title: Air Quality Hourly Forecast
tag: [guide, api, aq, hourly-v1]
ref: 1-api-air-hourly-v1
---

The air quality hourly forecast API provides air quality forecast data for each hour of the next 24 hours, including AQI, pollutants concentration, sub-indexes, health effects and advice.

We recommend to read [Air Quality Info](/en/docs/resource/air-info/) to learn about the AQIs, pollutants, supported regions and more.

## Endpoint

{% include api-url.html apidata="air-hourly-v1-coor" dev=true %}

## Path Parameters

{% include params.html p="p-lat p-lon" %}

## Query Parameters

{% include params.html p="lang-def" %}

## Request example

{% include api-url-example.html apidata="air-hourly-v1-coor" %}

## Response

{% include api-snippet.html %}

{% include api-response.html group="air" type="hourly-v1" prefix="hours" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag"   %}
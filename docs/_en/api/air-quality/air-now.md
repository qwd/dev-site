---
title: Real-time Air Quality (beta)
tag: [guide, api, aq-v1, now-v1]
ref: 1-api-air-now-v1
---
Global air quality real-time data, we provide AQI and pollutant concentration based on the local standard of each country or region, you can check the current hourly real-time data of the city or monitoring station.

> **Note:** New Air Quality v1 is currently in beta and there is no charge for standard subscriptions at this time. Data may vary when the official release.
{:.bqwarning}

> **Hint:** It is recommended to read the [Air Quality Info](/en/docs/resource/air-info/) for details on index types, pollutants, supported countries, etc.

## Request URL

{% include api-url.html apidata="air-now-v1" dev=true %}

## Path Parameters

{% include params.html p="p-location-id" %}

## Query Parameters

{% include params.html p="key lang-def aq-pollutant aq-sta" %}

## Request Example

{% include api-url-example.html apidata="air-now-v1" %}

## Response

{% include api-snippet.html %}

{% include api-response.html group="air" type="now-v1" prefix="nil" fxlink="0" refer="0"  %}
---
title: Real-time Air Quality (beta)
tag: [guide, api, aq-v1, now-v1]
ref: 1-api-air-now-v1
---
Global air quality real-time data, we provide AQI and pollutant concentration based on the local standard of each country or region, you can check the current hourly real-time data of the city or monitoring station.

> **Note:** New Air Quality v1 is currently in beta and there is no charge for standard subscriptions at this time. Data may vary when the official release.
{:.bqwarning}

## Request URL

{% include api-url.html apidata="air-now-v1 air-now-v1-coor" title=true dev=true %}

## Path Parameters

{% include params.html p="p-location-id p-lon p-lat" %}

## Query Parameters

{% include params.html p="key lang-def" %}

## Request Example

{% include api-url-example.html apidata="air-now-v1" dev=true %}

## Response

{% include api-snippet.html flag="air-now-v1" %}

{% include api-response.html group="air" type="now-v1" prefix="nil" refer="0"  %}

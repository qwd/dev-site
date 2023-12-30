---
title: Monitoring Station Data(beta)
tag: [guide, api, aq-v1, station-v1]
ref: 1-api-air-station-v1
---

Real-time data from global air quality monitoring stations, providing pollutant concentration from monitoring stations in each country or region.

> **Note:** New Monitoring Station Data v1 is currently in beta and there is no charge for standard subscriptions at this time. Data may vary when the official release.
{:.bqwarning}

> **Warning:** Monitoring Station Data is experimental and for reference only, it may be affected by various factors, we cannot ensure the availability of this data, please use the air quality data as a priority.
{:.bqdanger}

## Request URL

{% include api-url.html apidata="air-station-v1" dev=true %}

## Path Parameters

{% include params.html p="p-location-id-aqsta" %}

## Query Parameters

{% include params.html p="key lang-def" %}

## Request Example

{% include api-url-example.html apidata="air-station-v1" dev=true %}

## Response

{% include api-snippet.html snippet="aq-v1-station-v1" %}

{% include api-response.html group="air" type="station-v1" prefix="nil" fxlink="0" refer="0"  %}
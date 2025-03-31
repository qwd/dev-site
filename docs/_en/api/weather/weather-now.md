---
title: Real-time Weather
tag: [guide, api, weather, now]
ref: 1-api-weather-now
---

Get real-time weather data for 200,000+ cities around the world, including temperature, wind, humidity, pressure, precipitation, visibility, etc.

> **Note:** The real-time data are all near real-time data. Compared with the real physical world, it will be delayed by 5-20 minutes. Please determine the accurate time corresponding to the data according to the `obsTime` in the data.

## Endpoint

{% include api-url.html dev=true %}

## Parameters

#### Query parameters

{% include params.html flag="weather" p="location-def lang-def unit-def"%}

## Request example

{% include api-url-example.html %}

## Response

{% include api-snippet.html flag="weather-now" %}

{% include api-response.html group="weather" type="now" prefix="now" %}

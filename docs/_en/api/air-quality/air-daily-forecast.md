---
title: Air Quality Daily Forecast (new)
tag: [guide, api, aq-v1, daily-v1]
ref: 1-api-air-daily-v1
---

Air quality (AQI) dailay forecasts, pollutants, and health advice for the next 3 days.

We recommend to read [Air Quality Info](/en/docs/resource/air-info/) to learn about the AQIs, pollutants, supported regions and more.

## Request URL

{% include api-url.html apidata="air-daily-v1-coor" dev=true %}

## Path Parameters

{% include params.html p="p-lat p-lon" %}

## Query Parameters

{% include params.html p="key lang-def" %}

## Request Example

{% include api-url-example.html apidata="air-daily-v1-coor" %}

## Response

{% include api-snippet.html %}

{% include api-response.html group="air" type="daily-v1" prefix="dailyForecasts" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag"  %}
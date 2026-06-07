---
title: Air Quality Daily Forecast
tag:
- guide
- api
- aq
- daily-v1
ref: 1-api-air-daily-v1
translationKey: 1-api-air-daily-v1
type: docs
---

Air quality (AQI) dailay forecasts, pollutants, and health advice for the next 3 days.

We recommend to read [Air Quality Info](/en/docs/resource/air-info/) to learn about the AQIs, pollutants, supported regions and more.

## Endpoint

{{< api-url apidata="air-daily-v1-coor" >}}

## Path Parameters

{{< params p="p-lat p-lon" >}}

## Query Parameters

{{< params p="q-localtime lang-def" >}}

## Request example

{{< api-url-example apidata="air-daily-v1-coor" >}}

## Response

{{< api-snippet >}}

{{< api-response group="air" type="daily-v1" prefix="dailyForecasts" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag" >}}

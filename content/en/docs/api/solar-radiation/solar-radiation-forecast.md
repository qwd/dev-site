---
title: Solar Radiation Forecast
tag:
- guide
- api
- solar-radiation
- forecast
ref: 1-api-solar-radiation-forecast
translationKey: 1-api-solar-radiation-forecast
type: docs
---

Provide solar radiation forecasts and related data at 15-minute intervals for any location worldwide, up to 60 hours ahead, with a spatial resolution of 1×1 km.

## Endpoint

{{< api-url apidata="solar-radiation-v1" >}}

## Parameters

#### Path parameters

{{< params p="p-lat p-lon" >}}

#### Query parameters

{{< params p="q-hour60h q-interval60m q-tilt-si q-azimuth-si q-extra-si q-localtime" >}}

## Request example

{{< api-url-example apidata="solar-radiation-v1" >}}

## Response

{{< api-snippet snippet="solar-radiation-v1" >}}

{{< api-response group="radiation" type="radiation-v1" prefix="forecasts" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag" >}}

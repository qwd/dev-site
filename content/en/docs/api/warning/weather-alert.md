---
title: Weather Alert
tag:
- guide
- api
- warning
- current
ref: 1-api-weather-alert
translationKey: 1-api-weather-alert
type: docs
---

Get officially issued real-time severe weather alert data around the world.

> **Hint:** For the implementation of weather alert, see [Resource - Alert Info](/en/docs/resource/warning-info/) in advance.

## Endpoint

{{< api-url apidata="alert-current" >}}

## Parameters

#### Path parameters

{{< params p="p-lat p-lon" >}}

#### Query parameters

{{< params p="q-localtime lang-def" >}}

## Request example

{{< api-url-example apidata="alert-current" >}}

## Response

{{< api-snippet snippet="weather-alert-v1-current-en" >}}

{{< api-response group="warning" type="alert-v1" prefix="alerts" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag zeroResult attributions" >}}

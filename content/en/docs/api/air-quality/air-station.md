---
title: Monitoring Station Data
tag:
- guide
- api
- aq
- station-v1
ref: 1-api-air-station-v1
translationKey: 1-api-air-station-v1
type: docs
---

Monitoring Station Data API provides pollutant concentration values from air quality monitoring stations in each country or region.

> **Warning:** Monitoring station data is for reference only, it may be delayed, incorrect or unavailable due to various reasons such as failure, removal, maintenance or local laws and regulations.
{.bqdanger}
## Endpoint

{{< api-url apidata="air-station-v1" >}}

## Path Parameters

{{< params p="p-location-id-aqsta" >}}

## Query Parameters

{{< params p="lang-def" >}}

## Request example

{{< api-url-example apidata="air-station-v1" >}}

## Response

{{< api-snippet snippet="aq-v1-station-v1" >}}

{{< api-response group="air" type="station-v1" prefix="nil" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag sources" >}}

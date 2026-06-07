---
title: Tide
tag:
- guide
- api
- ocean
- tide
ref: 1-api-tide
translationKey: 1-api-tide
type: docs
---

Global tidal data for the next 10 days, including tide table and hourly tide forecast data.

## Endpoint

{{< api-url >}}

## Parameters

#### Query parameters

{{< params p="location-p2 date10" >}}

## Request example

{{< api-url-example >}}

## Response

{{< api-snippet >}}

{{< api-response group="ocean" type="ttable thourly" prefix="tideTable tideHourly" >}}

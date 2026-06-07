---
title: Storm Forecast
tag:
- guide
- api
- storm
- forecast
ref: 3-api-storm-forecast
translationKey: 3-api-storm-forecast
type: docs
---

Storm Forecast API provides tropical cyclones information for a specific tropical cyclone, the data including forecast tropical cyclones location, level, pressure, wind and etc.

> **Note:** For inactive storms, the returned data is **NULL**, please get the storms status by [Storm List API](/en/docs/api/tropical-cyclone/storm-list/) first. 

## Endpoint

{{< api-url >}}

## Parameters

#### Query parameters

{{< params p="stormid" >}}

## Request example

{{< api-url-example >}}

## Response

{{< api-snippet >}}

{{< api-response group="storm" type="forecast" prefix="forecast" >}}

## Typhoon level

GBT 19201-2006

| Tropical cyclone level | Maximum average wind speed near the bottom center (m/s) | Maximum wind near the bottom center (level) |
| ------------------- | ----------------------------- | ------------------------ |
| Tropical pressure (TD) | 10.8-17.1 | 6-7 |
| Tropical Storm (TS) | 17.2-24.4 | 8-9 |
| Severe Tropical Storm (STS) | 24.5-32.6 | 10-11 |
| Typhoon (TY) | 32.7-41.4 | 12-13 |
| Severe Typhoon (STY) | 41.5-50.9 | 14-15 |
| Super Typhoon (SuperTY) | ≥51.0 | 16 or above |

---
title: Grid Weather Real-time
tag:
- guide
- api
- weather
- grid-now
ref: 1-api-grid-weather-now
translationKey: 1-api-grid-weather-now
type: docs
---

Weather forecast data based on numerical models, to provide current weather data at specified coordinates around the world, with a spatial resolution of 3-5 kilometers.

> **Hint:** The grid weather data is based on Numerical Weather Prediction (NWP) models, and it is not suitable for comparison with observation station data. For station-based city weather data, please refer to the [City Weather API](/en/docs/api/weather/weather-now/). Grid weather uses UTC+0 as the time zone.

## Endpoint

{{< api-url >}}

## Parameters

#### Query parameters

{{< params p="location-coord lang-def unit-def" >}}

## Request example

{{< api-url-example >}}

## Response

{{< api-snippet >}}

{{< api-response group="weather" type="gnow" prefix="now" >}}

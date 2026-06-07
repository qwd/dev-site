---
title: Grid Weather Daily Forecast
tag:
- guide
- api
- weather
- grid-daily
ref: 2-api-grid-weather-daily-forecast
translationKey: 2-api-grid-weather-daily-forecast
type: docs
---

Weather forecast data based on numerical models, to provide daily weather forecasts at specified coordinates around the world, with a spatial resolution of 3-5 kilometers.

> **Hint:** The grid weather data is based on Numerical Weather Prediction (NWP) models, and it is not suitable for comparison with observation station data. For station-based city weather data, please refer to the [City Weather API](/en/docs/api/weather/weather-daily-forecast/). Grid weather uses UTC+0 as the time zone.

## Endpoint

{{< api-url apidata="weather-grid-daily" >}}

## Parameters

#### Path parameters

{{< params p="p-day7d" >}}

#### Query parameters

{{< params p="location-coord lang-def unit-def" >}}

## Request example

{{< api-url-example >}}

## Response

{{< api-snippet >}}

{{< api-response group="weather" type="gdaily" prefix="daily" >}}

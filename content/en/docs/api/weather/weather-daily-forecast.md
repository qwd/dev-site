---
title: Weather Daily Forecast
tag:
- guide
- api
- weather
- daily
ref: 2-api-weather-daily-forecast
translationKey: 2-api-weather-daily-forecast
type: docs
---

Get weather daily forecasts for the next 3-30 days for cities around the world.

## Endpoint

{{< api-url apidata="weather-daily" >}}
  
## Parameters

#### Path parameters

{{< params p="p-day30d" >}}

#### Query parameters

{{< params p="location-def lang-def unit-def" >}}

## Request example

{{< api-url-example >}}

## Response

{{< api-snippet >}}

{{< api-response group="weather" type="daily" prefix="daily" >}}

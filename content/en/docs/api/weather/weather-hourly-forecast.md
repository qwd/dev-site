---
title: Weather Hourly Forecast
tag:
- guide
- api
- weather
- hourly
ref: 3-api-weather-hourly-forecast
translationKey: 3-api-weather-hourly-forecast
type: docs
---

Get hourly weather forecasts for cities around the world for the next 24-168 hours.

## Endpoint

{{< api-url apidata="weather-hourly" >}}
  
## Parameters

#### Path parameters

{{< params p="p-hour168h" >}}

#### Query parameters

{{< params p="location-def lang-def unit-def" >}}

## Request example

{{< api-url-example >}}

## Response

{{< api-snippet >}}

{{< api-response group="weather" type="hourly" prefix="hourly" >}}

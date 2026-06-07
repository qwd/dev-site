---
title: Time Machine for Weather
tag:
- guide
- api
- time-machine
- weather
ref: 1-api-historical-weather
translationKey: 1-api-historical-weather
type: docs
---

Get the last 10 days of weather history data.

> Let's say, today is December 30, you can get historical data from Dec. 20 to Dec. 29.

> QWeather also provides historical reanalysis weather data from 2000 to present. If you need more historical weather data, please provide the following information to <sales@qweather.com>.
> 
> * Company name
> * Contact information
> * City or coordinates
> * Date range

## Endpoint

{{< api-url >}}

## Parameters

#### Query parameters

{{< params p="location-id date10back lang-def unit-def" >}}

## Request example

{{< api-url-example >}}

## Response

{{< api-snippet >}}

{{< api-response group="hisweather" type="daily hourly" prefix="weatherDaily weatherHourly" update="0" >}}

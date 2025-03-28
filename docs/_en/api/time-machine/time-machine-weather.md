---
title: Time Machine for Weather
tag: [guide, api, time-machine, weather]
ref: 1-api-historical-weather
---

Get the last 10 days of weather history data.

> Let's say, today is December 30, you can get historical data from Dec. 20 to Dec. 29.

> QWeather also provides historical reanalysis weather data from 2000 to present. If you need more historical weather data, please provide the following information to <sales@qweather.com>.
> 
> * Company name
> * Contact information
> * City or coordinates
> * Date range

## Request URL

{% include api-url.html flag="his-weather" %}

## Request parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="location-id date10back lang-def unit-def" %}

## Request Example

{% include api-url-example.html %}

## Response

{% include api-snippet.html flag="his-weather"%}

{% include api-response.html group="hisweather" type="daily hourly" prefix="weatherDaily weatherHourly" update=0 %}
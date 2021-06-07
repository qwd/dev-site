---
title: Historical Weather
tag: api
data: historical
version: v7
description: QWeather historical weather API supports historical weather data from January 1, 2010 to present, historical weather API supports query of historical data of the last 10 days, all historical data can be downloaded at one time, Please contact us for details
ref: 1-api-historical-weather
---

Get the last 10 days of weather history data.

> Let's say, today is December 30, you can get historical data from Dec. 20 to Dec. 29.

> We also provide historical weather data for China from 2010 to present, please [contact us](https://www.qweather.com/en/contact).

## Request URL

{% include api-url.html flag="his-weather" %}

## Request parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="location-id date10back key lang unit" %}

### Response

{% include api-snippet.html flag="his-weather"%}

{% include api-response.html group="hisweather" type="daily hourly" prefix="weatherDaily weatherHourly" update=0 %}
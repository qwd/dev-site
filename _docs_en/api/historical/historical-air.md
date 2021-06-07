---
title: Historical Air Quality
tag: api
data: historical
version: v7
description: QWeather historical air quality API supports historical air quality data in the last 10 days. If you need to query historical air quality for a longer period of time, please contact us
ref: 2-api-historical-air
---

Get the last 10 days of air quality history data.

> Let's say, today is December 30, you can get data from Dec. 20 to Dec. 29.

> We also provide historical weather data for China from 2015 to present, please [contact us](https://www.qweather.com/en/contact).

## Request URL

{% include api-url.html flag="his-air" %}

## Request parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="location-id date10back key lang" %}

### Response

{% include api-snippet.html flag="his-air"%}

{% include api-response.html group="air" type="now" prefix="airHourly" update=0 %}

---
title: Real-time Weather
tag: api
data: weather
version: v7
description: QWeather Global Real-time Weather API supports real-time weather data in  150,000 cities around the world, including real-time temperature, feels like, wind direction, relative humidity, atmospheric pressure, precipitation, visibility, dew point temperature, cloud cover and other data.
ref: 1-api-weather-now
---

Real-time weather data for 150,000 cities around the world, including real-time temperature, wind direction, relative humidity, atmospheric pressure, precipitation, visibility, dew point temperature, cloud cover and other data.

### Request URL

{% include api-url.html %}

### Request Parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html flag="weather" p="key location lang unit"%}

### Response

{% include api-snippet.html flag="weather-now" %}

> The real-time data are all near real-time data. Compared with the real physical world, it will be delayed by 5-20 minutes. Please determine the accurate time corresponding to the data according to the `obsTime` in the data.

{% include api-response.html group="weather" type="now" prefix="now" %}

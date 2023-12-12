---
title: Time Machine for Air Quality
tag: [guide, api, time-machine, air]
ref: 2-api-historical-air
---

Get the last 10 days of air quality history data.

> Let's say, today is December 30, you can get data from Dec. 20 to Dec. 29.

## Request URL

{% include api-url.html flag="his-air" %}

## Request parameters

All parameters are separated by `&`. If no optional parameters are set, the default value will be used.

{% include params.html p="location-id date10back key lang-def" %}

## Request Example

{% include api-url-example.html %}

## Response

{% include api-snippet.html flag="his-air"%}

{% include api-response.html group="air" type="now" prefix="airHourly" update=0 %}

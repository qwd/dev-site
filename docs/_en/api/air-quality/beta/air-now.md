---
title: Real-time Air Quality (beta)
tag: [guide, api, air, now-v1]
ref: 1-api-air-now-v1
---
Global air quality real-time data, we provide AQI and pollutant concentration based on the local standard of each country or region, you can check the current hourly real-time data of the city or monitoring station.

> **Note:** Air Quality new v1 is currently in beta and there is no charge for standard subscriptions at this time. Data may vary when the official release.
{:.bqwarning}

## Request URL

{% include api-url.html apidata="air-now-v1" apiver=nil dev=true %}

## Request Parameters

请求参数包括必选和可选参数，参数之间使用`&`进行分隔。

{% include params.html p="key lang-def" %}

## Request Example

{% include api-url-example.html apidata="air-now-v1" dev=true %}

## Response

{% include api-snippet.html flag="air-now-v1" %}

{% include api-response.html group="air" type="now-v1" prefix="nil" refer="0"  %}

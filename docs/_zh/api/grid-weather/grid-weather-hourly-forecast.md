---
title: 格点逐小时天气预报
tag: [guide, api, grid-weather, hourly]
ref: 3-api-grid-weather-hourly-forecast
---

基于全球任意坐标的高精度逐小时天气预报，精确到3-5公里范围，包括温度、湿度、大气压、天气状况、风力、风向等。

## 请求URL

{% include api-url.html apidata="grid-weather-hourly-24h grid-weather-hourly-72h" title=true dev=true %}

## 请求参数

请求参数包括必选和可选参数，参数之间使用`&`进行分隔。

{% include params.html p="key location-coord lang-def unit" %}

## 请求示例

{% include api-url-example.html apidata="grid-weather-hourly-24h" %}

## 返回数据

{% include api-snippet.html %}

{% include api-response.html group="weather" type="ghourly" prefix="hourly"  %}


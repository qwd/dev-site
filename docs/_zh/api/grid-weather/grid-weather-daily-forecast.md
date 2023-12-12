---
title: 格点每日天气预报
tag: [guide, api, grid-weather, daily]
ref: 2-api-grid-weather-daily-forecast
---

基于全球任意坐标的高精度每日天气预报，精确到3-5公里范围，包括温度、湿度、大气压、天气状况、风力、风向等。

## 请求URL

{% include api-url.html apidata="grid-weather-daily-3d grid-weather-daily-7d" title=true dev=true %}

## 请求参数

请求参数包括必选和可选参数，参数之间使用`&`进行分隔。

{% include params.html p="key location-coord lang-def unit-def" %}

## 请求示例

{% include api-url-example.html apidata="grid-weather-daily-3d" %}

## 返回数据

{% include api-snippet.html flag="grid-weather-daily-forecast" %}

{% include api-response.html group="weather" type="gdaily" prefix="daily"  %}

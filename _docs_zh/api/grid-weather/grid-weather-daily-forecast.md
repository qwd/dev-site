---
title: 格点天气预报
tag: api
data: grid-weather
version: v7
description: 和风天气1公里格点高精度天气预报，精确到街道、小区的天气数据，包括：温度、湿度、大气压、天气状况、风力、风向等
ref: api-grid-weather-daily-forecast
---

获取全球任意经纬度的高精度天气预报，包括：温度、湿度、大气压、天气状况、风力、风向等。

> 根据不同地区，空间分辨率为1x1，3x3或5x5公里。

## 请求URL

{% include api-url.html %}

## 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

{% include params.html p="key location-coord lang unit" %}

## 返回数据

{% include api-snippet.html flag="grid-weather-daily-forecast" %}

{% include api-response.html group="weather" type="gdaily" prefix="daily"  %}

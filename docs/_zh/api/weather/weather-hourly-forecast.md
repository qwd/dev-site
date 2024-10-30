---
title: 逐小时天气预报
tag: [guide, api, weather, hourly]
ref: 3-api-weather-hourly-forecast
---

逐小时天气预报API，提供全球城市未来24-168小时逐小时天气预报，包括：温度、天气状况、风力、风速、风向、相对湿度、大气压强、降水概率、露点温度、云量。

## 请求URL

{% include api-url.html apidata="weather-hourly-24h weather-hourly-72h weather-hourly-168h" title=true dev=true %}

  
## 请求参数

{% include params.html p="location-def lang-def unit-def" %}

## 请求示例

{% include api-url-example.html apidata="weather-hourly-24h" %}

## 返回数据

{% include api-snippet.html flag="weather-hourly" %}

{% include api-response.html group="weather" type="hourly" prefix="hourly" %}
---
title: 格点逐小时天气预报
tag: [guide, api, grid-weather, hourly]
ref: 3-api-grid-weather-hourly-forecast
---

基于全球任意坐标的高精度逐小时天气预报，精确到3-5公里范围，包括温度、湿度、大气压、天气状况、风力、风向等。

## 请求路径 {#endpoint}

{% include api-url.html apidata="grid-weather-hourly-24h grid-weather-hourly-72h" title=true dev=true %}

## 参数 {#parameters}

#### 查询参数 {#query-parameters}

{% include params.html p="location-coord lang-def unit-def" %}

## 请求示例 {#request-example}

{% include api-url-example.html apidata="grid-weather-hourly-24h" %}

## 返回数据 {#response}

{% include api-snippet.html %}

{% include api-response.html group="weather" type="ghourly" prefix="hourly"  %}


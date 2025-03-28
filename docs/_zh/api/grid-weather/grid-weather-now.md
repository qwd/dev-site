---
title: 格点实时天气
tag: [guide, api, grid-weather, now]
ref: 1-api-grid-weather-now
---

基于全球任意坐标的高精度实时天气，精确到3-5公里范围，包括：温度、湿度、大气压、天气状况、风力、风向等。

## 请求路径 {#endpoint}

{% include api-url.html dev=true %}

## 参数 {#parameters}

#### 查询参数 {#query-parameters}

{% include params.html p="location-coord lang-def unit-def" %}

## 请求示例 {#request-example}

{% include api-url-example.html %}

## 返回数据 {#response}

{% include api-snippet.html %}

{% include api-response.html group="weather" type="gnow" prefix="now"  %}

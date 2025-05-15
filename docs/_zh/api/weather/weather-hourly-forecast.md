---
title: 逐小时天气预报
tag: [guide, api, weather, hourly]
ref: 3-api-weather-hourly-forecast
---

逐小时天气预报API，提供全球城市未来24-168小时逐小时天气预报，包括：温度、天气状况、风力、风速、风向、相对湿度、大气压强、降水概率、露点温度、云量。

## 请求路径 {#endpoint}

{% include api-url.html apidata="weather-hourly" %}

## 参数 {#parameters}

#### 路径参数 {#path-parameters}

{% include params.html p="p-hour168h" %}

#### 查询参数 {#query-parameters}

{% include params.html p="location-def lang-def unit-def" %}

## 请求示例 {#request-example}

{% include api-url-example.html %}

## 返回数据 {#response}

{% include api-snippet.html flag="weather-hourly" %}

{% include api-response.html group="weather" type="hourly" prefix="hourly" %}
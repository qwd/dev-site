---
title: 每日天气预报
tag: [guide, api, weather, daily]
ref: 2-api-weather-daily-forecast
---

每日天气预报API，提供全球城市未来3-30天天气预报，包括：日出日落、月升月落、最高最低温度、天气白天和夜间状况、风力、风速、风向、相对湿度、大气压强、降水量、露点温度、紫外线强度、能见度等。

## 请求路径 {#endpoint}

{% include api-url.html apidata="weather-daily-3d weather-daily-7d weather-daily-10d weather-daily-15d weather-daily-30d" title=true dev=true %}
  
## 参数 {#parameters}

#### 查询参数 {#query-parameters}

{% include params.html p="location-def lang-def unit-def" %}

## 请求示例 {#request-example}

{% include api-url-example.html apidata="weather-daily-3d" %}

## 返回数据 {#response}

{% include api-snippet.html flag="weather-daily" %}

{% include api-response.html group="weather" type="daily" prefix="daily" %}


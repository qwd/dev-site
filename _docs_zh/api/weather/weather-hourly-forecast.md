---
title: 逐小时天气预报
tag: api
data: weather
version: v7
description: 和风天气逐小时天气预报API，提供全球城市未来168小时逐小时天气预报，包括：温度、天气状况、风力、风速、风向、相对湿度、大气压强、降水概率、露点温度、云量。
ref: 3-api-weather-hourly-forecast
---

全球城市未来168小时逐小时天气预报，包括：温度、天气状况、风力、风速、风向、相对湿度、大气压强、降水概率、露点温度、云量。

### 请求URL

{% include api-url.html flag="weather-hourly" %}
  
### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

{% include params.html p="location key lang unit" %}

### 返回数据

{% include api-snippet.html flag="weather-hourly" %}

{% include api-response.html group="weather" type="hourly" prefix="hourly" %}
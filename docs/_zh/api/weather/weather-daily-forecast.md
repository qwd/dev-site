---
title: 每日天气预报
tag: [guide, api, weather, daily]
ref: 2-api-weather-daily-forecast
---

每日天气预报API，提供全球城市未来3-30天天气预报，包括：日出日落、月升月落、最高最低温度、天气白天和夜间状况、风力、风速、风向、相对湿度、大气压强、降水量、降水概率、露点温度、紫外线强度、能见度等。

## 请求URL

{% include api-url.html flag="weather-daily" dev=true %}
  
## 请求参数

请求参数包括必选和可选参数，参数之间使用`&`进行分隔。

{% include params.html p="location key lang unit" %}

## 请求示例

{% include api-url-example.html %}

## 返回数据

{% include api-snippet.html flag="weather-daily" %}

{% include api-response.html group="weather" type="daily" prefix="daily" %}


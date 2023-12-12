---
title: 实时天气
tag: [guide, api, weather, now]
ref: 1-api-weather-now
---

获取中国3000+市县区和海外20万个城市实时天气数据，包括实时温度、体感温度、风力风向、相对湿度、大气压强、降水量、能见度、露点温度、云量等。

> **注意：**实况数据均为近实时数据，相比真实的物理世界有5-20分钟的延迟，请根据实况数据中的`obsTime`确定数据对应的准确时间。

## 请求URL

{% include api-url.html flag="weather-now" dev=true %}

## 请求参数

请求参数包括必选和可选参数，参数之间使用`&`进行分隔。

{% include params.html flag="weather" p="key location lang-def unit-def"%}

## 请求示例

{% include api-url-example.html %}

## 返回数据

{% include api-snippet.html flag="weather-now" %}

{% include api-response.html group="weather" type="now" prefix="now" %}
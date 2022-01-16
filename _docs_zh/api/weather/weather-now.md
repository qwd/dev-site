---
title: 实时天气
tag: api
data: weather
version: v7
description: 和风全球实时天气API，支持全国4000+个市县区和海外15万个城市实时天气数据，包括实时温度、体感温度、风力风向、相对湿度、大气压强、降水量、能见度、露点温度、云量等数据。
ref: 1-api-weather-now
---

全国4000+个市县区和海外15万个城市实时天气数据，包括实时温度、体感温度、风力风向、相对湿度、大气压强、降水量、能见度、露点温度、云量等数据。

### 请求URL

{% include api-url.html flag="weather-now" %}

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

{% include params.html flag="weather" p="key location lang unit"%}

### 返回数据

{% include api-snippet.html flag="weather-now" %}

> 实况数据均为近实时数据，相比真实的物理世界会5-20分钟的延迟，请根据实况数据中的`obsTime`确定数据对应的准确时间。

{% include api-response.html group="weather" type="now" prefix="now" %}
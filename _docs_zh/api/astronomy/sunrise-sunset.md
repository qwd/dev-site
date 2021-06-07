---
title: 日出日落
tag: api
data: astronomy
version: v7
description: 和风天气日出日落API接口提供了全球任意时间任意地点的日出日落的时间，通过这些数据我们可以完整的描述一天之中太阳的变化。
ref: 1-api-sun
---

获取最近60天全球城市日出日落时间。

> 在[逐天预报API](/docs/api/weather)中，也会返回对应天数的日出日落、月升月落和月相数据

### 请求URL

{% include api-url.html flag="sun" %}

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

{% include params.html p="key location date60 lang" %}

### 返回数据

{% include api-snippet.html flag="sun" %}

{% include api-response.html group="astro" type="sun" prefix="nil" %}

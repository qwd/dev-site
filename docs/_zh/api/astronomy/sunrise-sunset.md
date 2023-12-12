---
title: 日出日落
tag: [guide, api, astronomy, sun]
ref: 1-api-sun
---

获取未来60天全球任意地点日出日落时间。

> 在[逐天预报API](/docs/api/weather)中，也会返回对应天数的日出日落、月升月落和月相数据

## 请求URL

{% include api-url.html flag="sun" dev=true %}

## 请求参数

请求参数包括必选和可选参数，参数之间使用`&`进行分隔。

{% include params.html p="key location-def date60" %}

## 请求示例

{% include api-url-example.html %}

## 返回数据

{% include api-snippet.html flag="sun" %}

{% include api-response.html group="astro" type="sun" prefix="nil" %}

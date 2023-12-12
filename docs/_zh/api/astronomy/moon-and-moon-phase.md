---
title: 月升月落和月相
tag: [guide, api, astronomy, moon]
ref: 2-api-moon
---

获取未来60天全球城市月升月落和逐小时的月相数据。

> 月相已考虑南北半球的差异，不需要再进行转换

## 请求URL

{% include api-url.html flag="moon" dev=true %}

## 请求参数

请求参数包括必选和可选参数，参数之间使用`&`进行分隔。

{% include params.html p="key location-def date60 lang-def" %}

## 请求示例

{% include api-url-example.html %}

## 返回数据

{% include api-snippet.html flag="moon" %}

{% include api-response.html group="astro" type="moon" prefix="nil" %}


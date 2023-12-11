---
title: 天气灾害预警
tag: [guide, api, warning, now]
ref: 1-api-weather-warning
---

天气灾害预警API可以获取中国及全球多个国家或地区官方发布的实时天气灾害预警数据。

> **提示：**天气预警有较多规则和需要注意的事项，在开始使用天气预警之前，你应该先阅读[实用资料-预警信息](/docs/resource/warning-info/)。

## 请求URL

{% include api-url.html flag="weather-warning" dev=true  %}

## 请求参数

请求参数包括必选和可选参数，参数之间使用`&`进行分隔。

{% include params.html p="key location lang-def" %}

## 请求示例

{% include api-url-example.html %}

## 返回数据

{% include api-snippet.html %}

> **注意：**如果查询的地区当前没有灾害预警信息，返回的`warning`字段为空。
{:.bqwarning}

{% include api-response.html group="warning" type="warning" prefix="warning" %}

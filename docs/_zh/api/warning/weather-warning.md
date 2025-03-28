---
title: 天气灾害预警
tag: [guide, api, warning, now]
ref: 1-api-weather-warning
---

天气灾害预警API可以获取中国及全球多个国家或地区官方发布的实时天气灾害预警数据。

> **提示：**天气预警有较多规则和需要注意的事项，在开始使用天气预警之前，你应该先阅读[实用资料-预警信息](/docs/resource/warning-info/)。

## 请求路径 {#endpoint}

{% include api-url.html flag="weather-warning" dev=true  %}

## 参数 {#parameters}

#### 查询参数 {#query-parameters}

{% include params.html p="location-def lang-def" %}

## 请求示例 {#request-example}

{% include api-url-example.html %}

## 返回数据 {#response}

{% include api-snippet.html %}

> **注意：**如果查询的地区当前没有灾害预警信息，返回的`warning`字段为空。
{:.bqwarning}

{% include api-response.html group="warning" type="warning" prefix="warning" %}

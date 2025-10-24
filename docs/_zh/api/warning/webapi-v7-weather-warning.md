---
title: 天气预警（弃用）
tag: [guide, api, warning, now]
ref: 1-api-weather-warning
deprecated: true
redirect_from: /docs/api/warning/weather-warning/
---

天气灾害预警API可以获取中国及全球多个国家或地区官方发布的实时天气灾害预警数据。

> **警告：**当前API（/v7/warning/now）已弃用，预计在2026年10月1日停止服务。请使用[极端天气预警 v1版本](/docs/api/warning/weather-alert/)替代。
{:.bqdanger}

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

---
title: 空气质量每日预报(弃用)
tag: [guide, api, aq, daily]
ref: 2-api-air-daily-forecast
---

空气质量每日预报API，支持全国3000+市县区空气质量预报数据的查询，包括AQI预报、首要污染物预报、空气质量等级预报。

> **警告：**当前API（/v7/air/5d）已弃用，预计在2026年6月1日停止服务。请使用[空气质量API v1新版本](/docs/api/air-quality/air-daily-forecast/)替代。
{:.bqdanger}

## 请求路径 {#endpoint}

{% include api-url.html apidata="air-daily" %}

## 参数 {#parameters}

#### 查询参数 {#query-parameters}

{% include params.html p="location-def lang-def" %}

## 请求示例 {#request-example}

{% include api-url-example.html apidata="air-daily" %}

## 返回数据 {#response}

{% include api-snippet.html %}

{% include api-response.html group="air" type="daily"  prefix="daily" %}

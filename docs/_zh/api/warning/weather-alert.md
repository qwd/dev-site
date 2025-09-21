---
title: 极端天气预警
tag: [guide, api, warning, current]
ref: 1-api-weather-alert
---

获取中国及全球多个国家或地区官方发布的实时极端天气预警数据。

> **提示：**天气预警有较多规则和需要注意的事项，在开始使用天气预警之前，你应该先阅读[实用资料-预警信息](/docs/resource/warning-info/)。

## 请求路径 {#endpoint}

{% include api-url.html apidata="alert-current" %}

## 参数 {#parameters}

#### 路径参数 {#path-parameters}

{% include params.html p="p-lat p-lon" %}

#### 查询参数 {#query-parameters}

{% include params.html p="lang-def" %}

## 请求示例 {#request-example}

{% include api-url-example.html apidata="alert-current" %}

## 返回数据 {#response}

{% include api-snippet.html snippet="weather-alert-v1-current" %}

{% include api-response.html group="warning" type="alert-v1" prefix="alerts" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag zeroResult attributions" %}

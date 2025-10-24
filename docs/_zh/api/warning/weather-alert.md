---
title: 实时天气预警
tag: [guide, api, warning, current]
ref: 1-api-weather-alert
---

根据指定的经纬度坐标，查询中国和全球正在生效的官方天气预警信息。阅读[实用资料-预警](/docs/resource/warning-info/)以了解预警信息支持的国家和地区、事件类型等必要信息。

## 请求路径 {#endpoint}

{% include api-url.html apidata="alert-current" %}

## 参数 {#parameters}

#### 路径参数 {#path-parameters}

{% include params.html p="p-lat p-lon" %}

#### 查询参数 {#query-parameters}

{% include params.html p="q-localtime lang-def" %}

## 请求示例 {#request-example}

{% include api-url-example.html apidata="alert-current" %}

## 返回数据 {#response}

{% include api-snippet.html snippet="weather-alert-v1-current-zh" %}

{% include api-response.html group="warning" type="alert-v1" prefix="alerts" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag zeroResult attributions" %}

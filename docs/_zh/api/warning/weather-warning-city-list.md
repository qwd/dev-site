---
title: 天气预警城市列表
tag: [guide, api, warning, list]
ref: 2-api-weather-warning-city-list
---

获取指定国家或地区当前正在发生天气灾害预警的城市列表，根据这些城市列表再查询对应城市的[天气灾害预警](/docs/api/warning/weather-warning/)。

> **注意：**目前天气预警城市列表仅适用于获取中国（包括港澳台）城市列表。其他国家和地区，请使用[天气灾害预警](/docs/api/warning/weather-warning/)。
{:.bqwarning}

> **提示：**关于更多天气预警数据的说明，请参考[实用资料-预警信息](/docs/resource/warning-info/)。

## 请求路径 {#endpoint}

{% include api-url.html dev=true %}

## 参数 {#parameters}

#### 查询参数 {#query-parameters}

{% include params.html p="range-warning" %}

## 请求示例 {#request-example}

{% include api-url-example.html %}

## 返回数据 {#response}

{% include api-snippet.html flag="weather-warning-list" %}

{% include api-response.html group="warning" type="list" prefix="warningLocList" fxlink=0 %}


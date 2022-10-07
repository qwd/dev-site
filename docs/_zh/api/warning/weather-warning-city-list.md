---
title: 天气预警城市列表
tag: [guide, api, warning, list]
ref: 2-api-weather-warning-city-list
---

获取指定国家或地区当前正在发生预警的城市列表。你可以通过这个列表快速的了解到当前国家或地区都有哪些地方正在发生天气预警。

根据这些城市列表再查询详细的[预警数据](/docs/api/warning/weather-warning/)。

> **提示：**关于更多天气预警数据的说明，请参考[预警信息](/docs/resource/warning-info/)

## 请求URL

{% include api-url.html dev=true %}

## 请求参数

请求参数包括必选和可选参数，参数之间使用`&`进行分隔。

{% include params.html p="range-warning key" %}

## 请求示例

{% include api-url-example.html %}

## 返回数据

{% include api-snippet.html flag="weather-warning-list" %}

{% include api-response.html group="warning" type="list" prefix="warningLocList" fxlink=0 %}


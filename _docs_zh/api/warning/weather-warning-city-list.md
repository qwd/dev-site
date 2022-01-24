---
title: 天气预警城市列表
tag: api
data: warning
version: v7
description: 实时获取指定国家或地区当前正在发生预警的城市列表。你可以通过这个列表快速的了解到当前国家或地区都有哪些地方正在发生天气预警。
toc: true
ref: 2-api-weather-warning-city-list
---

获取指定国家或地区当前正在发生预警的城市列表，根据预警城市列表查询[指定城市的预警信息](/docs/api/warning/weather-warning/)。

### 请求URL

{% include api-url.html flag="weather-warning-list" %}

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

{% include params.html p="range-warning key" %}

### 返回数据

{% include api-snippet.html flag="weather-warning-list" %}

{% include api-response.html group="warning" type="list" prefix="warningLocList" fxlink=0 %}


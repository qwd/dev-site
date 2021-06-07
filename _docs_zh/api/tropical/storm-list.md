---
title: 台风列表
tag: api
data: tropical
version: v7
description: 和风天气台风列表API提供全球主要海洋流域的热带低气压（台风）清单。
ref: 1-api-storm-list
---

获取全球全球主要海洋流域的台风列表。

> 目前仅支持中国沿海地区，即`basin=NP`

### 请求URL

{% include api-url.html %}

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

{% include params.html p="basin year key" %}

### 返回数据

{% include api-snippet.html %}

{% include api-response.html group="storm" type="list" prefix="storm"  %}

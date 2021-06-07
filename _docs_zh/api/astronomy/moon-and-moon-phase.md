---
title: 月升月落和月相
tag: api
data: astronomy
version: v7
description: 和风天气月升月落和月相API接口提供了最近60天全球城市月升月落和逐小时的月相数据
ref: 2-api-moon
---

获取最近60天全球城市月升月落和逐小时的月相数据。

> 月相已考虑南北半球的差异，不需要再进行转换

### 请求URL

{% include api-url.html flag="moon" %}

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

{% include params.html p="key location date60 lang" %}

### 返回数据

{% include api-snippet.html flag="moon" %}

{% include api-response.html group="astro" type="moon" prefix="nil" %}


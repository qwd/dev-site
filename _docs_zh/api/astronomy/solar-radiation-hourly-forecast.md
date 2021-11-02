---
title: 太阳辐射逐小时预报
tag: api
data: astronomy
version: v7
description: 太阳辐射API支持获取全球任意坐标的辐射数据，包括净太阳辐射，太阳散射辐射和太阳直接辐射。
ref: 4-api-solar-radiation-hourly-forecast
---

获取全球任意坐标未来逐小时的太阳辐射数据。

> 本数据将在今年晚些时候公开提供，目前仅限特定用户申请使用

### 请求URL

{% include api-url.html flag="solar-radiation-hourly-forecast" %}

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

{% include params.html p="key location-coord" %}

### 返回数据

{% include api-snippet.html flag="sun" %}

> 除非特别说明，本数据返回的太阳辐射均指地表垂直向下的短波辐射，单位w/m<sup>2</sup>

{% include api-response.html group="radiation" type="radiation" prefix="radiation" fxlink=0 %}

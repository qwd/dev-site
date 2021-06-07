---
title: 太阳高度角
tag: api
data: astronomy
version: v7
description: 和风天气太阳高度角API接口，提供任意时间点的全球太阳高度及方位角接口，为安全和智能驾驶、房屋建设提供数据支持。
ref: 3-api-solar-elevation-angle
---

任意时间点的全球太阳高度及方位角接口，为安全和智能驾驶、房屋建设提供数据支持。

### 请求URL

{% include api-url.html flag="solar-ea" %}

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

{% include params.html p="key location-coord date time tz alt" %}

### 返回数据

{% include api-snippet.html flag="solar-elevation-angle" %}

{% include api-response.html group="astro" type="sea" prefix="nil" update=0 fxlink=0  %}

---
title: 太阳高度角
tag: [guide, api, astronomy, solar-elevation-angle]
ref: 3-api-solar-elevation-angle
---

任意时间点的全球太阳高度及方位角。

## 请求URL

{% include api-url.html flag="solar-ea" %}

## 请求参数

请求参数包括必选和可选参数，参数之间使用`&`进行分隔。

{% include params.html p="location-coord date time tz alt" %}

## 请求示例

{% include api-url-example.html %}

## 返回数据

{% include api-snippet.html flag="solar-elevation-angle" %}

{% include api-response.html group="astro" type="sea" prefix="nil" update=0 fxlink=0  %}

---
title: 太阳高度角
tag: [guide, api, astronomy, solar-elevation-angle]
ref: 3-api-solar-elevation-angle
---

任意时间点的全球太阳高度及方位角。

## 请求路径 {#endpoint}

{% include api-url.html flag="solar-ea" %}

## 参数 {#parameters}

#### 查询参数 {#query-parameters}

{% include params.html p="location-coord date time tz alt" %}

## 请求示例 {#request-example}

{% include api-url-example.html %}

## 返回数据 {#response}

{% include api-snippet.html flag="solar-elevation-angle" %}

{% include api-response.html group="astro" type="sea" prefix="nil" update=0 fxlink=0  %}

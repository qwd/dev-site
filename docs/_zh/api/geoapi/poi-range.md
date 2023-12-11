---
title: POI范围搜索
tag: [guide, api, geo, poi-range]
ref: 4-api-poi-range
---

提供指定区域范围内查询所有POI信息。

## 请求URL

{% include api-url.html flag="geo-poi-range" %}

## 请求参数

请求参数包括必选和可选参数，参数之间使用`&`进行分隔。

{% include params.html p="location-coord geo-type key radius number lang-def" %}

## 请求示例

{% include api-url-example.html %}

## 返回数据

{% include api-snippet.html flag="poi-range" %}

{% include api-response.html group="geo_poi" type="poi" prefix="poi" update=0 fxlink=0 %}

---
title: POI搜索
tag: [guide, api, geo, poi-lookup]
ref: 3-api-poi-lookup
---

使用关键字和坐标查询POI信息（景点、火车站、飞机场、港口等）

## 请求URL

{% include api-url.html flag="geo-poi-lookup" %}

## 请求参数

请求参数包括必选和可选参数，参数之间使用`&`进行分隔。

{% include params.html p="location-geo geo-type city number lang-def" %}

## 请求示例

{% include api-url-example.html %}

## 返回数据

{% include api-snippet.html flag="poi-lookup" %}

{% include api-response.html group="geo_poi" type="poi" prefix="poi" update=0 fxlink=0 %}

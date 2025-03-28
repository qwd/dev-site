---
title: POI范围搜索
tag: [guide, api, geo, poi-range]
ref: 4-api-poi-range
---

提供指定区域范围内查询所有POI信息。

## 请求路径 {#endpoint}

{% include api-url.html flag="geo-poi-range" %}

## 参数 {#parameters}

#### 查询参数 {#query-parameters}

{% include params.html p="location-coord geo-type radius number lang-def" %}

## 请求示例 {#request-example}

{% include api-url-example.html %}

## 返回数据 {#response}

{% include api-snippet.html flag="poi-range" %}

{% include api-response.html group="geo_poi" type="poi" prefix="poi" update=0 fxlink=0 %}

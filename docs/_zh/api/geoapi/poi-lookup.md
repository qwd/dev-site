---
title: POI搜索
tag: [guide, api, geo, poi-lookup]
ref: 3-api-poi-lookup
---

使用关键字和坐标查询POI信息（景点、火车站、飞机场、港口等）

## 请求路径 {#endpoint}

{% include api-url.html flag="geo-poi-lookup" %}

## 参数 {#parameters}

#### 查询参数 {#query-parameters}

{% include params.html p="location-geo geo-type city number lang-def" %}

## 请求示例 {#request-example}

{% include api-url-example.html %}

## 返回数据 {#response}

{% include api-snippet.html flag="poi-lookup" %}

{% include api-response.html group="geo_poi" type="poi" prefix="poi" update=0 fxlink=0 %}

---
title: POI信息搜索
tag: api
data: geo
version: v2
description: 和风天气POI查询API接口，提供POI信息（景点、火车站、飞机场、港口等）的查询，通过POI信息展示这些地点的天气情况
ref: 3-api-poi-lookup
---

和风天气POI查询API接口，提供POI（景点、潮汐站点、潮流站点等）的基本信息。

> GeoAPI每天每个账号下所有应用前50000次免费，超出部分参考[计费方式](/help/buy#price)
{:.bqwarning}

### 请求URL

{% include api-url.html flag="poi-lookup" %}

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

{% include params.html p="location-geo geo-type key city number lang" %}

### 返回数据

{% include api-snippet.html flag="poi-lookup" %}

{% include api-response.html group="geo_poi" type="poi" prefix="poi" update=0 fxlink=0 %}

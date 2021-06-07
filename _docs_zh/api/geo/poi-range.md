---
title: POI范围搜索
tag: api
data: geo
version: v2
description: 和风天气POI范围搜索API接口，提供指定区域范围内查询所有POI信息，方便显示某一区域内的POI天气数据。
ref: 4-api-poi-range
---

提供指定区域范围内查询所有POI信息，方便显示某一区域内的POI天气数据。

> GeoAPI每天每个账号下所有应用前50000次免费，超出部分参考[计费方式](/help/buy#price)
{:.bqwarning}

### 请求URL

{% include api-url.html flag="poi-range" %}

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

{% include params.html p="location-coord geo-type key radius number lang" %}

### 返回数据

{% include api-snippet.html flag="poi-range" %}

{% include api-response.html group="geo_poi" type="poi" prefix="poi" update=0 fxlink=0 %}

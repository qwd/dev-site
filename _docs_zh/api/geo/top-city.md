---
title: 热门城市查询
tag: api
data: geo
version: v2
description: 和风天气热门城市API接口提供全球各国热门城市排名。
ref: 2-api-top-city
---

获取全球各个国家国家热门城市列表，通过该列表可以让用户轻松查看各国主要城市的天气状况

> GeoAPI每天每个账号下所有应用前50000次免费，超出部分参考[计费方式](/help/buy#price)
{:.bqwarning}

### 请求URL

{% include api-url.html flag="top-city" %}

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用 `&`进行分隔。

{% include params.html p="key range number lang" %}

### 返回数据

{% include api-snippet.html flag="top-city" %}

{% include api-response.html group="geo" type="topcity"  prefix="topCityList" update=0 fxlink=0 %}


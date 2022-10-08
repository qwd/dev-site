---
title: 热门城市查询
tag: [guide, api, geo, top-city]
ref: 2-api-top-city
---

获取全球各国热门城市列表。

## 请求URL

{% include api-url.html flag="geo-top-city" %}

## 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用 `&`进行分隔。

{% include params.html p="key range number lang" %}

## 请求示例

{% include api-url-example.html %}

## 返回数据

{% include api-snippet.html flag="top-city" %}

{% include api-response.html group="geo" type="topcity"  prefix="topCityList" update=0 fxlink=0 %}


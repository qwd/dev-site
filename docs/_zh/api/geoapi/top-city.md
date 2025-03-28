---
title: 热门城市查询
tag: [guide, api, geo, top-city]
ref: 2-api-top-city
---

获取全球各国热门城市列表。

## 请求路径 {#endpoint}

{% include api-url.html flag="geo-top-city" %}

## 参数 {#parameters}

#### 查询参数 {#query-parameters}

{% include params.html p="range number lang-def" %}

## 请求示例 {#request-example}

{% include api-url-example.html %}

## 返回数据 {#response}

{% include api-snippet.html flag="top-city" %}

{% include api-response.html group="geo" type="topcity"  prefix="topCityList" update=0 fxlink=0 %}


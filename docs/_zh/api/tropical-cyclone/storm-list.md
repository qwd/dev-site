---
title: 台风列表
tag: [guide, api, storm, list]
ref: 1-api-storm-list
---

台风列表API提供全球主要海洋流域最近2年的台风列表。

> 目前仅支持中国沿海地区，即`basin=NP`

## 请求URL

{% include api-url.html %}

## 请求参数

请求参数包括必选和可选参数，参数之间使用`&`进行分隔。

{% include params.html p="basin year" %}

## 请求示例

{% include api-url-example.html %}

## 返回数据

{% include api-snippet.html %}

{% include api-response.html group="storm" type="list" prefix="storm"  %}

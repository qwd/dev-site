---
title: 台风列表
tag: [guide, api, storm, list]
ref: 1-api-storm-list
---

台风列表API提供全球主要海洋流域最近2年的台风列表。

> 目前仅支持中国沿海地区，即`basin=NP`

## 请求路径 {#endpoint}

{% include api-url.html %}

## 参数 {#parameters}

#### 查询参数 {#query-parameters}

{% include params.html p="basin year" %}

## 请求示例 {#request-example}

{% include api-url-example.html %}

## 返回数据 {#response}

{% include api-snippet.html %}

{% include api-response.html group="storm" type="list" prefix="storm"  %}

---
title: 潮汐
tag: [guide, api, ocean, tide]
ref: 1-api-tide
---

未来10天全球潮汐数据，包括满潮、干潮高度和时间，逐小时潮汐数据。

## 请求路径 {#endpoint}

{% include api-url.html flag="tide" %}

## 参数 {#parameters}

#### 查询参数 {#query-parameters}

{% include params.html p="location-p2 date10" %}

## 请求示例 {#request-example}

{% include api-url-example.html %}

## 返回数据 {#response}

{% include api-snippet.html %}

{% include api-response.html group="ocean" type="ttable thourly" prefix="tideTable tideHourly" %}

---
title: 潮汐
tag: [guide, api, ocean, tide]
ref: 1-api-tide
---

未来10天全球潮汐数据，包括满潮、干潮高度和时间，逐小时潮汐数据。

## 请求URL

{% include api-url.html flag="tide" %}

## 请求参数

请求参数包括必选和可选参数，参数之间使用`&`进行分隔。

{% include params.html p="location-p2 date10" %}

## 请求示例

{% include api-url-example.html %}

## 返回数据

{% include api-snippet.html %}

{% include api-response.html group="ocean" type="ttable thourly" prefix="tideTable tideHourly" %}

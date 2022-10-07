---
title: 潮流
tag: [guide, api, ocean, currents]
ref: 2-api-currents
---

未来10天全球潮流数据，包括潮流流速和流向。

## 请求URL

{% include api-url.html %}

## 请求参数

请求参数包括必选和可选参数，参数之间使用`&`进行分隔。

{% include params.html p="location-p6 date10 key" %}

## 请求示例

{% include api-url-example.html %}

## 返回数据

{% include api-snippet.html %}

{% include api-response.html group="ocean" type="ctable chourly" prefix="currentsTable currentsHourly" %}
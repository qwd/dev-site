---
title: 空气质量时光机
tag: [guide, api, time-machine, air]
redirect_from: /docs/histroical/histroical-air/
ref: 2-api-historical-air
---

获取最近10天的中国空气质量历史再分析数据。

> 例如今天是12月30日，最多可获取12月20日至12月29日的空气质量历史数据。

## 请求URL

{% include api-url.html flag="his-air" %}

## 请求参数

请求参数包括必选和可选参数，参数之间使用`&`进行分隔。

{% include params.html p="location-id date10back lang-def" %}

## 请求示例

{% include api-url-example.html %}

## 返回数据

{% include api-snippet.html flag="his-air"%}

{% include api-response.html group="air" type="now" prefix="airHourly" update=0%}
---
title: 历史空气质量
tag: api
data: historical
version: v7
description: 和风天气历史空气质量API接口，支持最近10天全国空气之类历史数据的查询，如需查询更长时间的历史空气质量，请联系我们
ref: 2-api-historical-air
---

获取最近10天的中国空气质量历史数据。

> 例如今天是12月30日，最多可获取12月20日至12月29日的空气质量历史数据。

> 如需要更长时间的城市历史数据或格点历史数据，请[与我们联系](https://www.qweather.com/contact)。

## 请求URL

{% include api-url.html flag="his-air" %}

## 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

{% include params.html p="location-id date10back key lang" %}

## 返回数据

{% include api-snippet.html flag="his-air"%}

{% include api-response.html group="air" type="now" prefix="airHourly" update=0%}
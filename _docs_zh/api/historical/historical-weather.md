---
title: 历史天气
tag: api
data: historical
version: v7
description: 和风天气历史天气API接口，支持2010年1月1日至今的全国城市历史天气和历史空气质量AQI数据，历史天气API支持最近10天历史数据的查询，全部历史数据可选择一次性下载，具体方式请联系我们
ref: 1-api-historical-weather
---

获取最近10天的天气历史数据。

> 例如今天是12月30日，最多可获取12月20日至12月29日的天气历史数据。

> 我们还提供2010年至今的中国历史天气数据，请[与我们联系](https://www.qweather.com/contact)。

## 请求URL

{% include api-url.html flag="his-weather" %}

## 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

{% include params.html p="location-id date10back key lang unit" %}

## 返回数据

{% include api-snippet.html flag="his-weather"%}

{% include api-response.html group="hisweather" type="daily hourly" prefix="weatherDaily weatherHourly" update=0 %}

---
title: 分钟级降水
tag: api
data: grid-weather
version: v7
description: 和风天气分钟级降水API接口（临近预报）支持1公里格点的全国分钟级降雨预报数据，为每一分钟的降雨进行精准预测。
ref: api-weather-minutely
---

和风天气分钟级降水API接口提供中国地区未来2小时内每5分钟降水数据、降水类型以及未来2小时的降水概况信息。可实现精确到1公里格点的全国分钟级降雨/降雪预报，为每一分钟的降雨进行预测。

## 请求URL

{% include api-url.html %}

## 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

{% include params.html p="location-coord key lang-zhen" %}

## 返回数据

{% include api-snippet.html flag="minutely" %}

{% include api-response.html group="minutely" prefix="nil"  %}



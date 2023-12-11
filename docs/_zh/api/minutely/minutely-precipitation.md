---
title: 分钟级降水
tag: [guide, api, minutely, precip]
ref: 1-api-minutely-precipitation
---

分钟级降水API（临近预报）支持中国1公里精度的未来2小时每5分钟降雨预报数据。

## 请求URL

{% include api-url.html dev=true %}

## 请求参数

请求参数包括必选和可选参数，参数之间使用`&`进行分隔。

{% include params.html p="location-coord key lang-def" %}

## 请求示例

{% include api-url-example.html %}

## 返回数据

{% include api-snippet.html flag="minutely" %}

{% include api-response.html group="minutely" prefix="nil"  %}



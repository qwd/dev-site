---
title: 实时空气质量(beta)
tag: [guide, api, air, now-v1]
ref: 1-api-air-now-v1
---

全球空气质量实时数据，我们提供了基于各个国家或地区当地规则的AQI以及污染物浓度值，你可以查询城市或监测站的当前小时实时数据。

> 注意：全球空气质量v1版本目前处于beta阶段，标准订阅暂不收取费用。数据内容在正式发布后可能会有所不同。
{:.bqwarning}

## 请求URL

{% include api-url.html apidata="air-now-v1" apiver=nil dev=true %}

## 请求参数

请求参数包括必选和可选参数，参数之间使用`&`进行分隔。

{% include params.html p="key lang-def" %}

## 请求示例

{% include api-url-example.html apidata="air-now-v1" dev=true %}

## 返回数据

{% include api-snippet.html flag="air-now-v1" %}

{% include api-response.html group="air" type="now-v1" prefix="nil" refer="0"  %}

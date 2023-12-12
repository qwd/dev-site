---
title: 空气监测站实时(beta)
tag: [guide, api, air, station-v1]
ref: 1-api-air-station-v1
---

全球空气质量监测站的实时数据，提供各个国家或地区监测站的污染物浓度值。

> 注意：全球空气质量监测站实时数据v1版本目前处于beta阶段，标准订阅暂不收取费用。数据内容在正式发布后可能会有所不同。
{:.bqwarning}

## 请求URL

{% include api-url.html apidata="air-station-v1" dev=true %}

## 请求参数

请求参数包括必选和可选参数，参数之间使用`&`进行分隔。

{% include params.html p="key lang-def" %}

## 请求示例

{% include api-url-example.html apidata="air-station-v1" dev=true %}

## 返回数据

{% include api-snippet.html flag="air-station-v1" %}

{% include api-response.html group="air" type="station-v1" prefix="nil" refer="0"  %}
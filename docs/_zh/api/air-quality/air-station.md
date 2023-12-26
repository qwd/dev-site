---
title: 监测站数据(beta)
tag: [guide, api, aq-v1, station-v1]
ref: 1-api-air-station-v1
---

全球空气质量监测站数据，提供各个国家或地区监测站的污染物浓度值。

> **注意：**全新的监测站数据目前处于beta阶段，标准订阅暂不收取费用。数据内容在正式发布后可能会有所不同。
{:.bqwarning}

> **警告：**监测站数据是实验性数据，仅供参考，可能受到各种因素的影响，我们无法确保该数据的可用性，请优先使用空气质量指数数据。
{:.bqdanger}

## 请求URL

{% include api-url.html apidata="air-station-v1" dev=true %}

## 路径参数

{% include params.html p="p-location-id-aqsta" %}

## 查询参数

{% include params.html p="key lang-def" %}

## 请求示例

{% include api-url-example.html apidata="air-station-v1" dev=true %}

## 返回数据

{% include api-snippet.html flag="air-station-v1" %}

{% include api-response.html group="air" type="station-v1" prefix="nil" refer="0"  %}
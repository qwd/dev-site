---
title: 监测站数据(new)
tag: [guide, api, aq-v1, station-v1]
ref: 1-api-air-station-v1
---

监测站数据API提供各个国家或地区监测站的污染物浓度值。

> **警告：**监测站的观测值仅供参考，可能由于故障、移除、维护或当地法律法规等各种原因导致数据延迟或缺失，我们无法确保该数据的可用性。
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

{% include api-snippet.html snippet="aq-v1-station-v1" %}

{% include api-response.html group="air" type="station-v1" prefix="nil" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag sources"  %}
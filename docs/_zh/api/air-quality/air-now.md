---
title: 实时空气质量(beta)
tag: [guide, api, aq-v1, now-v1]
ref: 1-api-air-now-v1
---

全球空气质量实时数据，我们提供了基于各个国家或地区当地规则的AQI以及污染物浓度值，你可以查询指定城市的当前小时实时数据。

> **注意：**全新的实时空气质量目前处于beta阶段，标准订阅暂不收取费用。数据内容在正式发布后可能会有所不同。
{:.bqwarning}

> **提示：**推荐阅读[空气质量信息文档](/docs/resource/air-info/)，以便了解指数类型、污染物、支持的国家等信息。

## 请求URL

{% include api-url.html apidata="air-now-v1" dev=true %}

## 路径参数

{% include params.html p="p-location-id" %}

## 查询参数

{% include params.html p="key lang-def aq-pollutant aq-sta" %}

## 请求示例

{% include api-url-example.html apidata="air-now-v1" dev=true %}

## 返回数据

{% include api-snippet.html %}

{% include api-response.html group="air" type="now-v1" prefix="nil" fxlink="0" refer="0"  %}

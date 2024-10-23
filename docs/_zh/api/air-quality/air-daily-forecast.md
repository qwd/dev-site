---
title: 空气质量每日预报(new)
tag: [guide, api, aq-v1, daily-v1]
ref: 1-api-air-daily-v1
---

空气质量每日预报API提供未来3天的空气质量（AQI）预报、污染物浓度值和健康建议。

我们推荐阅读[空气质量信息文档](/docs/resource/air-info/)，以便了解AQI的类型、污染物、支持的国家等信息。

## 请求URL

{% include api-url.html apidata="air-daily-v1-coor" dev=true %}

## 路径参数

{% include params.html p="p-lat p-lon" %}

## 查询参数

{% include params.html p="lang-def" %}

## 请求示例

{% include api-url-example.html apidata="air-daily-v1-coor" %}

## 返回数据

{% include api-snippet.html %}

{% include api-response.html group="air" type="daily-v1" prefix="days" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag"  %}

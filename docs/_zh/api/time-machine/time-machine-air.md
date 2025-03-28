---
title: 空气质量时光机
tag: [guide, api, time-machine, air]
redirect_from: /docs/histroical/histroical-air/
ref: 2-api-historical-air
---

获取最近10天的中国空气质量历史再分析数据。

> 例如今天是12月30日，最多可获取12月20日至12月29日的空气质量历史数据。

## 请求路径 {#endpoint}

{% include api-url.html flag="his-air" %}

## 参数 {#parameters}

#### 查询参数 {#query-parameters}

{% include params.html p="location-id date10back lang-def" %}

## 请求示例 {#request-example}

{% include api-url-example.html %}

## 返回数据 {#response}

{% include api-snippet.html flag="his-air"%}

{% include api-response.html group="air" type="now" prefix="airHourly" update=0%}
---
title: 空气质量每日预报
tag: [guide, api, air, daily]
ref: 2-api-air-daily-forecast
---

空气质量每日预报API，支持全国3000+市县区空气质量预报数据的查询，包括AQI预报、首要污染物预报、空气质量等级预报。

## 请求URL

{% include api-url.html flag="air-daily" dev=true %}

## 请求参数

请求参数包括必选和可选参数，参数之间使用`&`进行分隔。

{% include params.html p="key location lang-def" %}

## 请求示例

{% include api-url-example.html %}

## 返回数据

{% include api-snippet.html flag="air-daily" %}

{% include api-response.html group="air" type="daily"  prefix="daily" %}

### 空气质量指数等级

请查看[空气质量信息](/docs/resource/air-info/)。
---
title: 实时空气质量(弃用)
tag: [guide, api, aq, now]
ref: 1-api-air-now
---

实时空气质量API，支持中国3000+市县区以及1700+国控站点实时空气质量的查询，包括AQI数值、空气质量等级、首要污染物、PM10、PM2.5、臭氧、二氧化氮、二氧化硫、一氧化碳数值。

> **警告：**当前API（/v7/air/now）已弃用，预计在2026年6月1日停止服务。请使用[空气质量API v1新版本](/docs/api/air-quality/air-current/)替代。
{:.bqdanger}

## 请求路径 {#endpoint}

{% include api-url.html apidata="air-now"%}

## 参数 {#parameters}

#### 查询参数 {#query-parameters}

{% include params.html p="location-def lang-def" %}

## 请求示例 {#request-example}

{% include api-url-example.html apidata="air-now" %}

## 返回数据 {#response}

{% include api-snippet.html %}

> **提示：**`station`字段，即监测站数据仅限在[空气质量监测站列表](https://github.com/qwd/LocationList/blob/master/POI-Air-Monitoring-Station-List-latest.csv)中的城市返回。

{% include api-response.html group="air" type="now station" prefix="now station"  %}
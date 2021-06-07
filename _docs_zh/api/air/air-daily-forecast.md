---
title: 空气质量预报
tag: api
data: air
version: v7
description: 和风天气空气质量AQI预报API，支持全国3240市县区空气质量预报数据的查询，包括AQI预报、首要污染物预报、空气质量等级预报。
ref: 2-api-air-daily-forecast
---

空气质量AQI预报API，支持中国3240市县区空气质量预报数据的查询，包括AQI预报、首要污染物预报、空气质量等级预报。

### 请求URL

{% include api-url.html flag="air-daily" %}

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

{% include params.html p="key location lang gzip" %}

### 返回数据

{% include api-snippet.html flag="air-daily" %}

{% include api-response.html group="air" type="daily"  prefix="daily" %}

### 空气质量指数等级

| 数值    | 等级 | 级别     | 级别颜色 |
| ------- | ---- | -------- | -------- |
| 0-50    | 一级 | 优       | 绿色     |
| 51-100  | 二级 | 良       | 黄色     |
| 101-150 | 三级 | 轻度污染 | 橙色     |
| 151-200 | 四级 | 中度污染 | 红色     |
| 201-300 | 五级 | 重度污染 | 紫色     |
| >300    | 六级 | 严重污染 | 褐红色   |
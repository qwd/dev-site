---
title: 实时空气质量
tag: api
data: air
version: v7
description: 和风天气实时空气质量API，支持中国3240市县区以及1700个国控站点实时空气质量的查询，包括AQI数值、空气质量等级、首要污染物、PM10、PM2.5、臭氧、二氧化氮、二氧化硫、一氧化碳数值。
ref: 1-api-air-now
---

实时空气质量API，支持中国3240市县区以及1700个国控站点实时空气质量的查询，包括AQI数值、空气质量等级、首要污染物、PM10、PM2.5、臭氧、二氧化氮、二氧化硫、一氧化碳数值。

### 请求URL

{% include api-url.html flag="air-now" %}

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

{% include params.html p="key location lang gzip" %}

### 返回数据

{% include api-snippet.html flag="air-now" %}

> `station`字段，即监测站数据仅限在[空气质量监测站列表](https://github.com/qwd/LocationList/blob/master/POI-Air-Monitoring-Station-List-latest.csv)中的城市返回。

{% include api-response.html group="air" type="now station" prefix="now station"  %}

### 空气质量指数等级

| 数值    | 等级 | 级别     | 级别颜色 |
| ------- | ---- | -------- | -------- |
| 0-50    | 一级 | 优       | 绿色     |
| 51-100  | 二级 | 良       | 黄色     |
| 101-150 | 三级 | 轻度污染 | 橙色     |
| 151-200 | 四级 | 中度污染 | 红色     |
| 201-300 | 五级 | 重度污染 | 紫色     |
| >300    | 六级 | 严重污染 | 褐红色   |
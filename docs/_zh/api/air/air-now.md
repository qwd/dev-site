---
title: 实时空气质量
tag: [guide, api, air, now]
ref: 1-api-air-now
---

实时空气质量API，支持中国3000+市县区以及1700+国控站点实时空气质量的查询，包括AQI数值、空气质量等级、首要污染物、PM10、PM2.5、臭氧、二氧化氮、二氧化硫、一氧化碳数值。

## 请求URL

{% include api-url.html flag="air-now" dev=true %}

## 请求参数

请求参数包括必选和可选参数，参数之间使用`&`进行分隔。

{% include params.html p="key location-def lang-def" %}

## 请求示例

{% include api-url-example.html %}

## 返回数据

{% include api-snippet.html flag="air-now" %}

> **提示：**`station`字段，即监测站数据仅限在[空气质量监测站列表](https://github.com/qwd/LocationList/blob/master/POI-Air-Monitoring-Station-List-latest.csv)中的城市返回。

{% include api-response.html group="air" type="now station" prefix="now station"  %}

## 空气质量指数等级

请查看[空气质量信息](/docs/resource/air-info/)。
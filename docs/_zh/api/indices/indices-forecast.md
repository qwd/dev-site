---
title: 天气指数预报
tag: [guide, api, indices, forecast]
ref: 1-api-indices-forecast
---

获取中国和全球城市天气生活指数预报数据。

- 中国天气生活指数：舒适度指数、洗车指数、穿衣指数、感冒指数、运动指数、旅游指数、紫外线指数、空气污染扩散条件指数、空调开启指数、过敏指数、太阳镜指数、化妆指数、晾晒指数、交通指数、钓鱼指数、防晒指数
- 海外天气生活指数：运动指数、洗车指数、紫外线指数、钓鱼指数

## 请求URL

{% include api-url.html apidata="indices-forecast-1d indices-forecast-3d" title=true dev=true %}

## 请求参数

请求参数包括必选和可选参数，参数之间使用`&`进行分隔。

{% include params.html p="location key idx-type lang-def" %}

## 请求示例

{% include api-url-example.html apidata="indices-forecast-1d" %}

## 返回数据

{% include api-snippet.html flag="indices-1d" %}

{% include api-response.html group="indices" prefix="daily" %}

## 等级和类型

了解天气生活指数的等级和类型，请访问[天气指数信息](/docs/resource/indices-info/)。

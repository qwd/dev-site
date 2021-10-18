---
title: 天气生活指数
tag: api
data: indices
version: v7
description: 和风天气全球生活指数API接口包括洗车指数、穿衣指数、感冒指数、过敏指数、紫外线指数、钓鱼指数等20多种数据，生活指数API支持全国4000+个市县区和海外15万个城市天气预报。
ref: api-indices
---

和风天气生活指数API接口为中国和海外城市提供详细的生活指数实况和预报数据，包括：

- 中国天气生活指数：舒适度指数、洗车指数、穿衣指数、感冒指数、运动指数、旅游指数、紫外线指数、空气污染扩散条件指数、空调开启指数、过敏指数、太阳镜指数、化妆指数、晾晒指数、交通指数、钓鱼指数、防晒指数
- 海外天气生活指数：运动指数、洗车指数、紫外线指数、钓鱼指数

## 请求URL

{% include api-url.html flag="indices" %}

## 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

{% include params.html p="location key idx-type lang-zhen" %}

## 返回数据

{% include api-snippet.html flag="indices-1d" %}

{% include api-response.html group="indices" prefix="daily" %}

## 等级和类型

了解天气生活指数的等级和类型，请访问[天气指数信息](/docs/resource/indices-info/)。

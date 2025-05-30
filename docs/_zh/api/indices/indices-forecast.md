---
title: 天气指数预报
tag: [guide, api, indices, forecast]
ref: 1-api-indices-forecast
---

获取中国和全球城市天气生活指数预报数据。

- 中国天气生活指数：舒适度指数、洗车指数、穿衣指数、感冒指数、运动指数、旅游指数、紫外线指数、空气污染扩散条件指数、空调开启指数、过敏指数、太阳镜指数、化妆指数、晾晒指数、交通指数、钓鱼指数、防晒指数
- 海外天气生活指数：运动指数、洗车指数、紫外线指数、钓鱼指数

## 请求路径 {#endpoint}

{% include api-url.html %}

## 参数 {#parameters}

#### 路径参数 {#path-parameters}

{% include params.html p="p-day3d" %}

#### 查询参数 {#query-parameters}

{% include params.html p="location-def idx-type lang-def" %}

## 请求示例 {#request-example}

{% include api-url-example.html apidata="indices-forecast" %}

## 返回数据 {#response}

{% include api-snippet.html %}

{% include api-response.html group="indices" prefix="daily" %}

## 等级和类型

了解天气生活指数的等级和类型，请访问[天气指数信息](/docs/resource/indices-info/)。

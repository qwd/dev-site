---
title: 空气质量时光机
tag:
- guide
- api
- time-machine
- air
ref: 2-api-historical-air
aliases:
- "/docs/histroical/histroical-air/"
translationKey: 2-api-historical-air
type: docs
---

获取最近10天的中国空气质量历史再分析数据。

> 例如今天是12月30日，最多可获取12月20日至12月29日的空气质量历史数据。

## 请求路径 {#endpoint}

{{< api-url >}}

## 参数 {#parameters}

#### 查询参数 {#query-parameters}

{{< params p="location-id date10back lang-def" >}}

## 请求示例 {#request-example}

{{< api-url-example >}}

## 返回数据 {#response}

{{< api-snippet >}}

{{< api-response group="air" type="now" prefix="airHourly" update="0" >}}

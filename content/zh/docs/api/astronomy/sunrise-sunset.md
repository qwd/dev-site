---
title: 日出日落
tag:
- guide
- api
- astronomy
- sun
ref: 1-api-sun
translationKey: 1-api-sun
type: docs
---

获取未来60天全球任意地点日出日落时间。

> 在[逐天预报API](/docs/api/weather)中，也会返回对应天数的日出日落、月升月落和月相数据

## 请求路径 {#endpoint}

{{< api-url >}}

## 参数 {#parameters}

#### 查询参数 {#query-parameters}

{{< params p="location-def date60" >}}

## 请求示例 {#request-example}

{{< api-url-example >}}

## 返回数据 {#response}

{{< api-snippet >}}

{{< api-response group="astro" type="sun" prefix="nil" >}}

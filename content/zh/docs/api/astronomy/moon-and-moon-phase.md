---
title: 月升月落和月相
tag:
- guide
- api
- astronomy
- moon
ref: 2-api-moon
translationKey: 2-api-moon
type: docs
---

获取未来60天全球城市月升月落和逐小时的月相数据。

> 月相已考虑南北半球的差异，不需要再进行转换

## 请求路径 {#endpoint}

{{< api-url >}}

## 参数 {#parameters}

#### 查询参数 {#query-parameters}

{{< params p="location-def date60 lang-def" >}}

## 请求示例 {#request-example}

{{< api-url-example >}}

## 返回数据 {#response}

{{< api-snippet >}}

{{< api-response group="astro" type="moon" prefix="nil" >}}

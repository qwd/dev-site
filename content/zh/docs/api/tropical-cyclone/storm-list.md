---
title: 台风列表
tag:
- guide
- api
- storm
- list
ref: 1-api-storm-list
translationKey: 1-api-storm-list
type: docs
---

台风列表API提供全球主要海洋流域最近2年的台风列表。

> 目前仅支持中国沿海地区，即`basin=NP`

## 请求路径 {#endpoint}

{{< api-url >}}

## 参数 {#parameters}

#### 查询参数 {#query-parameters}

{{< params p="basin year" >}}

## 请求示例 {#request-example}

{{< api-url-example >}}

## 返回数据 {#response}

{{< api-snippet >}}

{{< api-response group="storm" type="list" prefix="storm" >}}

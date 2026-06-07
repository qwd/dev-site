---
title: 潮汐
tag:
- guide
- api
- ocean
- tide
ref: 1-api-tide
translationKey: 1-api-tide
type: docs
---

未来10天全球潮汐数据，包括满潮、干潮高度和时间，逐小时潮汐数据。

## 请求路径 {#endpoint}

{{< api-url >}}

## 参数 {#parameters}

#### 查询参数 {#query-parameters}

{{< params p="location-p2 date10" >}}

## 请求示例 {#request-example}

{{< api-url-example >}}

## 返回数据 {#response}

{{< api-snippet >}}

{{< api-response group="ocean" type="ttable thourly" prefix="tideTable tideHourly" >}}

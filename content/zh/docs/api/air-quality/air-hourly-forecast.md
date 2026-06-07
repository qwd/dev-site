---
title: 空气质量小时预报
tag:
- guide
- api
- aq
- hourly-v1
ref: 1-api-air-hourly-v1
translationKey: 1-api-air-hourly-v1
type: docs
---

空气质量小时预报API提供未来24小时空气质量的数据，包括AQI、污染物浓度、分指数以及健康建议。

我们推荐阅读[空气质量信息文档](/docs/resource/air-info/)，以便了解AQI的类型、污染物、支持的国家等信息。

## 请求路径 {#endpoint}

{{< api-url apidata="air-hourly-v1-coor" >}}

## 参数 {#parameters}

#### 路径参数 {#path-parameters}

{{< params p="p-lat p-lon" >}}

#### 查询参数 {#query-parameters}

{{< params p="q-localtime lang-def" >}}

## 请求示例 {#request-example}

{{< api-url-example apidata="air-hourly-v1-coor" >}}

## 返回数据 {#response}

{{< api-snippet >}}

{{< api-response group="air" type="hourly-v1" prefix="hours" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag" >}}

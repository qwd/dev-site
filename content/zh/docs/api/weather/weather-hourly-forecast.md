---
title: 逐小时天气预报
tag:
- guide
- api
- weather
- hourly
ref: 3-api-weather-hourly-forecast
translationKey: 3-api-weather-hourly-forecast
type: docs
---

逐小时天气预报API，提供全球城市未来24-168小时逐小时天气预报，包括：温度、天气状况、风力、风速、风向、相对湿度、大气压强、降水概率、露点温度、云量。

## 请求路径 {#endpoint}

{{< api-url apidata="weather-hourly" >}}

## 参数 {#parameters}

#### 路径参数 {#path-parameters}

{{< params p="p-hour168h" >}}

#### 查询参数 {#query-parameters}

{{< params p="location-def lang-def unit-def" >}}

## 请求示例 {#request-example}

{{< api-url-example >}}

## 返回数据 {#response}

{{< api-snippet >}}

{{< api-response group="weather" type="hourly" prefix="hourly" >}}

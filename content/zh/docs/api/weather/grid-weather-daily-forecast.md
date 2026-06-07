---
title: 格点每日天气预报
tag:
- guide
- api
- weather
- grid-daily
ref: 2-api-grid-weather-daily-forecast
translationKey: 2-api-grid-weather-daily-forecast
type: docs
---

基于数值模式的天气预报数据，提供全球指定坐标的每日天气预报，分辨率3-5公里。

> **提示：** 格点天气预报是基于数值预报模型生成，不适宜与观测站数据对比。如需基于观测站的城市天气，请使用[城市每日天气API](/docs/api/weather/weather-daily-forecast/)。格点天气采用UTC 0时区表示时间。

## 请求路径 {#endpoint}

{{< api-url apidata="weather-grid-daily" >}}

## 参数 {#parameters}

#### 路径参数 {#path-parameters}

{{< params p="p-day7d" >}}

#### 查询参数 {#query-parameters}

{{< params p="location-coord lang-def unit-def" >}}

## 请求示例 {#request-example}

{{< api-url-example >}}

## 返回数据 {#response}

{{< api-snippet >}}

{{< api-response group="weather" type="gdaily" prefix="daily" >}}

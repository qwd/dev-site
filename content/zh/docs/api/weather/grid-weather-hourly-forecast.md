---
title: 格点逐小时天气预报
tag:
- guide
- api
- weather
- grid-hourly
ref: 3-api-grid-weather-hourly-forecast
translationKey: 3-api-grid-weather-hourly-forecast
type: docs
---

基于数值模式的天气预报数据，提供全球指定坐标的逐小时天气预报，分辨率3-5公里。

> **提示：** 格点天气预报是基于数值预报模型生成，不适宜与观测站数据对比。如需基于观测站的城市天气，请使用[城市逐小时天气API](/docs/api/weather/weather-hourly-forecast/)。格点天气采用UTC 0时区表示时间。

## 请求路径 {#endpoint}

{{< api-url apidata="weather-grid-hourly" >}}

## 参数 {#parameters}

#### 路径参数 {#path-parameters}

{{< params p="p-hour72h" >}}

#### 查询参数 {#query-parameters}

{{< params p="location-coord lang-def unit-def" >}}

## 请求示例 {#request-example}

{{< api-url-example >}}

## 返回数据 {#response}

{{< api-snippet >}}

{{< api-response group="weather" type="ghourly" prefix="hourly" >}}

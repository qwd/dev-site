---
title: 每日天气预报
tag:
- guide
- api
- weather
- daily
ref: 2-api-weather-daily-forecast
translationKey: 2-api-weather-daily-forecast
type: docs
---

每日天气预报API，提供全球城市未来3-30天天气预报，包括：日出日落、月升月落、最高最低温度、天气白天和夜间状况、风力、风速、风向、相对湿度、大气压强、降水量、露点温度、紫外线强度、能见度等。

## 请求路径 {#endpoint}

{{< api-url apidata="weather-daily" >}}
  
## 参数 {#parameters}

#### 路径参数 {#path-parameters}

{{< params p="p-day30d" >}}

#### 查询参数 {#query-parameters}

{{< params p="location-def lang-def unit-def" >}}

## 请求示例 {#request-example}

{{< api-url-example >}}

## 返回数据 {#response}

{{< api-snippet >}}

{{< api-response group="weather" type="daily" prefix="daily" >}}

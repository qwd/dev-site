---
title: 太阳辐射预报
tag:
- guide
- api
- solar-radiation
- forecast
ref: 1-api-solar-radiation-forecast
translationKey: 1-api-solar-radiation-forecast
type: docs
---

获取全球任意坐标的逐15分钟太阳辐射预报及相关数据，最多支持未来60小时预报，分辨率为1x1公里。

## 请求路径 {#endpoint}

{{< api-url apidata="solar-radiation-v1" >}}

## 参数 {#parameters}

#### 路径参数 {#path-parameters}

{{< params p="p-lat p-lon" >}}

#### 查询参数 {#query-parameters}

{{< params p="q-hour60h q-interval60m q-tilt-si q-azimuth-si q-extra-si q-localtime" >}}

## 请求示例 {#request-example}

{{< api-url-example apidata="solar-radiation-v1" >}}

## 返回数据 {#response}

{{< api-snippet snippet="solar-radiation-v1" >}}

{{< api-response group="radiation" type="radiation-v1" prefix="forecasts" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag" >}}

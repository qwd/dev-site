---
title: 太阳辐射预报
tag: [guide, api, solar-radiation, forecast]
ref: 1-api-solar-radiation-forecast
---

获取全球任意坐标的逐15分钟太阳辐射预报及相关数据，最多支持未来60小时预报，分辨率为1x1公里。

## 请求路径 {#endpoint}

{% include api-url.html apidata="solar-radiation-v1" %}

## 参数 {#parameters}

#### 路径参数 {#path-parameters}

{% include params.html p="p-lat p-lon" %}

#### 查询参数 {#query-parameters}

{% include params.html p="q-hour60h q-interval60m q-extra-si" %}

## 请求示例 {#request-example}

{% include api-url-example.html apidata="solar-radiation-v1" %}

## 返回数据 {#response}

{% include api-snippet.html snippet="solar-radiation-v1" %}

{% include api-response.html group="radiation" type="radiation-v1" prefix="forecasts" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag" %}

---
title: 太阳辐射逐小时预报
tag: [guide, api, solar-radiation, hourly]
ref: 1-api-solar-radiation-hourly-forecast
---

太阳辐射API支持获取全球任意坐标的辐射数据，包括净太阳辐射，太阳散射辐射和太阳直接辐射。

## 请求URL

{% include api-url.html apidata="solar-radiation-hourly-24h solar-radiation-hourly-72h" title=true %}

> **注意：**在一些特殊情况下，未来72小时预报有可能会缺少最后若干小时的数据。
{:.bqwarning}

## 请求参数

请求参数包括必选和可选参数，参数之间使用`&`进行分隔。

{% include params.html p="location-coord" %}

## 请求示例

{% include api-url-example.html apidata="solar-radiation-hourly-24h" %}

## 返回数据

{% include api-snippet.html flag="sun" %}

> 除非特别说明，本数据返回的太阳辐射均指地表垂直向下的短波辐射，单位w/m<sup>2</sup>

{% include api-response.html group="radiation" type="radiation" prefix="radiation" fxlink=0 %}

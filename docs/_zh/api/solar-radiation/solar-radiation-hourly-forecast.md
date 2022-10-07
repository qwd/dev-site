---
title: 太阳辐射逐小时预报
tag: [guide, api, solar-radiation, hourly]
ref: 1-api-solar-radiation-hourly-forecast
---

太阳辐射API支持获取全球任意坐标的辐射数据，包括净太阳辐射，太阳散射辐射和太阳直接辐射。

> 太阳辐照数据目前仅限特定用户申请使用，请了解[如何申请试用](https://blog.qweather.com/announce/solar-radiation-trial/)。

## 请求URL

{% include api-url.html flag="solar-radiation-hourly-forecast" %}

## 请求参数

请求参数包括必选和可选参数，参数之间使用`&`进行分隔。

{% include params.html p="key location-coord" %}

## 请求示例

{% include api-url-example.html %}

## 返回数据

{% include api-snippet.html flag="sun" %}

> 除非特别说明，本数据返回的太阳辐射均指地表垂直向下的短波辐射，单位w/m<sup>2</sup>

{% include api-response.html group="radiation" type="radiation" prefix="radiation" fxlink=0 %}

---
title: 天气灾害预警
tag: api
data: warning
version: v7
description: 和风天气灾害预警API提供了全球极端天气预警服务，覆盖中国及全球数十个国家或地区，实时获取台风预警、暴雨暴雪预警、寒潮预警、大风预警、空气重污染预警以及沙尘暴、高温、干旱、雷电、冰雹、霜冻、大雾、道路结冰、干热风、雷雨大风、森林火险、降温、冰冻、雷暴大风、龙卷风、低温冻害、低温雨雪冰冻、强对流、强降雨、强降温、雪灾、雷暴、严寒、沙尘等50多种气象灾害预警信息。
ref: 1-api-weather-warning
---

天气灾害预警API可以获取中国及全球多个国家或地区实时天气灾害预警数据，了解更多[预警信息](/docs/resource/warning-info/)。

> 你也可以先通过[天气预警城市列表API](/docs/api/warning/weather-warning-city-list/)获取到指定国家或地区当前发生预警的所有城市列表。

### 请求URL

{% include api-url.html flag="weather-warning" %}

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

{% include params.html p="key location" %}

> 天气预警并非在所有地区可用，了解[天气预警支持的国家或地区](/docs/resource/warning-info/#supported-regions)。

{% include params.html p="lang-zhen" %}

### 返回数据

> 如果查询的地区当前没有灾害预警信息，返回的`warning`字段为空。

{% include api-snippet.html %}

{% include api-response.html group="warning" type="warning" prefix="warning" %}

### 更多预警资料

- [预警支持的国家和地区](/docs/resource/warning-info/#supported-regions)
- [预警等级](/docs/resource/warning-info/#warning-level)
- [预警类型](/docs/resource/warning-info/#warning-type)
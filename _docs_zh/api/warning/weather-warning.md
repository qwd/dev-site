---
title: 天气灾害预警
tag: api
data: warning
version: v7
description: 和风天气灾害预警API接口支持中国及欧盟国家极端天气灾害预警，实时获取台风预警、暴雨暴雪预警、寒潮预警、大风预警、空气重污染预警以及沙尘暴、高温、干旱、雷电、冰雹、霜冻、大雾、道路结冰、干热风、雷雨大风、森林火险、降温、冰冻、雷暴大风、龙卷风、低温冻害、低温雨雪冰冻、强对流、强降雨、强降温、雪灾、雷暴、严寒、沙尘等50多种气象灾害预警信息。
ref: 1-api-weather-warning
---

和风天气灾害预警API接口支持中国及欧盟国家天气灾害预警，预警类型包括：台风、暴雨、暴雪、寒潮、大风、沙尘暴、高温、干旱、雷电、冰雹、霜冻、大雾、霾、道路结冰、寒冷、灰霾、雷雨大风、森林火险、降温、道路冰雪、干热风、低温、冰冻、空气重污染、海上大雾、雷暴大风、持续低温、浓浮尘、龙卷风、低温冻害、海上大风、低温雨雪冰冻、强对流、臭氧、大雪、强降雨、强降温、雪灾、森林（草原）火险、雷暴、严寒、沙尘、海上雷雨大风、海上雷电、海上台风等，详细列表请查看[预警类型和等级](/docs/start/warning-info/)

灾害预警API可以获取指定城市的极端天气预警数据，也可以获取一个国家内当前[发生极端天气的城市列表](/docs/api/warning/weather-warning-city-list/)。

### 请求URL

{% include api-url.html flag="weather-warning" %}

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

{% include params.html p="key location lang-zhen" %}

### 返回数据

> 如果查询的地区当前没有灾害预警信息，返回的`warning`字段为空。

{% include api-snippet.html %}

{% include api-response.html group="warning" type="warning" prefix="warning" %}

### 预警类型和等级

查看[预警类型和等级](/docs/start/warning-info/)
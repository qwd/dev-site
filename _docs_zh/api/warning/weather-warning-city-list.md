---
title: 天气预警城市列表
tag: api
data: warning
version: v7
description: 和风天气灾害预警API接口支持全国极端天气灾害预警，实时获取台风预警、暴雨暴雪预警、寒潮预警、大风预警、空气重污染预警以及沙尘暴、高温、干旱、雷电、冰雹、霜冻、大雾、道路结冰、干热风、雷雨大风、森林火险、降温、冰冻、雷暴大风、龙卷风、低温冻害、低温雨雪冰冻、强对流、强降雨、强降温、雪灾、雷暴、严寒、沙尘等50多种气象灾害预警信息。
toc: true
ref: 2-api-weather-warning-city-list
---

获取当前中国发生天气预警的城市列表。

### 请求URL

{% include api-url.html flag="weather-warning-list" %}

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

{% include params.html p="range-cn key" %}

### 返回数据

{% include api-snippet.html flag="weather-warning-list" %}

{% include api-response.html group="warning" type="list" prefix="warningLocList" fxlink=0 %}


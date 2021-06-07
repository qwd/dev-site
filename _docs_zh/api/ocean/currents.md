---
title: 潮流
tag: api
data: ocean
version: v7
description: 和风天气潮汐API接口包含全球1万多个港口数据，提供未来10天逐小时潮流数据。
ref: 2-api-currents
---

未来10天全球潮流数据，包括潮流流速和流向。

### 请求URL

{% include api-url.html %}

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

{% include params.html p="location-p6 date10 key" %}

### 返回数据

{% include api-snippet.html %}

{% include api-response.html group="ocean" type="ctable chourly" prefix="currentsTable currentsHourly" %}
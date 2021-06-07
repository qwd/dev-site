---
title: 潮汐
tag: api
data: ocean
version: v7
description: 和风天气潮汐API接口包含全球1万多个港口数据，提供未来10天潮汐数据，包括满潮、干潮高度和时间，逐小时潮汐数据。
ref: 1-api-tide
---

未来10天全球潮汐数据，包括满潮、干潮高度和时间，逐小时潮汐数据。

### 请求URL

{% include api-url.html flag="tide" %}

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

{% include params.html p="location-p2 date10 key" %}

### 返回数据

{% include api-snippet.html %}

{% include api-response.html group="ocean" type="ttable thourly" prefix="tideTable tideHourly" %}

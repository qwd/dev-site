---
title: 潮流（弃用）
tag: [guide, api, ocean, currents]
deprecated: true
ref: 2-api-currents
---

未来10天全球潮流数据，包括潮流流速和流向。

> **警告：**潮流API已弃用，将在2025年11月1日停止服务。
{:.bqdanger}


## 请求路径 {#endpoint}

{% include api-url.html %}

## 参数 {#parameters}

#### 查询参数 {#query-parameters}

{% include params.html p="location-p6 date10" %}

## 请求示例 {#request-example}

{% include api-url-example.html %}

## 返回数据 {#response}

{% include api-snippet.html %}

{% include api-response.html group="ocean" type="ctable chourly" prefix="currentsTable currentsHourly" %}
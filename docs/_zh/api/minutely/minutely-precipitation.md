---
title: 分钟级降水
tag: [guide, api, minutely, precip]
ref: 1-api-minutely-precipitation
---

分钟级降水API（临近预报）支持中国1公里精度的未来2小时每5分钟降雨预报数据。

## 请求路径 {#endpoint}

{% include api-url.html dev=true %}

## 参数 {#parameters}

#### 查询参数 {#query-parameters}

{% include params.html p="location-coord lang-def" %}

## 请求示例 {#request-example}

{% include api-url-example.html %}

## 返回数据 {#response}

{% include api-snippet.html flag="minutely" %}

{% include api-response.html group="minutely" prefix="nil"  %}



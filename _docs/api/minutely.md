---
title: 分钟级降水
tag: [api, bd]
data: minutely
version: v7
description: 和风天气分钟级降水API接口开发文档，支持1公里格点的全国分钟级降雨预报（临近预报）数据，为每一分钟的降雨进行精准预测。
lang-ref: apimin
---

和风天气分钟级降水API接口提供中国地区未来2小时内每5分钟降水数据、降水类型以及未来2小时的降水概况信息。可实现精确到1公里格点的全国分钟级降雨/降雪预报，为每一分钟的降雨进行预测。

## 请求URL

{% include request-url.html %}

## 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

**location** {{ site.data.text.required }}

需要查询地区的以逗号分隔的[经度/纬度坐标](/docs/start/glossary#coordinate)（十进制）。例如： `location=116.41,39.92`

**key** {{ site.data.text.required }}

用户认证密钥，请参考[如何获取你的KEY](/docs/start/get-api-key)。支持[数字签名](/docs/faq/technical#signature-authentication)方式认证。例如：`key=12334567890ABC`

**gzip** {{ site.data.text.optional }}

对API接口进行压缩，可以极大的减少API接口访问延迟，减少缓存空间，提高接口连接成功率。**默认开启gzip**。

- `y` 使用gzip方式压缩，默认
- `n` 不使用压缩

**lang** {{ site.data.text.optional }}

多语言设置，分钟级降水仅支持中文和英文，具体的语言参数值请参考[多语言参数值](/docs/start/language)。**默认中文**。

## 返回数据

| 参数            | 描述                                                                   | 示例                   |
| :-------------- | :--------------------------------------------------------------------- | :--------------------- |
| code            | API状态码，具体含义请参考[状态码](/docs/start/status-code)                                              | 200                    |
| updateTime      | 当前[API的最近更新时间](/docs/start/glossary#updatetime)                                         | 2013-12-30T01:45+08:00 |
| fxLink          | 该城市的{{ page.title }}自适应网页，可嵌入网站或应用。**有可能为空。** | http://hfx.link/ae45   |
| summary         | 分钟降水描述                                                           | 未来2小时无降雨        |
| minutely.fxTime | 预报时间                                                               | 2013-12-30T01:45+08:00 |
| minutely.precip | 降水量                                                                 | 10                     |
| minutely.type   | 降水类型<br />`rain`雨<br />`snow`雪                                   | rain                   |
| refer.sources   | 原始数据来源，**可能为空**                                           |                        |
| refer.license   | 数据许可证                                           |                        |

## 请求和返回示例

{% include api-response.html %}
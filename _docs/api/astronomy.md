---
title: 太阳和月亮
tag: [api]
data: astronomy
version: v7
description: 和风天气太阳和月亮API提供了全球任意时间任意地点的日出日落API、月升月落API和月相API数据，通过这些数据我们可以完整的描述一天之中太阳和月亮的变化。
lang-ref: apiastro
---

获取最近60天全球城市日出日落、月升月落和逐小时的月相数据。

> 在[逐天预报API](/docs/api/weather)中，也会返回对应天数的日出日落、月升月落和月相数据

> 月相已考虑南北半球的差异，不需要再进行转换
{:.bqnote}

## 请求URL

{% include request-url.html %}

## 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

**location** {{ site.data.text.required }}

太阳高度角是基于经纬度测量的，需要填写具体的坐标，填写格式：经度,纬度（经度在前纬度在后，英文`,`分隔，十进制格式，北纬东经为正，南纬西经为负）。例如：`location=116.41,39.92`

**key** {{ site.data.text.required }}

用户认证key，请参考[如何获取你的KEY](/docs/start/get-api-key)。支持[数字签名](/docs/faq/technical#signature-authentication)方式进行认证。例如 `key=123456789ABC`

**date** {{ site.data.text.required }}

选择日期，最多可选择最近60天的数据。日期格式为yyyyMMdd，例如 `date=20200531`

**gzip** {{ site.data.text.optional }}

对API接口进行压缩，可以极大的减少API接口访问延迟，减少缓存空间，提高接口连接成功率。**默认开启gzip**

- `y` 使用gzip方式压缩，默认
- `n` 不使用压缩

**lang** {{ site.data.text.optional }}

多语言，**默认中文**，例如`lang=en`。具体的语言参数值请参考[多语言参数](/docs/start/language)。当一些城市不存在对应的语言时，将返回英文或其本地语言结果。

## 返回数据

| 参数                   | 描述                                                               | 示例值                 |
| ---------------------- | ------------------------------------------------------------------ | ---------------------- |
| code                   | API状态码，具体含义请参考[状态码](/docs/start/status-code)         | 200                    |
| updateTime             | 当前[API的最近更新时间](/docs/start/glossary#updatetime) | 2013-12-30T01:45+08:00 |
| fxLink                 | 该城市的{{ page.title }}自适应网页，可嵌入网站或应用               | http://hfx.link/ae45   |
| sunrise                | 日出时间                                                           | 2013-12-30T05:44+08:00 |
| sunset                 | 日落时间                                                           | 2013-12-30T17:02+08:00 |
| moonrise               | 月升时间                                                           | 2013-12-30T13:19+08:00 |
| moonset                | 月落时间                                                           | 2013-12-31T23:31+08:00 |
| moonPhase.fxTime       | 月相逐小时预报时间                                                 | 2013-12-31T23:31+08:00 |
| moonPhase.value        | 月相数值                                                           | 0.25                   |
| moonPhase.name         | 月相名字                                                           | 上弦月                 |
| moonPhase.illumination | 月亮照明度，百分比数值                                             | 30                   |
| refer.sources          | 原始数据来源，**可能为空**                                         |                        |
| refer.license          | 数据许可证                                                         |                        |

## 请求和返回示例

{% include api-response.html %}
---
title: 中国景点天气预报
book: API
tag: [api, b]
data: weather-poi
version: v7
description: 查看和风天气全国4A和5A级景点天气API接口开发文档，2000＋个景点的7天天气预报，包括：日出日落时间、最高最低温度、白天和晚间天气状况、风力、风向等。
lang-ref: apipoiweather
---

中国4A和5A级景点共2000＋的7天天气预报，包括：日出日落时间、最高最低温度、白天和晚间天气状况、风力、风向等。

## 请求URL

{% include request-url.html %}

## 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

**location** {{ site.data.text.required }}

需要查询景点的[LocationID](/docs/start/glossary#locationid)，LocationID可通过[城市搜索服务](/docs/api/geo)获取。例如： `location=101010100`

**key** {{ site.data.text.required }}

用户认证密钥，请参考[如何获取你的KEY](/docs/start/get-api-key)。支持[数字签名](/docs/faq/technical#signature-authentication)方式认证。例如：`key=12334567890ABC`

**gzip** {{ site.data.text.optional }}

对接口进行压缩，可大幅节省网络消耗、减少接口获取延迟。**默认开启gzip**。

- `y` 使用gzip方式压缩，默认
- `n` 不使用压缩

**lang** {{ site.data.text.optional }}

多语言，**默认中文**。具体的语言参数值请参考[多语言参数](/docs/start/language)

**unit** {{ site.data.text.optional }}

[度量衡单位参数](/docs/start/unit)选择，例如温度选摄氏度或华氏度。**默认公制单位**。

- `m` 公制单位，默认
- `i` 英制单位

## 返回数据

| 参数              | 描述                                                                              | 示例值           |
| ----------------- | --------------------------------------------------------------------------------- | ---------------- |
| code          | API状态码，具体含义请参考[状态码](/docs/start/status-code)                     | 200                                                                        |
| updateTime    | 当前[API的最近更新时间](/docs/start/glossary#updatetime)                | 2013-12-30T01:45+08:00                                                     |
| fxLink | 该城市的{{ page.title }}自适应网页，可嵌入网站或应用 | http://hfx.link/ae45 |
| now.obsTime       | 实况观测时间                                                                      | 2013-12-30T01:45+08:00 |
| now.temp           | 实况温度，默认单位：摄氏度                                                        | 21               |
| now.feelsLike            | 实况体感温度，默认单位：摄氏度                                                    | 23               |
| now.icon      | 当前天气状况和图标的代码，图标可通过[天气状况和图标](/docs/start/icons)下载   | 100              |
| now.text    | 实况天气状况的文字描述，包括阴晴雨雪等天气状态的描述                              | 晴               |
| now.windDir       | 实况风向                                                                          | 西北             |
| now.windScale        | 实况风力等级                                                                      | 3                |
| now.humidity           | 实况相对湿度，百分比数值                                                          | 40               |
| now.precip          | 实况降水量，默认单位：毫米                                                        | 1.2              |
| now.pressure          | 实况大气压强，默认单位：百帕                                                      | 1020             |
| daily.fxDate      | 预报日期                                                                          | 2018-05-31       |
| daily.tempMax      | 预报最高温度                                                                      | 4                |
| daily.tempMin      | 预报最低温度                                                                      | -5               |
| daily.iconDay   | 预报白天天气状况图标的代码，图标可通过[天气状况和图标](/docs/start/icons)下载 | 100              |
| daily.textDay | 预报白天天气状况描述                                                              | 晴               |
| daily.iconNight   | 预报夜间天气状况图标的代码，图标可通过[天气状况和图标](/docs/start/icons)下载 | 100              |
| daily.textNight | 晚间天气状况描述                                                                  | 晴               |
| daily.windDirDay    | 预报白天风向                                                                      | 东               |
| daily.windScaleDay     | 预报白天风力                                                                      | 2-3              |
| daily.windDirNight    | 预报夜间风向                                                                      | 东               |
| daily.windScaleNight     | 预报夜间风力                                                                      | 2-3              |
| refer.sources | 原始数据来源，**可能为空**                             |                                                                            |
| refer.license | 数据许可证                                 |                                                                            |


## 请求和返回示例

{% include api-response.html %}
---
title: 热门城市查询
tag: [api, bd]
data: geo
version: v2
description: 根据用户访问热度，提供中国和海外热门城市列表，用于开发者可以为用户提供热门城市查询天气的功能
permalink: /docs/geo/top
---

根据用户访问热度、GDP、人口等综合因素，我们可提供中国和海外各国热门城市列表，用于开发者可以为用户提供热门城市查询天气的功能。

## 请求URL

**热门城市查询** **HTTP GET**{:.httpget} 

* `https://geoapi.heweather.net/v2/top?{请求参数}`{:.requesturl }

## 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

**key** {{ site.data.text.required }}

用户认证密钥，参考[如何获取你的KEY](/docs/start/get-api-key)。支持[数字签名](/docs/faq/technical#signature-authentication)方式认证。例如：`key=12334567890ABC`

**range** {{ site.data.text.optional }}

热门城市范围，**默认全球范围。** 可选择某个国家范围内的热门城市，国家名称需使用[ISO 3166 所定义的国家代码](/docs/start/glossary#iso-3166)。

- `world` 全球城市范围，默认
- `cn` 中国城市范围，可替换为其他国家的ISO 3166 国家代码，例如`range=cn`

**number** {{ site.data.text.optional }}

返回热门城市的数量，默认返回10个，可选1-20个

**lang** {{ site.data.text.optional }}

多语言，**默认中文**，例如`lang=en`。具体的语言参数值请参考[多语言参数](/docs/start/language)。当一些城市不存在对应的语言时，将返回英文或其本地语言结果。

## 返回数据

| 参数                  | 描述                                                                                            | 示例值               |
| --------------------- | ----------------------------------------------------------------------------------------------- | -------------------- |
| code                  | API状态码，具体含义请参考[状态码](/docs/start/status-code)                                      | 200                  |
| topCityList.name      | 地区/城市名称                                                                                   | 南山区               |
| topCityList.id        | 地区/城市ID                                                                                     | 101280604            |
| topCityList.lat       | 地区/城市纬度                                                                                   | 22.53122             |
| topCityList.lon       | 地区/城市经度                                                                                   | 113.92942            |
| topCityList.adm2      | 该地区/城市的上级行政区划名称                                                                   | 深圳市               |
| topCityList.adm1      | 该地区/城市所属一级行政区域                                                                     | 广东省               |
| topCityList.country   | 该地区/城市所属国家名称                                                                         | 中国                 |
| topCityList.tz        | 该地区/城市所在[时区](/docs/start/glossary#timezone)                                  | Asia/Shanghai        |
| topCityList.utcOffset | 该地区/城市目前与UTC时间偏移的小时数，参考[详细说明](/docs/start/glossary#utc-offset) | +08:00               |
| topCityList.isDst     | 该地区/城市是否当前处于夏令时<br />`1` 表示当前处于夏令时 <br /> `0` 表示当前不是夏令时         | 0                    |
| topCityList.type      | 该地区/城市的属性                                                                               | city                 |
| topCityList.rank      | [地区评分](/docs/start/glossary#rank)                                                 | 10                   |
| topCityList.fxLink    | 该地区的天气预报网页链接，便于嵌入你的网站或应用                                                | http://hfx.link/34T5 |

## 请求和返回示例

{% include api-response.html %}
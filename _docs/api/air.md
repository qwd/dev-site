---
title: 空气质量
tag: [api]
data: air
version: v7
description: 和风天气提供全国3240市县区及1500个监测站点的空气质量AQI接口。和风天气API支持空气质量AQI数据，空气质量实况数据、空气质量未来7天预报以及空气质量未来逐小时预报。
lang-ref: apiair
---

全国3240市县区及1500个监测站点的空气质量AQI接口，支持空气质量AQI数据，空气质量实况数据、空气质量未来7天预报。通过灵活的接口请求参数，你可以一次获取以上数据，也可以分别获取其中你需要的数据。

## 请求URL

{% include request-url.html %}

## 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

**location** {{ site.data.text.required }}

需要查询地区的[LocationID](/docs/start/glossary#locationid)或以逗号分隔的[经度/纬度坐标](/docsgetting-started/glossary#coordinate)（十进制），LocationID可通过[城市搜索服务](/docs/api/geo)获取。例如：`location=101010100` 或 `location=116.41,39.92`

**key** {{ site.data.text.required }}

用户认证密钥，请参考[如何获取你的KEY](/docs/start/get-api-key)。支持[数字签名](/docs/faq/technical#signature-authentication)方式认证。例如：`key=12334567890ABC`

**gzip** {{ site.data.text.optional }}

对API接口进行压缩，可以极大的减少API接口访问延迟，减少缓存空间，提高接口连接成功率。**默认开启gzip**

- `y` 使用gzip方式压缩，默认
- `n` 不使用压缩

**lang** {{ site.data.text.optional }}

多语言，**默认中文**。具体的语言参数值请参考[多语言参数](/docs/start/language)

## 返回数据

| 参数             | 描述                                                                                                                   | 示例值                 |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| code             | API状态码，具体含义请参考[状态码](/docs/start/status-code)                                                             | 200                    |
| updateTime       | 当前[API的最近更新时间](/docs/start/glossary#updatetime)                                                     | 2013-12-30T01:45+08:00 |
| fxLink           | 该城市的{{ page.title }}自适应网页，可嵌入网站或应用                                                                   | http://hfx.link/ae45   |
| now.pubTime      | 实时空气质量数据发布时间                                                                                               | 2013-12-30T01:45+08:00 |
| now.aqi          | 实时空气质量指数                                                                                                       | 74                     |
| now.level        | 实时空气质量指数等级                                                                                                   | 2                      |
| now.category     | 实时空气质量指数级别                                                                                                   | 良                     |
| now.primary      | 实时空气质量的主要污染物，空气质量为优时，返回值为`NA`                                                                   | pm2.5                  |
| now.pm10         | 实时 pm10                                                                                                              | 78                     |
| now.pm2p5        | 实时 pm2.5                                                                                                             | 66                     |
| now.no2          | 实时 二氧化氮                                                                                                          | 40                     |
| now.so2          | 实时 二氧化硫                                                                                                          | 30                     |
| now.co           | 实时 一氧化碳                                                                                                          | 33                     |
| now.o3           | 实时 臭氧                                                                                                              | 20                     |
| station.pubTime  | 监测站实时空气质量数据发布时间，仅在[国控站点的城市](https://cdn.qweather.com/air_gov.xlsx)中返回。                 | 2013-12-30T01:45+08:00 |
| station.name     | 监测站名称，仅在[国控站点的城市](https://cdn.qweather.com/air_gov.xlsx)中返回                                       | 万寿西宫               |
| station.id       | 监测站ID，仅在[国控站点的城市](https://cdn.qweather.com/air_gov.xlsx)中返回                                         | CNA110000              |
| station.aqi      | 监测站实时空气质量指数，仅在[国控站点的城市](https://cdn.qweather.com/air_gov.xlsx)中返回                           | 74                     |
| station.level    | 监测站实时空气质量指数等级，仅在[国控站点的城市](https://cdn.qweather.com/air_gov.xlsx)中返回                       | 2                      |
| station.category | 监测站实时空气质量指数级别，仅在[国控站点的城市](https://cdn.qweather.com/air_gov.xlsx)中返回                       | 良                     |
| station.primary  | 监测站实时主要污染物，仅在[国控站点的城市](https://cdn.qweather.com/air_gov.xlsx)中返回。空气质量为优时，返回值为`NA` | pm25                   |
| station.pm10     | 监测站实时 pm10，仅在[国控站点的城市](https://cdn.qweather.com/air_gov.xlsx)中返回                                  | 78                     |
| station.pm2p5    | 监测站实时 pm2.5，仅在[国控站点的城市](https://cdn.qweather.com/air_gov.xlsx)中返回                                 | 66                     |
| station.no2      | 监测站实时 二氧化氮，仅在[国控站点的城市](https://cdn.qweather.com/air_gov.xlsx)中返回                              | 40                     |
| station.so2      | 监测站实时 二氧化硫，仅在[国控站点的城市](https://cdn.qweather.com/air_gov.xlsx)中返回                              | 30                     |
| station.co       | 监测站实时 一氧化碳，仅在[国控站点的城市](https://cdn.qweather.com/air_gov.xlsx)中返回                              | 33                     |
| station.o3       | 监测站实时 臭氧，仅在[国控站点的城市](https://cdn.qweather.com/air_gov.xlsx)中返回                                  | 20                     |
| daily.fxDate     | 空气质量逐天预报日期                                                                                                   | 2018-05-31             |
| daily.aqi        | 空气质量逐天预报指数                                                                                                   | 74                     |
| daily.level      | 逐天预报的空气质量指数等级                                                                                             | 2                      |
| daily.category   | 逐天预空气质量指数级别                                                                                                 | 良                     |
| daily.primary    | 空气质量逐天预报的主要污染物，空气质量为优时，返回值为`NA`                                                               | pm2.5                  |
| refer.sources    | 原始数据来源，**可能为空**                                                                                             |                        |
| refer.license    | 数据许可证                                                                                                           |                        |

## 空气质量指数等级

| 数值    | 等级 | 级别     | 级别颜色 |
| ------- | ---- | -------- | -------- |
| 0-50    | 一级 | 优       | 绿色     |
| 51-100  | 二级 | 良       | 黄色     |
| 101-150 | 三级 | 轻度污染 | 橙色     |
| 151-200 | 四级 | 中度污染 | 红色     |
| 201-300 | 五级 | 重度污染 | 紫色     |
| >300    | 六级 | 严重污染 | 褐红色   |

## 请求和返回示例

{% include api-response.html %}
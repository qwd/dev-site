---
title: 历史天气和空气质量
tag: [api, b]
data: historical
version: v7
description: 查看和风天气历史天气API接口开发文档，支持2010年1月1日至今的全国城市历史天气数据，API支持前一天历史数据，全部历史数据可选择一次性下载，具体方式请联系我们
---

最近历史数据，可以通过API接口获取最近10天的天气、空气质量历史数据。其中空气质量仅支持中国范围内的城市。

如需要更长时间的城市历史数据或格点历史数据，请在[这里](https://www.heweather.com/products/mad/historical-inquiry)提交购买申请。

## 请求URL

{% include request-url.html %}

## 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

**location** {{ site.data.text.required }}

需要查询地区的[LocationID](/docs/start/glossary#locationid)，LocationID可通过[城市搜索服务](/docs/api/geo)获取。例如： `location=101010100`

**key** {{ site.data.text.required }}

用户认证密钥，请参考[如何获取你的KEY](/docs/start/get-api-key)。支持[数字签名](/docs/faq/technical#signature-authentication)方式认证。例如：`key=12334567890ABC`

**date** {{ site.data.text.required }}

选择获取历史的日期限度，最多可选择最近10天的数据，例如今天是7月5日，最多可获取6月25日至7月4日的历史数据。日期格式为yyyyMMdd，例如 `date=20200531`

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

| 参数                    | 描述                                                                            | 示例值                 |
| ----------------------- | ------------------------------------------------------------------------------- | ---------------------- |
| code                    | API状态码，具体含义请参考[状态码](/docs/start/status-code)                      | 200                    |
| fxLink                  | 该城市的{{ page.title }}自适应网页，可嵌入网站或应用。有可能为空。              | http://hfx.link/ae45   |
| weatherDaily.date       | 历史当天天气日期                                                                | 2018-05-31             |
| weatherDaily.sunrise    | 当天日出时间                                                                    | 07:36                  |
| weatherDaily.sunset     | 当天日落时间                                                                    | 16:58                  |
| weatherDaily.moonrise   | 当天月升时间                                                                    | 04:47                  |
| weatherDaily.moonset    | 当天月落时间                                                                    | 14:59                  |
| weatherDaily.moonPhase  | 当天月相名称                                                                    | 上弦月                 |
| weatherDaily.tempMax    | 当天最高温度                                                                    | 4                      |
| weatherDaily.tempMin    | 当天最低温度                                                                    | -5                     |
| weatherDaily.humidity   | 当天相对湿度                                                                    | 37                     |
| weatherDaily.precip     | 当天降水量                                                                      | 0                      |
| weatherDaily.pressure   | 当天大气压强                                                                    | 1018                   |
| weatherHourly.time      | 历史当天天气时间                                                                | 2013-12-30T01:45+08:00 |
| weatherHourly.temp      | 当天每小时温度                                                                  | 2                      |
| weatherHourly.icon      | 当天每小时天气状况图标的代码，图标可通过[天气状况和图标](/docs/start/icons)下载 | 101                    |
| weatherHourly.text      | 当天每小时天气状况代码                                                          | 多云                   |
| weatherHourly.precip    | 当天每小时累计降水量                                                            | 1.2                    |
| weatherHourly.wind360    | 当天每小时风向360角度                                                                                     | 305              |
| weatherHourly.windDir   | 当天每小时风向                                                                  | 西北                   |
| weatherHourly.windScale | 当天每小时风力                                                                  | 4                      |
| weatherHourly.windSpeed | 当天每小时风速，公里/小时                                                       | 15                     |
| weatherHourly.humidity  | 当天每小时相对湿度                                                              | 30                     |
| weatherHourly.pressure  | 当天每小时大气压强                                                              | 1030                   |
| airHourly.pubTime       | 历史当天空气质量数据发布时间,格式yyyy-MM-dd HH:mm                               | 2013-12-30T01:45+08:00 |
| airHourly.aqi           | 当天每小时空气质量指数                                                          | 74                     |
| airHourly.level         | 当天每小时空气质量指数等级                                                              | 2                     |
| airHourly.category      | 当天每小时空气质量指数级别                                                              | 良                     |
| airHourly.primary       | 当天每小时主要污染物                                                            | pm2.5                  |
| airHourly.pm10          | 当天每小时pm10                                                                  | 78                     |
| airHourly.pm2p5         | 当天每小时pm2.5                                                                 | 66                     |
| airHourly.no2           | 当天每小时二氧化氮                                                              | 40                     |
| airHourly.so2           | 当天每小时二氧化硫                                                              | 30                     |
| airHourly.co            | 当天每小时一氧化碳                                                              | 33                     |
| airHourly.o3            | 当天每小时臭氧                                                                  | 20                     |
| refer.sources           | 原始数据来源，**可能为空**                                                      |                        |
| refer.license           | 数据许可证                                                                      |                        |

## 请求和返回示例

{% include api-response.html %}

---
title: 天气预报和实况
tag: [api, bd]
data: weather
version: v7
description: 和风全球天气API接口包括：全球天气预报API、逐小时天气预报API、未来15天预报API。和风天气API支持全国4000+个市县区和海外15万个城市天气预报。
lang-ref: apiweather
---

城市级天气预报API，包括全球15万个城市或地区的1-15天天气预报、实况天气、逐小时天气预报以及日出日落、月升月落等数据。

## 请求URL

{% include request-url.html %}
  
## 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

**location** {{ site.data.text.required }}

需要查询地区的[LocationID](/docs/start/glossary#locationid)或以逗号分隔的[经度/纬度坐标](/docs/start/glossary#coordinate)（十进制），LocationID可通过[城市搜索服务](/docs/api/geo)获取。例如： `location=101010100` 或 `location=116.41,39.92`

**key** {{ site.data.text.required }}

用户认证密钥，请参考[如何获取你的KEY](/docs/start/get-api-key)。支持[数字签名](/docs/faq/technical#signature-authentication)方式认证。例如：`key=12334567890ABC`

**gzip** {{ site.data.text.optional }}

对接口进行压缩，可大幅节省网络消耗、减少接口获取延迟。**默认开启gzip**

- `y` 使用gzip方式压缩，默认
- `n` 不使用压缩

**lang** {{ site.data.text.optional }}

多语言设置，支持31种语言，默认中文。具体的语言参数值请参考[多语言参数值](/docs/start/language)。

**unit** {{ site.data.text.optional }}

[度量衡单位参数](/docs/start/unit)选择，例如温度选摄氏度或华氏度、公里或英里。**默认公制单位**

- `m` 公制单位，默认
- `i` 英制单位

## 返回数据

| 参数       | 描述              | 示例值    |
| ---------- | ----------------- | --------- |
| code          | API状态码，具体含义请参考[状态码](/docs/start/status-code)                     | 200                                                                        |
| updateTime    | 当前[API的最近更新时间](/docs/start/glossary#updatetime)                | 2013-12-30T01:45+08:00                                                     |
| fxLink | 该城市的{{ page.title }}自适应网页，可嵌入网站或应用 | http://hfx.link/ae45 |
| now.obsTime    | 实况观测时间                                                                                            | 2013-12-30T01:45+08:00 |
| now.temp        | 实况温度，默认单位：摄氏度                                                                                  | 21               |
| now.feelsLike         | 实况体感温度，默认单位：摄氏度                                                                              | 23               |
| now.icon   | 当前天气状况和图标的代码，图标可通过[天气状况和图标](/docs/start/icons)下载  | 100              |
| now.text | 实况天气状况的文字描述，包括阴晴雨雪等天气状态的描述                                                                                      | 晴               |
| now.wind360    | 实况风向360角度                                                                                             | 305              |
| now.windDir    | 实况风向                                                                                                    | 西北             |
| now.windScale     | 实况风力等级                                                                                                    | 3                |
| now.windSpeed    | 实况风速，公里/小时                                                                                         | 15               |
| now.humidity        | 实况相对湿度，百分比数值                                                                                    | 40               |
| now.precip       | 实况降水量，默认单位：毫米                                                                                  | 1.2              |
| now.pressure       | 实况大气压强，默认单位：百帕                                                                                | 1020             |
| now.vis        | 实况能见度，默认单位：公里                                                                                  | 10               |
| now.cloud      | 实况云量，百分比数值                                                                                        | 23               |
| now.dew        | 实况露点温度                                                                                        | 12               |
| daily.fxDate      | 预报日期                                                                                            | 2013-05-31 |
| daily.sunrise          | 日出时间                                                                                            | 07:34      |
| daily.sunset          | 日落时间                                                                                            | 17:21      |
| daily.moonrise          | 月升时间                                                                                            | 16:09      |
| daily.moonset          | 月落时间                                                                                            | 04:21      |
| daily.moonPhase       | 月相名称                                                                                                |  满月          |
| daily.tempMax      | 预报当天最高温度                                                                                            | 4          |
| daily.tempMin      | 预报当天最低温度                                                                                            | -5         |
| daily.iconDay   | 预报白天天气状况的图标代码，图标可通过[天气状况和图标](/docs/start/icons)下载 | 100        |
| daily.textDay | 预报白天天气状况文字描述，包括阴晴雨雪等天气状态的描述                                                                                | 晴         |
| daily.iconNight   | 预报夜间天气状况的图标代码，图标可通过[天气状况和图标](/docs/start/icons)下载 | 100        |
| daily.textNight | 预报晚间天气状况文字描述，包括阴晴雨雪等天气状态的描述                                                                                | 晴         |
| daily.wind360Day     | 预报白天风向360角度                                                                                         | 305        |
| daily.windDirDay     | 预报白天风向                                                                                                | 西北       |
| daily.windScaleDay      | 预报白天风力等级                                                                                                | 3-4        |
| daily.windSpeedDay     | 预报白天风速，公里/小时                                                                                     | 15         |
| daily.wind360Night     | 预报夜间风向360角度                                                                                         | 305        |
| daily.WindDirNight     | 预报夜间当天风向                                                                                                | 西北       |
| daily.windScaleNight      | 预报夜间风力等级                                                                                                | 3-4        |
| daily.windSpeedNight     | 预报夜间风速，公里/小时                                                                                    | 15         |
| daily.humidity         | 预报当天相对湿度，百分比数值                                                                                | 40         |
| daily.precip        | 预报当天降水量，默认单位：毫米                                                                              | 1.2        |
| daily.pressure        | 预报当天大气压强，默认单位：百帕                                                                            | 1020       |
| daily.vis         | 预报当天能见度，默认单位：公里                                                                              | 10         |
| daily.cloud       | 预报当天云量，百分比数值                                                                                    | 23         |
| daily.uvIndex     | 预报当天紫外线强度指数                                                                                      | 3          |
| hourly.fxTime     | 逐小时预报时间                                                                                        | 2013-12-30T13:00+08:00 |
| hourly.temp        | 逐小时预报温度                                                                                            | 2                |
| hourly.icon   | 逐小时预报天气状况图标代码，图标可通过[天气状况和图标](/docs/start/icons)下载  | 101              |
| hourly.text | 逐小时预报天气状况文字描述，包括阴晴雨雪等天气状态的描述                                                                                | 多云             |
| hourly.wind360    | 逐小时预报风向360角度                                                                                     | 305              |
| hourly.windDir    | 逐小时预报风向                                                                                            | 西北             |
| hourly.windScale     | 逐小时预报风力等级                                                                                            | 3                |
| hourly.windSpeed    | 逐小时预报风速，公里/小时                                                                                 | 15               |
| hourly.humidity        | 逐小时预报相对湿度，百分比数值                                                                            | 40               |
| hourly.precip       | 逐小时预报降水量，默认单位：毫米                                                                          | 1.2              |
| hourly.pop       | 逐小时预报降水概率，百分比数值，可能为空                                                                          | 5              |
| hourly.pressure       | 逐小时预报大气压强，默认单位：百帕                                                                        | 1020             |
| hourly.cloud      | 逐小时预报云量，百分比数值                                                                                | 23               |
| hourly.dew        | 逐小时预报露点温度                                                                                        | 12               |
| refer.sources | 原始数据来源，**可能为空**                             |                                                                            |
| refer.license | 数据许可证                                 |                                                                            |

## 请求和返回示例

{% include api-response.html %}

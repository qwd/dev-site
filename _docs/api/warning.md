---
title: 天气灾害预警
tag: [api, bd]
data: warning
version: v7
description: 和风天气灾害预警API接口支持全国3240个市县区天气灾害预警，包括：台风、暴雨、暴雪、寒潮、大风、沙尘暴、高温、干旱、雷电、冰雹、霜冻、大雾、霾、道路结冰、寒冷、灰霾、雷雨大风、森林火险、降温、道路冰雪、干热风、低温、冰冻、空气重污染、海上大雾、雷暴大风、持续低温、浓浮尘、龙卷风、低温冻害、海上大风、低温雨雪冰冻、强对流、臭氧、大雪、强降雨、强降温、雪灾、森林（草原）火险、雷暴、严寒、沙尘、海上雷雨大风、海上雷电、海上台风，
toc: true
---

和风天气灾害预警API接口支持全国3240个市县区天气灾害预警，预警类型和级别包括：
- 预警种类：台风、暴雨、暴雪、寒潮、大风、沙尘暴、高温、干旱、雷电、冰雹、霜冻、大雾、霾、道路结冰、寒冷、灰霾、雷雨大风、森林火险、降温、道路冰雪、干热风、低温、冰冻、空气重污染、海上大雾、雷暴大风、持续低温、浓浮尘、龙卷风、低温冻害、海上大风、低温雨雪冰冻、强对流、臭氧、大雪、强降雨、强降温、雪灾、森林（草原）火险、雷暴、严寒、沙尘、海上雷雨大风、海上雷电、海上台风。
- 预警级别：白色（仅限广东省内）、蓝色、黄色、橙色、红色

灾害预警API可以获取指定城市的极端天气预警数据，也可以获取一个国家内当前发生极端天气的城市列表。

## 灾害预警

### 请求URL

**商业版** **HTTP GET**{:.httpget} 

`https://api.heweather.net/v7/warning/now?{请求参数}`{:.requesturl }

**开发版** **HTTP GET**{:.httpget}

`https://devapi.heweather.net/v7/warning/now?{请求参数}`{:.requesturl }

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

**location** {{ site.data.text.required }}

需要查询地区的[LocationID](/docs/start/glossary#locationid)或以逗号分隔的[经度/纬度坐标](/docs/start/glossary#coordinate)（十进制），LocationID可通过[城市搜索服务](/docs/api/geo)获取。例如： `location=101010100` 或 `location=116.41,39.92`

**key** {{ site.data.text.required }}

用户认证密钥，请参考[如何获取你的KEY](/docs/start/get-api-key)。支持[数字签名](/docs/faq/technical#signature-authentication)方式认证。例如：`key=12334567890ABC`

**gzip** {{ site.data.text.optional }}

对接口进行压缩，可大幅节省网络消耗、减少接口获取延迟。**默认开启gzip**。

- `y` 使用gzip方式压缩，默认
- `n` 不使用压缩

**lang** {{ site.data.text.optional }}

多语言设置，具体的语言参数值请参考[多语言参数](/docs/start/language)。**默认中文**。

### 返回数据

> 如果查询的地区当前没有灾害预警信息，返回的`warning`字段为空。

| 参数              | 描述                                                                 | 示例值                                                           |
| ----------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------- |
| code              | API状态码，具体含义请参考[状态码](/docs/start/status-code)           | 200                                                              |
| updateTime        | 当前[API的最近更新时间](/docs/start/glossary#updatetime)             | 2013-12-30T01:45+08:00                                           |
| fxLink            | 该城市的天气预警的自适应网页，可嵌入网站或应用。**可能为空。** | http://hfx.link/ae45                                             |
| warning.id        | 本条预警的唯一标识，可判断本条预警是否已经存在，id有效期不超过72小时 | 202010110345679813                                               |
| warning.pubTime   | 预警发布时间                                                         | 2017-10-25T12:03+08:00                                           |
| warning.title     | 预警信息标题                                                         | 广东省深圳市气象台发布雷电黄色预警                               |
| warning.startTime | 预警开始时间，**不适用于所有国家，可能为空。**                       | 2017-10-25T13:12                                                 |
| warning.endTime   | 预警结束时间，**不适用于所有国家，可能为空。**                       | 2017-10-26T13:12                                                 |
| warning.status    | 预警状态，**不适用于所有国家，可能为空。**                           | 预警中                                                           |
| warning.level     | 预警等级                                                             | 黄色                                                             |
| warning.type      | 预警类型                                                             | 雷电                                                             |
| warning.text      | 预警详细文字描述                                                     | 深圳市气象局于10月04日12时59分发布雷电黄色预警信号，请注意防御。 |
| refer.sources     | 原始数据来源，**可能为空**                                           |                                                                  |
| refer.license     | 数据许可证                                                           |                                                                  |

## 灾害预警城市列表

### 请求URL

**商业版** **HTTP GET**{:.httpget}

`https://api.heweather.net/v7/warning/list?{请求参数}`{:.requesturl }

**开发版** **HTTP GET**{:.httpget} 

`https://devapi.heweather.net/v7/warning/list?{请求参数}`{:.requesturl }

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

**range** {{ site.data.text.required }}

选择指定的国家，目前仅支持中国。例如`range=cn`。

**key** {{ site.data.text.required }}

用户认证密钥，请参考[如何获取你的KEY](/docs/start/get-api-key)。支持[数字签名](/docs/faq/technical#signature-authentication)方式认证。例如：`key=12334567890ABC`

**gzip** {{ site.data.text.optional }}

对接口进行压缩，可大幅节省网络消耗、减少接口获取延迟。**默认开启gzip**。

- `y` 使用gzip方式压缩，默认
- `n` 不使用压缩

### 返回数据

| 参数                      | 描述                                                       | 示例值                 |
| ------------------------- | ---------------------------------------------------------- | ---------------------- |
| code                      | API状态码，具体含义请参考[状态码](/docs/start/status-code) | 200                    |
| updateTime                | 当前[API的最近更新时间](/docs/start/glossary#updatetime)   | 2013-12-30T01:45+08:00 |
| warningLocList.locationId | 当前国家预警的城市/地区ID                                  | 101010100              |

## 请求和返回示例

{% include api-response.html %}
---
title: 城市信息搜索
tag: [api]
data: geo
version: v2
description: 支持模糊搜索的全球位置/城市搜索服务，支持多语言、模糊搜索等功能。
toc: true
---

天气数据是基于地理位置的数据，因此获取天气之前需要先知道具体的位置信息。和风天气提供一个功能强大的城市信息搜索API服务，可获取到需要查询城市的基本信息，包括城市或地区的Location ID（你需要这个ID去查询天气），多语言名称、经纬度、时区、海拔、Rank值、归属上级行政区域、所在行政区域等。

除此之外，城市信息搜索服务还可以帮助你：

- 避免重名城市的困扰
- 在你的应用或网站中根据用户输入的名称返回多个城市结果，便于用户选择准确的城市并返回该城市天气
- 在你的应用或网站中展示热门城市，用户直接选择即可，减少搜索步骤提高用户体验
- 不需要维护城市列表，城市信息更新实时获取

> 城市搜索每天每个账号下所有应用前50000次免费，超出部分参考[计费方式](/docs/faq/buy#price)

## 城市信息搜索

### 请求URL

**HTTP GET**{:.httpget} `https://geoapi.heweather.net/v2/city/lookup?{请求参数}`{:.requesturl }

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用 `&`进行分隔。

**location** {{ site.data.text.required }}

输入需要查询的城市名称，可使用[Location ID](/docs/start/glossary#locationid)、中文、英文、以逗号分隔的[经度/纬度坐标](/docs/start/glossary#coordinate)、[ADCode](/docs/start/glossary#adcode)（仅限中国城市）。例如`location=beijing`， `location=116.4,39.1`

**key** {{ site.data.text.required }}
  
用户认证key，请参考[如何获取你的KEY](/docs/start/get-api-key)。支持[数字签名](/docs/faq/technical#signature-authentication)方式进行认证，推荐使用。例如 `key=123456789ABC`

**range** {{ site.data.text.optional }}
  
搜索范围，**默认搜索全球城市。** 可设定只在某个国家范围内进行搜索，国家名称需使用[ISO 3166 所定义的国家代码](/docs/start/glossary#iso-3166)。

- `world` 全球城市范围，默认
- `cn` 中国城市范围，可替换为其他国家的ISO 3166 国家代码，例如`range=us`

**mode** {{ site.data.text.optional }}
  
搜索查询的方式。在使用名称搜索的时候，可选择模糊搜索或精准搜索，精准搜索最多返回1个结果，模糊搜索最多返回10个结果。**默认精准搜索。**

- `exact` 精准搜索，默认
- `fuzzy` 模糊搜索

> **使用模糊搜索时**，允许用户输入城市名称一部分进行搜索，最少一个汉字或2个英文字母，排名将按照相关性和Rank值进行排列，便于开发或用户进行选择。模糊搜索仅支持名称搜索，不适用于经纬度、地区ID或Adcode。
> 
> **使用精准搜索时**，只返回一个相关性最强的结果，因此需要尽量输入完整的城市或地区名称，例如希望查找吉林省辽源市下辖的西区，如果仅输入西安，则有可能返回的结果是陕西省的西安市。
> 
> **当出现完全重名的情况下**，例如吉林省辽源市下辖的西安区和黑龙江省牡丹江市下辖的西安区，则会根据Rank值排名较高的城市返回在这种情况下，可以通过“名称,行政区域”的方式进一步确定需要查询的城市或地区，例如`location=西安,黑龙江`

**number** {{ site.data.text.optional }}

返回城市的数量，取值范围1-20，**默认返回10个结果**。

**gzip** {{ site.data.text.optional }}

对API接口进行压缩，可以极大的减少API接口访问延迟，减少缓存空间，提高接口连接成功率。**默认开启gzip**

- `y` 使用gzip方式压缩，默认
- `n` 不使用压缩

**lang** {{ site.data.text.optional }}

多语言，**默认中文**，例如`lang=en`。具体的语言参数值请参考[多语言参数](/docs/start/language)。当一些城市不存在对应的语言时，将返回英文或其本地语言结果。

### 返回数据

| 参数               | 描述                                                                                            | 示例                 |
| ------------------ | ----------------------------------------------------------------------------------------------- | -------------------- |
| code               | API状态码，具体含义请参考[状态码](/docs/start/status-code)                                      | 200                  |
| location.name      | 地区/城市名称                                                                                   | 南山区               |
| location.id        | 地区/城市ID                                                                                     | 101280604            |
| location.lat       | 地区/城市纬度                                                                                   | 22.53122             |
| location.lon       | 地区/城市经度                                                                                   | 113.92942            |
| location.adm2      | 该地区/城市的上级行政区划名称                                                                   | 深圳市               |
| location.adm1      | 该地区/城市所属一级行政区域                                                                     | 广东省               |
| location.country   | 该地区/城市所属国家名称                                                                         | 中国                 |
| location.tz        | 该地区/城市所在[时区](/docs/start/glossary#timezone)                                  | Asia/Shanghai        |
| location.utcOffset | 该地区/城市目前与UTC时间偏移的小时数，参考[详细说明](/docs/start/glossary#utc-offset) | +08:00               |
| location.isDst     | 该地区/城市是否当前处于夏令时<br />`1` 表示当前处于夏令时 <br /> `0` 表示当前不是夏令时         | 0                    |
| location.type      | 该地区/城市的属性                                                                               | city                 |
| location.rank      | [地区评分](/docs/start/glossary#rank)                                                 | 10                   |
| location.fxLink    | 该地区的天气预报网页链接，便于嵌入你的网站或应用                                                | http://hfx.link/34T5 |

## 热门城市查询

### 请求URL

**HTTP GET**{:.httpget} `https://geoapi.heweather.net/v2/city/top?{请求参数}`{:.requesturl }

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用 `&`进行分隔。

**key** {{ site.data.text.required }}

用户认证密钥，参考[如何获取你的KEY](/docs/start/get-api-key)。支持[数字签名](/docs/faq/technical#signature-authentication)方式认证。例如：`key=12334567890ABC`

**range** {{ site.data.text.optional }}

热门城市范围，**默认全球范围。** 可选择某个国家范围内的热门城市，国家名称需使用[ISO 3166 所定义的国家代码](/docs/start/glossary#iso-3166)。

- `world` 全球城市范围，默认
- `cn` 中国城市范围，可替换为其他国家的ISO 3166 国家代码，例如`range=cn`

**number** {{ site.data.text.optional }}

返回城市的数量，取值范围1-20，**默认返回10个结果**。

**gzip** {{ site.data.text.optional }}

对API接口进行压缩，可以极大的减少API接口访问延迟，减少缓存空间，提高接口连接成功率。**默认开启gzip**

- `y` 使用gzip方式压缩，默认
- `n` 不使用压缩

**lang** {{ site.data.text.optional }}

多语言，**默认中文**，例如`lang=en`。具体的语言参数值请参考[多语言参数](/docs/start/language)。当一些城市不存在对应的语言时，将返回英文或其本地语言结果。

### 返回数据

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

## POI信息搜索

### 请求URL

**HTTP GET**{:.httpget} `https://geoapi.heweather.net/v2/poi/lookup?{请求参数}`{:.requesturl }

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

**location** {{ site.data.text.required }}

输入需要查询的POI名称，可使用中文、英文。最少一个汉字或2个英文字母，返回结果将按照相关性和Rank值进行排列。例如`location=故宫`

**key** {{ site.data.text.required }}
  
用户认证key，请参考[如何获取你的KEY](/docs/start/get-api-key)。支持[数字签名](/docs/faq/technical#signature-authentication)方式进行认证，推荐使用。例如 `key=123456789ABC`

**type** {{ site.data.text.required }}

POI类型，可选择搜索某一类型的POI，目前仅限景点。例如`type=scenic`

**city** {{ site.data.text.optional }}
  
选择POI所在城市，可设定只搜索在特定城市内的POI信息。城市名称可以是中文、英文或城市的LocationID。**默认全世界范围**。

> 城市名称需要精准匹配，建议使用LocaitonID，如城市名称无法识别，则数据返回为空。

**number** {{ site.data.text.optional }}

返回POI的数量，取值范围1-20，**默认返回10个结果**。

**gzip** {{ site.data.text.optional }}

对API接口进行压缩，可以极大的减少API接口访问延迟，减少缓存空间，提高接口连接成功率。**默认开启gzip**

- `y` 使用gzip方式压缩，默认
- `n` 不使用压缩

**lang** {{ site.data.text.optional }}

多语言，**默认中文**，例如`lang=en`。具体的语言参数值请参考[多语言参数](/docs/start/language)。当一些城市不存在对应的语言时，将返回英文或其本地语言结果。

### 返回数据

| 参数          | 描述                                                                                      | 示例          |
| ------------- | ----------------------------------------------------------------------------------------- | ------------- |
| code          | API状态码，具体含义请参考[状态码](/docs/start/status-code)                                | 200           |
| poi.name      | POI名称                                                                                   | 南山区        |
| poi.id        | POI的LocationID                                                                           | 101280604     |
| poi.lat       | POI纬度                                                                                   | 22.53122      |
| poi.lon       | POI经度                                                                                   | 113.92942     |
| poi.adm2      | 该POI所属的上级行政区划名称                                                               | 深圳市        |
| poi.adm1      | 该POI所属的一级行政区域                                                                   | 广东省        |
| poi.country   | 该POI所属的国家名称                                                                       | 中国          |
| poi.tz        | 该POI所在[时区](/docs/start/glossary#timezone)                                  | Asia/Shanghai |
| poi.utcOffset | 该POI目前与UTC时间偏移的小时数，参考[详细说明](/docs/start/glossary#utc-offset) | +08:00        |
| poi.isDst     | 该POI是否当前处于夏令时<br />`1` 表示当前处于夏令时 <br /> `0` 表示当前不是夏令时         | 0             |
| poi.type      | 该POI的属性                                                                               | city          |
| poi.rank      | [地区评分](/docs/start/glossary#rank)                                           | 10            |

## POI范围搜索

### 请求URL

**HTTP GET**{:.httpget} `https://geoapi.heweather.net/v2/poi/range?{请求参数}`{:.requesturl }

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值，参数之间使用`&`进行分隔。

**location** {{ site.data.text.required }}

输入需要查询的POI坐标，坐标以逗号分隔的[经度/纬度坐标](/docs/start/glossary#coordinate)。例如`location=116.4,39.1`

**key** {{ site.data.text.required }}
  
用户认证key，请参考[如何获取你的KEY](/docs/start/get-api-key)。支持[数字签名](/docs/faq/technical#signature-authentication)方式进行认证，推荐使用。例如 `key=123456789ABC`

**type** {{ site.data.text.required }}

POI类型，可选择搜索某一类型的POI，目前仅限景点。例如`type=scenic`

**radius** {{ site.data.text.optional }}

搜索范围，可设置搜索半径，取值范围1-50，单位：公里。**默认5公里**。

**number** {{ site.data.text.optional }}

返回城市的数量，取值范围1-20，**默认返回10个结果**。

**gzip** {{ site.data.text.optional }}

对API接口进行压缩，可以极大的减少API接口访问延迟，减少缓存空间，提高接口连接成功率。**默认开启gzip**

- `y` 使用gzip方式压缩，默认
- `n` 不使用压缩

**lang** {{ site.data.text.optional }}

多语言，**默认中文**，例如`lang=en`。具体的语言参数值请参考[多语言参数](/docs/start/language)。当一些城市不存在对应的语言时，将返回英文或其本地语言结果。

### 返回数据

| 参数          | 描述                                                                                      | 示例          |
| ------------- | ----------------------------------------------------------------------------------------- | ------------- |
| code          | API状态码，具体含义请参考[状态码](/docs/start/status-code)                                | 200           |
| poi.name      | POI名称                                                                                   | 南山区        |
| poi.id        | POI的LocationID                                                                           | 101280604     |
| poi.lat       | POI纬度                                                                                   | 22.53122      |
| poi.lon       | POI经度                                                                                   | 113.92942     |
| poi.adm2      | 该POI所属的上级行政区划名称                                                               | 深圳市        |
| poi.adm1      | 该POI所属的一级行政区域                                                                   | 广东省        |
| poi.country   | 该POI所属的国家名称                                                                       | 中国          |
| poi.tz        | 该POI所在[时区](/docs/start/glossary#timezone)                                  | Asia/Shanghai |
| poi.utcOffset | 该POI目前与UTC时间偏移的小时数，参考[详细说明](/docs/start/glossary#utc-offset) | +08:00        |
| poi.isDst     | 该POI是否当前处于夏令时<br />`1` 表示当前处于夏令时 <br /> `0` 表示当前不是夏令时         | 0             |
| poi.type      | 该POI的属性                                                                               | city          |
| poi.rank      | [地区评分](/docs/start/glossary#rank)                                           | 10            |

## 请求和返回示例

{% include api-response.html %}

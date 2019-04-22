---
book: API
service: api
data: weather
version: 6.1
title: 历史天气
description: 支持2010年1月1日至今的全国城市历史天气数据，可选择前一天、前一个月，全部历史数据可选择一次性下载，具体方式请联系我们
toc: true
---

##  数据介绍
- 支持2010年1月1日至今的全国城市历史天气数据，历史数据可选择一次性下载，具体方式请联系我们
- 海外城市的历史数据仅支持一次性下载，具体方式和价格请联系我们
- API接口仅提供当前时间前一天的历史数据

##   请求URL
**商业版：**
```
https://api.heweather.net/s6/weather/historical?{parameters}
```
`parameters`代表请求参数，包括必选和可选参数。所有请求参数均使用`&`进行分隔，参数值存在中文或特殊字符的情况，需要对参数进行 **url encode**。

> 请注意，在替换`{parameters}`对应值的时候，URL中不要包含大括号`{}`

### 请求URL示例
```
# 获取北京的前一天天气数据
https://api.heweather.net/s6/weather/historical?location=CN101010100&date=2017-05-31&key=xxx
```

## 请求参数

|参数|描述|选择|示例值|
|---|---|---|---|
|location|仅支持城市ID的方式查询，[城市列表](/docs/refer/city)|必选|location=CN101010100|
|key|用户认证key，请参考[如何获取你的KEY](https://www.heweather.com/support/setup-app-key)<br>支持[数字签名](/docs/refer/sercet-authorization)方式进行认证，推荐使用|必选|key=xxxxxxxxxxxxxx|
|date|获取制定日期的历史数据，格式为yyyy-mm-dd|必选|date=2010-01-01|

##   返回参数和数值说明

### `basic` 基础信息

|参数|描述|示例值 |
|---|---|---|
|location|地区／城市名称|卓资|
|cid|地区／城市ID|CN101080402|
|lat|地区／城市纬度|40.89576|
|lon|地区／城市经度|112.577702|
|parent_city|该地区／城市的上级城市|乌兰察布|
|admin_area|该地区／城市所属行政区域|内蒙古
|cnty|该地区／城市所属国家名称|中国
|tz|该地区／城市所在时区|+8.0|

### `satuts` 接口状态

|参数|描述|示例值|
|---|---|---|
|status|接口状态，具体含义请参考[接口状态码及错误码](/docs/refer/status-code)|ok|

### `daily_weather` 当天天气

|参数|描述|示例值|
|---|---|---|
|date|日期|2013-12-30|
|sr|日出时间|07:36|
|ss|日落时间|16:58|
|mr|月升时间|04:47|
|ms|月落时间|14:59|
|tmp_max|最高温度|4|
|tmp_min|最低温度|-5|
|hum|相对湿度|37|
|pcpn|降水量|0|
|pres|大气压强|1018|

### `hourly_weather` 逐小时预报

|参数|描述|示例|
|---|---|---|
|time|时间，格式yyyy-MM-dd hh:mm|2013-12-30 13:00|
|tmp|温度|2|
|cond_code|天气状况代码|101|
|cond_txt|天气状况代码|多云|
|wind_dir|风向|西北|
|wind_sc|风力|3-4|
|wind_spd|风速，公里/小时|15|
|hum|相对湿度|30|
|pres|大气压强|1030|

---
book: API
service: api
data: weather
version: 6.1
title: 景点天气预报
description: 全国4A和5A级景点共2000＋的7天天气预报，包括：日出日落时间、最高最低温度、白天和晚间天气状况、风力、风向等。
toc: true
---

## 数据介绍
全国4A和5A级景点共2000＋的7天天气预报，包括：日出日落时间、最高最低温度、白天和晚间天气状况、风力、风向等。

## 请求URL
**商业版：**
```
https://api.heweather.net/s6/scenic?{parameters}
```

`parameters`代表请求参数，包括必选和可选参数。所有请求参数均使用`&`进行分隔，参数值存在中文或特殊字符的情况，需要对参数进行 **url encode**。

> 请注意，在替换`{parameters}`对应值的时候，URL中不要包含大括号`{}`

### 请求URL示例

```
# 获取北京天坛公园天气情况：
https://api.heweather.net/s6/scenic?location=CN10101010004A&key=xxx
```

## 请求参数

|参数|描述|选择|示例值|
|---|---|---|---|
|location|景点天气仅支持使用景点ID获取数据<br>查看[全部景点ID](/docs/refer/city)|必选|location=CN10101010004A|
|lang|多语言，可以不使用该参数，默认为简体中文<br>详见[多语言参数](/docs/refer/i18n)|可选|lang=en|
|unit|单位选择，公制（m）或英制（i），默认为公制单位<br>详见[度量衡单位参数](/docs/refer/unit)|可选|unit=i|
|key|用户认证key，请参考[如何获取你的KEY](/support/setup-app-key)<br>另外支持[数字签名](/docs/refer/sercet-authorization)方式进行认证，推荐使用|必选|key=xxxxxxxxxxxxxx|

## 返回参数和数值说明

### `basic`基础信息

|参数|描述|示例值 |
|---|---|---|
|location|地区／城市名称|玉渊潭公园|
|cid|地区／城市ID|CN10101020010A|
|lat|地区／城市纬度|39.90999|
|lon|地区／城市经度|116.30999|
|parent_city|该地区／城市的上级城市|北京|
|admin_area|该地区／城市所属行政区域|北京|
|cnty|该地区／城市所属国家名称|中国|
|tz|该地区／城市所在时区|+8.0|

### `update`接口更新时间

|参数|描述|示例值|
|---|---|---|
|loc|当地时间，24小时制，格式yyyy-MM-dd HH:mm|2017-10-25 12:34|
|utc|UTC时间，24小时制，格式yyyy-MM-dd HH:mm|2017-10-25 04:34|

### `status`接口状态

|参数|描述|示例|
|---|---|---|
|status|接口状态，具体含义请参考[接口状态码及错误码](/docs/refer/status-code)|ok|

### `daily_forecast`天气预报

|参数|描述|示例|
|---|---|---|
|date|预报日期|
|sr|日出时间|04:50|
|ss|日落时间|18:06|
|tmp_max|最高温度|4|
|tmp_min|最低温度|-5|
|cond\_code_d|白天天气状况代码|100|
|cond\_code_n|晚间天气状况代码|100|
|cond\_txt_d|白天天气状况描述|晴
|cond\_txt_n|晚间天气状况描述|晴|
|wind_dir|风向|东|
|wind_sc|风力|2-3|

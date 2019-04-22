---
book: API
service: api
data: weather
version: 6.1
title: 格点天气数据
description: 全国精确到1公里格点的高精度天气实况、预报数据，精确到街道、小区的天气数据，包括：温度、湿度、大气压、天气状况、风力、风向等
toc: true
---

## 数据介绍

由和风天气、中国气象局、清华大学联合研发的我国首个精确到1公里格点的高精度天气实况和预报数据，精确到街道、小区的天气数据，包括：温度、湿度、大气压、天气状况、风力、风向等

## 获取方式

HTTP GET

## 数据格式

JSON

## 请求URL

**商业版：**
```
https://api.heweather.net/s6/weather/{grid-type}?{parameters}
```

**免费版：**
```
https://free-api.heweather.net/s6/weather/{grid-type}?{parameters}
```

- `{grid-type}` 代表不同的天气数据类型，必选，请使用以下值替代：

| grid-type 值  | 描述                                       | 授权|
| --------- | ------------------------------------------ |---|
| grid-now       | 格点实况天气                                   |商业|
| grid-forecast  | 格点3-7天预报                                 |商业/免费|
| grid-hourly    | 格点逐小时预报                                 |商业|

> 请注意：如果数据用于任何[商业行为](https://www.heweather.com/support/license)，必须[购买商业授权](https://console.heweather.com/app/price)；某些数据的[商业版和免费版有所不同](https://www.heweather.com/support/weather-pro-vs-lite)

- `{parameters}`代表请求参数，包括必选和可选参数。所有请求参数均使用 `&`进行分隔，参数值存在中文或特殊字符的情况，需要对参数进行 **url encode**。

> 请注意，在替换`{grid-type}`和`{parameters}`对应值的时候，URL中不要包含大括号`{}`

### 请求URL示例
```
# 获取某一个坐标的格点实况天气
https://api.heweather.net/s6/weather/grid-now?location=116.4,39.9&key=xxx
```
## 请求参数

| 参数     | 描述                                                         | 选择 | 示例值               |
| -------- | ------------------------------------------------------------ | ---- | -------------------- |
| location | 需要查询的地区，仅可使用经纬度坐标查询<br>经纬度格式：经度,纬度（**经度在前纬度在后**，英文`,`分隔，十进制格式，北纬东经为正，南纬西经为负 | 必选 | location=116.40,39.9 |
| lang     | 多语言，可以不使用该参数，默认为简体中文<br>详见[多语言参数](/docs/refer/i18n) | 可选 | lang=en              |
| unit     | 单位选择，公制（m）或英制（i），默认为公制单位<br>详见[度量衡单位参数](/docs/refer/unit) | 可选 | unit=i               |
| key      | 用户认证key，请参考[如何获取你的KEY](https://www.heweather.com/support/setup-app-key)<br>支持[数字签名](/docs/refer/sercet-authorization)方式进行认证，推荐使用 | 必选 | key=xxxxxxxxxxxxxx   |

## 返回参数和数值说明

格点天气数据接口将返回一些基本字段和不同天气类型的字段：
- 返回的数据中，`basic`，`update`和`status`是基本参数，在不同数据类型中都会返回。
- 具体的天气数据，会根据你请求的`{grid-type}`不同，将返回不同的天气数据。

### `basic` 基础信息

| 参数        | 描述                     | 示例值     |
| ----------- | ------------------------ | ---------- |
| lat         | 地区／城市纬度           | 39.956074  |
| lon         | 地区／城市经度           | 116.310316 |
| parent_city | 该地区／城市的上级城市   | 北京       |
| admin_area  | 该地区／城市所属行政区域 | 北京       |
| cnty        | 该地区／城市所属国家名称 | 中国       |
| tz          | 该地区／城市所在时区     | +8.0       |

### `update` 接口更新时间

| 参数 | 描述                                     | 示例值           |
| ---- | ---------------------------------------- | ---------------- |
| loc  | 当地时间，24小时制，格式yyyy-MM-dd HH:mm | 2017-10-25 12:34 |
| utc  | UTC时间，24小时制，格式yyyy-MM-dd HH:mm  | 2017-10-25 04:34 |

### `status` 接口状态

| 参数   | 描述                                                         | 示例 |
| ------ | ------------------------------------------------------------ | ---- |
| status | 接口状态，具体含义请参考[接口状态码及错误码](/docs/refer/status-code) | ok   |

### `grid_now` 格点实况天气

| 参数 | 描述 | 示例值 |
| ---- | ---- | ------ |
| tmp  | 温度 | 2      |
|cond_code|天气状况代码|101|
|cond_txt|天气状况代码|多云|
|wind_dir|风向|西北|
|wind_sc|风力|1|
|hum|相对湿度|30|
|pcpn|1小时降水量|10|
|pcpn_10m|10分钟降水量|10|
|pres|大气压强|1030|

### `grid_forecast` 格点未来7天预报

| 参数         | 描述                     | 示例值     |
| ------------ | ------------------------ | ---------- |
| date         | 预报日期，格式yyyy-MM-dd | 2013-12-30 |
| tmp_max      | 最高温度                 | 4          |
| tmp_min      | 最低温度                 | -5         |
| cond\_code_d | 白天天气状况代码         | 100        |
| cond\_code_n | 晚间天气状况代码         | 100        |
|cond\_txt_d|白天天气状况描述|晴|
|cond\_txt_n|晚间天气状况描述|晴|
|wind_dir_d|白天风向|西北|
|wind_dir_n|夜间风向|西北|
|wind_sc_d|白天风力|3-4|
|wind_sc_n|夜间风力|3-4|

### `grid_hourly` 格点逐小时天气预报

| 参数      | 描述                           | 示例值           |
| --------- | ------------------------------ | ---------------- |
| time      | 预报时间，格式yyyy-MM-dd HH:mm | 2013-12-30 13:00 |
| tmp       | 温度                           | 2                |
| cond_code | 天气状况代码                   | 101              |
| cond_txt  | 天气状况代码                   | 多云             |
| wind_dir  | 风向                           | 西北             |
| wind_sc   | 风力                           | 3-4              |
| pcpn      | 降水量                         | 10               |

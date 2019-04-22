---
book: API
service: api
data: solar
version: 6.1
title: 太阳高度
description: 任意时间点的全球太阳高度及方位角接口，为安全和智能驾驶、房屋建设提供数据支持
---

## 接口介绍
任意时间点的全球太阳高度及方位角接口，为安全和智能驾驶、房屋建设提供数据支持 [了解更多](https://www.heweather.com/blog/solar_elevation_angle)

> 仅限付费用户使用

## 请求URL
```
https://api.heweather.net/s6/solar/solar-elevation-angle?{parameters}
```

> `parameters`代表请求参数，包括必选和可选参数。所有请求参数均使用`&`进行分隔，参数值存在中文或特殊字符的情况，需要对参数进行 **url encode**。

### 请求URL示例
```
# 获取某一个坐标的太阳高度
https://api.heweather.net/s6/solar/solar-elevation-angle?lat=39.9&lon=116.4&date=20170809&time=1230&alt=43&tz=8&key=xxx
```


## 请求参数

|参数|描述|选择|示例值|
|---|---|---|---|
|lat|所查询地区的纬度<br>纬度采用十进制格式，北纬为正，南纬为负|必选|lat=36.088|
|lon|所查询地区的经度<br>经度采用十进制格式，东经为正，西经为负|必选|lon=120.343|
|date|查询日期，格式为yyyyMMdd|必选|20170809|
|time|查询时间，格式为HHmm，24 时制|必选|1230|
|alt|海拔高度，单位为米|必选|43|
|tz|查询地区所在时区|必选|8|
|key|用户认证key，请参考[如何获取你的KEY](https://www.heweather.com/support/setup-app-key)<br>支持[数字签名](/docs/refer/sercet-authorization)方式进行认证，推荐使用|必选|key=xxxxxxxxxxxxxx|

## 字段和数值说明
### `solar_elevation_angle` 基础信息

|参数|描述|示例值 |
|---|---|---|
|solar_elevation_angle|太阳高度角|89|
|solar_azimuth_angle|太阳方位角，正北顺时针方向角度|190|
|solar_hour|太阳时|0923|
|hour_angle|时角|-45.5|

### `status` 接口状态

|参数|描述|示例|
|---|---|---|
|status|接口状态，具体含义请参考[接口状态码及错误码](/docs/refer/status-code)|ok|

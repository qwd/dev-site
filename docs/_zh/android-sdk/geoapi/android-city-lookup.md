---
title: 城市搜索
tag: [guide, android, geo, city-lookup]
ref: 1-sdk-android-geo-city-lookup
---

城市搜索提供全球地理位位置、全球城市搜索服务，支持经纬度坐标反查、多语言、模糊搜索等功能。

天气数据是基于地理位置的数据，因此获取天气之前需要先知道具体的位置信息。使用城市搜索，可获取到该城市的基本信息，包括城市的Location ID（你需要这个ID去查询天气），多语言名称、经纬度、时区、海拔、Rank值、归属上级行政区域、所在行政区域等。 

另外，城市搜索也可以帮助你在你的APP中实现模糊搜索，用户只需要输入1-2个字即可获得结果。

| 接口代码| 接口          | 数据类  |
| -------- | ---------------- | ------- |
| geoCityLookup| 城市查询  | GeoCityLookupResponse |

## 请求参数

**GeoCityLookupParameter**

{% include params.html p="location-geo adm range number lang-def" %}

## 示例代码

```java
public void geoCityLookup(GeoCityLookupParameter parameter, Callback<GeoCityLookupResponse> callback);
```

## 返回数据

**GeoCityLookupResponse**

{% include api-response.html group="geo" type="location" prefix="location" update=0 fxlink=0 %}

<!-- | 属性            | 说明     | 示例值                   |
| --------------- | -------- | ------------------------ |
| getCode         | 参考[状态码](/docs/resource/status-code/)  | 200 |
| getLocation | 城市数据 | List&lt;Location&gt; |
| getRefer         | Refer 数据来源以及数据授权 | Refer  |


**Refer**

| 属性        | 说明        | 类型                | 示例值        |
| ---------- | ----------- | ------------------ | ------------ |
| getSources | 原始数据来源  | List&lt;String&gt; | QWeather     |
| getLicense | 使用许可      | List&lt;String&gt; | QWeather Developers License |


**Location**

| 属性         | 说明                                                                    | 示例值               |
| ------------ | --------------------------------------------------------- | -------------------- |
| getName      | 地区／城市名称                                                          | 卓资                 |
| getId        | 地区／城市ID                                                            | 101080402            |
| getLon       | 地区／城市经度                                                          | 112.577702           |
| getLat       | 地区／城市纬度                                                          | 40.89576             |
| getAdm2      | 该地区／城市的上级城市                                                  | 乌兰察布             |
| getAdm1      | 该地区／城市所属行政区域                                                | 内蒙古               |
| getCountry   | 该地区／城市所属国家名称                                                | 中国                 |
| getTz        | 该地区／城市所在时区                                                    | Asia/Shanghai     |
| getUtcOffset | 该地区/城市目前与UTC时间偏移的小时数                                    | +08:00               |
| getIsDst     | 该地区/城市是否当前处于夏令时,1: 表示当前处于夏令时, 0: 表示当前不是夏令时 | 0                    |
| getType      | 该地区／城市的属性                                                      | city                 |
| getRank      | 该地区／城市评分                                                        | 10                   |
| getFxLink    | 城市的天气预报网页链接                                                  | https://www.qweather.com/weather/zhuozi-101080402.html | -->

---
title: GeoAPI
tag: android-sdk
version: v4
description: 和风天气Android SDK城市和POI信息查询服务，通过GeoAPI进行城市地名查询和经纬度反查。
ref: 2-sdk-android-geo
---

天气数据是基于地理位置的数据，因此获取天气之前需要先知道具体的位置信息。和风天气提供一个功能强大的城市信息搜索API服务，可获取到需要查询城市的基本信息，包括城市或地区的Location ID（你需要这个ID去查询天气），多语言名称、经纬度、时区、海拔、Rank值、归属上级行政区域、所在行政区域等。

除此之外，城市信息搜索服务还可以帮助你：

- 避免重名城市的困扰
- 在你的应用或网站中根据用户输入的名称返回多个城市结果，便于用户选择准确的城市并返回该城市天气
- 在你的应用或网站中展示热门城市，用户直接选择即可，减少搜索步骤提高用户体验
- 不需要维护城市列表，城市信息更新实时获取 

> GeoAPI每天每个账号下所有应用前50000次免费，超出部分参考[计费方式](/help/buy/#price)

## 城市信息查询

城市搜索，可获取到该城市的基本信息，包括城市的Location ID（你需要这个ID去查询天气），多语言名称、经纬度、时区、海拔、Rank值、归属上级行政区域、所在行政区域等。 另外，城市搜索也可以帮助你在你的APP中实现模糊搜索，用户只需要输入1-2个字即可获得结果。

| 接口代码| 接口说明          | 数据类  |
| -------- | ---------------- | ------- |
| getGeoGityLookup| 城市查询  | GeoBean |

### 接口参数说明

{% include params.html p="location-geo range number lang-sdk" %}

### 示例代码

```java
QWeather.getGeoCityLookup(Context context, String location, Range range, int number, Lang lang, final QWeather.OnResultGeoListener listener);

QWeather.getGeoCityLookup(Context context, Range range, final QWeather.OnResultGeoBeansListener listener) ;

QWeather.getGeoCityLookup(Context context, String location, final QWeather.OnResultGeoBeansListener listener);
```

### GeoBean属性

| 属性            | 说明     | 示例值                   |
| --------------- | -------- | ------------------------ |
| getCode         | 接口状态 | [Status Code](/docs/start/status-code/)  |
| getLocationBean | 城市数据 | List&lt;LocationBean&gt; |


**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | qweather.com      |
| getLicenseList | 使用许可     | commercial license |


**LocationBean 基础信息**

| 属性         | 说明                                                                    | 示例值               |
| ------------ | ----------------------------------------------------------------------- | -------------------- |
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
| getFxLink    | 城市的天气预报网页链接                                                  | http://hfx.link/ae45 |

## 热门城市查询

获取全球各个国家国家热门城市列表，通过该列表可以让用户轻松查看各国主要城市的天气状况。

| 接口代码| 接口说明           | 数据类  |
| ------------ | ------------- | ------- |
| getGeoTopCity| 热门城市查询  | GeoBean |

### 接口参数说明

{% include params.html p="range number lang-sdk" %}

### 示例代码

```java
QWeather.getGeoTopCity(Context context, int number, Range range, Lang lang, final QWeather.OnResultGeoBeansListener listener);

QWeather.getGeoTopCity(Context context, final QWeather.OnResultGeoBeansListener listener);
```

### GeoBean属性

| 属性            | 说明     | 示例值                   |
| --------------- | -------- | ------------------------ |
| getCode         | 接口状态 | [Status Code](/docs/start/status-code/)   |
| getLocationBean | 城市数据 | List&lt;LocationBean&gt; |


**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | qweather.com      |
| getLicenseList | 使用许可     | commercial license |


**LocationBean 基础信息**

| 属性         | 说明                                                                    | 示例值               |
| ------------ | ----------------------------------------------------------------------- | -------------------- |
| getName      | 地区／城市名称                                                          | 卓资                 |
| getId        | 地区／城市ID                                                            | 101080402            |
| getLon       | 地区／城市经度                                                          | 112.577702           |
| getLat       | 地区／城市纬度                                                          | 40.89576             |
| getAdm2      | 该地区／城市的上级城市                                                  | 乌兰察布             |
| getAdm1      | 该地区／城市所属行政区域                                                | 内蒙古               |
| getCountry   | 该地区／城市所属国家名称                                                | 中国                 |
| getTz        | 该地区／城市所在时区                                                    | Asia/Shanghai       |
| getUtcOffset | 该地区/城市目前与UTC时间偏移的小时数                                    | +08:00               |
| getIsDst     | 该地区/城市是否当前处于夏令时,1 表示当前处于夏令时,0 表示当前不是夏令时      | 0                    |
| getType      | 该地区／城市的属性                                                      | city                 |
| getRank      | 该地区／城市评分                                                        | 10                   |
| getFxLink    | 城市的天气预报网页链接                                                  | http://hfx.link/ae45 |

## POI信息搜索

POI（景点、火车站、飞机场、港口等）信息查询提供该兴趣点的基本信息查询，如Location ID、多语言名称、经纬度、时区、海拔、Rank值、归属上级行政区域、所在行政区域等。

| 接口代码| 接口说明            | 数据类     |
| ----------- | --------------- | ---------- |
| getGeoPoiLookup| POI信息搜索  | GeoPoiBean |

### 接口参数说明

{% include params.html p="location-geo geo-type city number lang-sdk" %}

### 示例代码

```java
QWeather.getGeoPoiLookup(Context context, String location, String city, int number, Type type, Lang lang, final OnResultGeoPoiListener listener);

QWeather.getGeoPoiLookup(Context context, String location, Type type, final QWeather.OnResultGeoPoiListener listener);
```

### GeoPoiBean属性

| 属性       | 说明     | 示例值          |
| ---------- | -------- | --------------- |
| getCode    | 接口状态 | [Status Code](/docs/start/status-code/)  |
| getPoiList | 城市数据 | List&lt;Poi&gt; |


**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | qweather.com      |
| getLicenseList | 使用许可     | commercial license |


**POI 基础信息**

| 属性         | 说明                                                              | 示例值    |
| ------------ | ----------------------------------------------------------------- | --------- |
| getName      | Poi名称                                                           | 南山区    |
| getId        | PoiID                                                             | 101280604 |
| getLon       | Poi经度                                                           | 22.53122  |
| getLat       | Poi纬度                                                           | 113.92942 |
| getAdm2      | 该Poi的上级行政区划名称                                           | 深圳市    |
| getAdm1      | 该Poi所属一级行政区域                                             | 广东省    |
| getCountry   | 该Poi所属国家名称                                                 | 中国      |
| getTz        | 该Poi所在时区                                                     | Asia/Shanghai    |
| getUtcOffset | 该Poi目前与UTC时间偏移的小时数                                    | +08:00    |
| getIsDst     | 该Poi是否当前处于夏令时,1 表示当前处于夏令时,0 表示当前不是夏令时 | 0         |
| getType      | 该Poi的属性                                                       | city      |
| getRank      | 地区评分                                                          | 10        |

## POI范围搜索

提供指定区域范围内查询所有POI信息，方便显示某一区域内的POI天气数据。

| 接口代码| 接口说明           | 数据类     |
| ----------- | -------------- | ---------- |
| getGeoPoiRange| POI范围搜索  | GeoPoiBean |

### 接口参数说明

{% include params.html p="location-coord geo-type radius number lang-sdk" %}

### 示例代码

```java
QWeather.getGeoPoiRange(Context context, String location, int radius, int number, Type type, Lang lang, final OnResultGeoPoiListener listener);

QWeather.getGeoPoiRange(Context context, String location, int number, Type type, Lang lang, final OnResultGeoPoiListener listener);
```

### GeoPoiBean属性

| 属性       | 说明     | 示例值          |
| ---------- | -------- | ------------- |
| getCode    | 接口状态 | [Status Code](/docs/start/status-code/) |
| getPoiList | 城市数据 | List&lt;Poi&gt; |


**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | qweather.com      |
| getLicenseList | 使用许可     | commercial license |


**POI 基础信息**

| 属性         | 说明                                                              | 示例值    |
| ------------ | ----------------------------------------------------------------- | --------- |
| getName      | Poi名称                                                           | 南山区    |
| getId        | PoiID                                                             | 101280604 |
| getLon       | Poi经度                                                           | 22.53122  |
| getLat       | Poi纬度                                                           | 113.92942 |
| getAdm2      | 该Poi的上级行政区划名称                                           | 深圳市    |
| getAdm1      | 该Poi所属一级行政区域                                             | 广东省    |
| getCountry   | 该Poi所属国家名称                                                 | 中国      |
| getTz        | 该Poi所在时区                                                     | Asia/Shanghai     |
| getUtcOffset | 该Poi目前与UTC时间偏移的小时数                                    | +08:00    |
| getIsDst     | 该Poi是否当前处于夏令时,1 表示当前处于夏令时,0 表示当前不是夏令时     | 0         |
| getType      | 该Poi的属性                                                       | city      |
| getRank      | 地区评分                                                          | 10        |

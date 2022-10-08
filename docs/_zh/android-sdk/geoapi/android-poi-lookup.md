---
title: POI搜索
tag: [guide, android, geo, poi-lookup]
ref: 3-sdk-android-geo-poi-lookup
---

使用关键字和坐标查询POI信息（景点、火车站、飞机场、港口等）

| 接口代码| 接口说明            | 数据类     |
| ----------- | --------------- | ---------- |
| getGeoPoiLookup| POI搜索  | GeoPoiBean |

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
| getCode    | 接口状态 | [Status Code](/docs/resource/status-code/)  |
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


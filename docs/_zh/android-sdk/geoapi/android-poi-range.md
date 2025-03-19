---
title: POI范围搜索
tag: [guide, android, geo, poi-range]
ref: 4-sdk-android-geo-poi-range
---

提供指定区域范围内查询所有POI信息。

| 接口代码| 接口           | 数据类     |
| ----------- | -------------- | ---------- |
| geoPoiRange| POI范围搜索  | GeoPoiResponse |

### 请求参数

**GeoPoiRangeParameter**

{% include params.html p="location-coord geo-type radius number lang-def" %}

### 示例代码

```java
public void geoPoiRange(GeoPoiRangeParameter parameter, Callback<GeoPoiResponse> callback);
```

### 返回数据

**GeoPoiResponse**

| 属性       | 说明     | 示例值          |
| ---------- | -------- | ------------- |
| getCode    | 参考[状态码](/docs/resource/status-code/)  | 200|
| getPoi | 城市数据 | List&lt;Location&gt; |
| getRefer         | Refer 数据来源以及数据授权 | Refer  |

**Refer**

| 属性        | 说明        | 类型                | 示例值        |
| ---------- | ----------- | ------------------ | ------------ |
| getSources | 原始数据来源  | List&lt;String&gt; | QWeather     |
| getLicense | 使用许可      | List&lt;String&gt; | QWeather Developers License |

**Location**

| 属性         | 说明                                                              | 示例值    |
| ------------ | ----------------------------------------------------------------- | --------- |
| getName      | Poi名称                                                           | 北京动物园    |
| getId        | PoiID                                                             | 10101020006A |
| getLon       | Poi经度                                                           | 116.33000  |
| getLat       | Poi纬度                                                           | 39.93000 |
| getAdm2      | 该Poi的上级行政区划名称                                           | 北京    |
| getAdm1      | 该Poi所属一级行政区域                                             | 北京    |
| getCountry   | 该Poi所属国家名称                                                 | 中国      |
| getTz        | 该Poi所在时区                                                     | Asia/Shanghai    |
| getUtcOffset | 该Poi目前与UTC时间偏移的小时数                                    | +08:00    |
| getIsDst     | 该Poi是否当前处于夏令时,1 表示当前处于夏令时,0 表示当前不是夏令时 | 0         |
| getType      | 该Poi的属性                                                       | scenic      |
| getRank      | 地区评分                                                          | 10        |
| getFxLink    | 该Poi的天气预报网页链接                                             | https://www.qweather.com |

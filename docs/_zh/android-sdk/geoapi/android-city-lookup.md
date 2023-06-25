---
title: 城市搜索
tag: [guide, android, geo, city-lookup]
ref: 1-sdk-android-geo-city-lookup
---

城市搜索，可获取到该城市的基本信息，包括城市的Location ID（你需要这个ID去查询天气），多语言名称、经纬度、时区、海拔、Rank值、归属上级行政区域、所在行政区域等。 另外，城市搜索也可以帮助你在你的APP中实现模糊搜索，用户只需要输入1-2个字即可获得结果。

| 接口代码| 接口说明          | 数据类  |
| -------- | ---------------- | ------- |
| getGeoCityLookup| 城市查询  | GeoBean |

### 接口参数说明

{% include params.html p="location-geo adm range number lang-sdk" %}

### 示例代码

```java
QWeather.getGeoCityLookup(Context context, String location, String adm, Range range, int number, Lang lang, final QWeather.OnResultGeoListener listener);

QWeather.getGeoCityLookup(Context context, String location, Range range, int number, Lang lang, final QWeather.OnResultGeoListener listener);

QWeather.getGeoCityLookup(Context context, String location, int number, Lang lang, final QWeather.OnResultGeoBeansListener listener);

QWeather.getGeoCityLookup(Context context, String location, final QWeather.OnResultGeoBeansListener listener);
```

### GeoBean属性

| 属性            | 说明     | 示例值                   |
| --------------- | -------- | ------------------------ |
| getCode         | 参考[状态码](/docs/resource/status-code/)  | 200 |
| getLocationBean | 城市数据 | List&lt;LocationBean&gt; |


**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | QWeather      |
| getLicenseList | 使用许可     | QWeather Developers License |


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
| getFxLink    | 城市的天气预报网页链接                                                  | https://www.qweather.com/weather/zhuozi-101080402.html |

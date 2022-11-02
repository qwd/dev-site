---
title: 日出日落
tag: [guide, android, astronomy, sun]
ref: 1-sdk-android-sun
---

获取未来60天全球任意地点日出日落时间。

> 在[逐天预报API](/docs/api/weather)中，也会返回对应天数的日出日落、月升月落和月相数据

| 接口代码| 接口说明          | 数据类      |
| -------------- | ---------- | ----------- |
| getSun| 日出日落  | SunBean |

### 接口参数说明

{% include params.html p="location-android date60" %}

### 示例代码

```java
QWeather.getSun(Context context, String location, String date, final OnResultSunListener listener) ;

QWeather.getSun(Context context, String location, Lang lang, String date, final OnResultSunListener listener)                                
```

### SunBean 属性

| 属性                 | 说明                       | 示例值                    |
| -------------------- | -------------------------- | ------------------------- |
| getCode              | 状态码，具体含义请参考[状态码](/docs/resource/status-code/)                   | Code       |
| getRefer             | Refer 数据来源以及数据授权 | Refer                     |
| getSunrise           | [日出时间](/docs/resource/sun-moon-info/#sunrise-and-sunset)，**在高纬度地区可能为空**                   | 2017-10-25T06:01+08:00           |
| getSunset            | [日落时间](/docs/resource/sun-moon-info/#sunrise-and-sunset)，**在高纬度地区可能为空**                   | 2017-10-25T18:01+08:00           |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | qweather.com      |
| getLicenseList | 使用许可     | commercial license |

**Basic**

| 属性          | 说明                     | 示例值               |
| ------------- | ------------------------ | -------------------- |
| getUpdateTime | [数据最近更新时间](/docs/resource/glossary/#update-time)             | 2017-10-25T04:34+08:00   |
| getFxLink     | 当前数据的响应式页面，便于嵌入网站或应用 | http://hfx.link/ae45 |

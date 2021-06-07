---
title: 太阳和月亮
tag: android-sdk
version: v4
description: 使用和风天气Android SDK 获取全球日出日落、月升月落、月相、太阳高度角数据。
toc: true
ref: 8-sdk-android-astronomy
---

获取最近60天全球城市日出日落、月升月落和逐小时的月相数据以及太阳高度角。

## 日出日落

获取未来60天全球日出日落。

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
| getCode              | 状态码，具体含义请参考[状态码](/docs/start/status-code/)                   | Code       |
| getRefer             | Refer 数据来源以及数据授权 | Refer                     |
| getSunrise           | 日出                   | 2017-10-25T06:01+08:00           |
| getSunset            | 日落                   | 2017-10-25T18:01+08:00           |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | qweather.com      |
| getLicenseList | 使用许可     | commercial license |

**Basic**

| 属性          | 说明                     | 示例值               |
| ------------- | ------------------------ | -------------------- |
| getUpdateTime | [数据最近更新时间](/docs/start/glossary#update-time)             | 2017-10-25T04:34+08:00   |
| getFxLink     | 当前数据的响应式页面，便于嵌入网站或应用 | http://hfx.link/ae45 |


## 月升月落月相

获取未来60天全球月升月落时间以及逐小时月相数据。

| 接口代码| 接口说明          | 数据类      |
| ------ | ---------- | ----------- |
| getMoon| 太阳和月亮数据  | MoonBean |

### 接口参数说明

{% include params.html p="location-android date60" %}

### 示例代码

```java
QWeather.getMoon(Context context, String location, String date, final OnResultMoonListener listener) ;

QWeather.getMoon(Context context, String location, Lang lang, String date, final OnResultMoonListener listener)                                
```

### MoonBean 属性

| 属性                 | 说明                       | 示例值                    |
| -------------------- | -------------------------- | ------------------------- |
| getCode              | 状态码，具体含义请参考[状态码](/docs/start/status-code/)                   | Code       |
| getRefer             | Refer 数据来源以及数据授权 | Refer                     |
| getMoonrise       | 月升                   | 2017-10-25T01:34+08:00           |
| getMoonset       | 月落                   | 2017-10-25T04:34+08:00           |
| getMoonPhaseBeanList | 月相信息                   | List\<MoonPhaseBean> |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | qweather.com      |
| getLicenseList | 使用许可     | commercial license |

**Basic**

| 属性          | 说明                     | 示例值               |
| ------------- | ------------------------ | -------------------- |
| getUpdateTime | 接口更新时间             | 2017-10-25T04:34     |
| getFxLink     | 所查询城市的天气预报网页 | http://hfx.link/ae45 |


**MoonPhaseBean**

| 属性            | 说明                   | 示例值                 |
| --------------- | ---------------------- | ---------------------- |
| getFxTime       | 月相逐小时预报时间     | 2013-12-31T23:31+08:00 |
| getValue        | 月相数值               | 0.25                   |
| getName         | 月相名字               | 上弦月                 |
| getIllumination | 月亮照明度，百分比数值 | 30                     |


## 太阳高度角

任意时间点的全球太阳高度及方位角接口，为安全和智能驾驶、房屋建设提供数据支持。

| 接口代码| 接口说明          | 数据类      |
| ------ | ---------- | ----------- |
| getSolarElevationAngle| 太阳高度角数据  | SolarElevationAngleBean |

### 接口参数说明

{% include params.html p="location-coord date time tz alt" %}

### 示例代码

```java
QWeather.getSolarElevationAngle(Context context, String location, String date, String time, String timezone, String alt, final OnResultSolarElevationAngleListener listener)                                
```

### SolarElevationAngleBean属性

| 属性                 | 说明                       | 示例值                    |
| -------------------- | -------------------------- | ------------------------- |
| getCode              | 状态码，具体含义请参考[状态码](/docs/start/status-code/)                   | Code       |
| getRefer             | Refer 数据来源以及数据授权 | Refer                     |
| getSolarElevationAngle       | 太阳高度角                   | 70.73  |
| getSolarAzimuthAngle       |  太阳方位角，正北顺时针方向角度   | 205.95      |
| getSolarHour | 太阳时，HHmm格式                 | 1217 |
| getHourAngle | 时角                   | -4.41 |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | qweather.com      |
| getLicenseList | 使用许可     | commercial license |

**Basic**

| 属性          | 说明                     | 示例值               |
| ------------- | ------------------------ | -------------------- |
| getUpdateTime | 接口更新时间             | 2017-10-25T04:34     |
| getFxLink     | 所查询城市的天气预报网页 | http://hfx.link/ae45 |
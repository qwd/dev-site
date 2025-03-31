---
title: 太阳高度角
tag: [guide, android, astronomy, solar-elevation-angle]
ref: 3-sdk-android-solar-elevation-angle
---

任意时间点的全球太阳高度及方位角。

| 接口代码| 接口          | 数据类      |
| ------ | ---------- | ----------- |
| astronomySolarElevationAngle| 太阳高度角数据  | AstronomySolarElevationAngleResponse |

## 参数

**SolarElevationAngleParameter**

{% include params.html p="location-coord date time tz alt" %}

## 示例代码

```java
public void astronomySolarElevationAngle(SolarElevationAngleParameter parameter, Callback<AstronomySolarElevationAngleResponse> callback);                              
```

## 返回数据

**AstronomySolarElevationAngleResponse**

{% include api-response.html group="astro" type="sea" prefix="nil" update=0 fxlink=0  %}

<!-- 
| 属性                 | 说明                       | 示例值                    |
| -------------------- | -------------------------- | ------------------------- |
| getCode              | 参考[状态码](/docs/resource/status-code/)                    | 200       |
| getUpdateTime | 接口更新时间             | 2017-10-25T04:34     |
| getFxLink     | 所查询城市的天气预报网页 | https://www.qweather.com/weather/beijing-101010100.html |
| getSolarElevationAngle       | 太阳高度角                   | 70.73  |
| getSolarAzimuthAngle       |  太阳方位角，正北顺时针方向角度   | 205.95      |
| getSolarHour | 太阳时，HHmm格式                 | 1217 |
| getHourAngle | 时角                   | -4.41 |
| getRefer             | Refer 数据来源以及数据授权 | Refer                     |


**Refer**

| 属性        | 说明        | 类型                | 示例值        |
| ---------- | ----------- | ------------------ | ------------ |
| getSources | 原始数据来源  | List&lt;String&gt; | QWeather     |
| getLicense | 使用许可     | List&lt;String&gt; | QWeather Developers License | -->



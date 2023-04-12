---
title: 太阳高度角
tag: [guide, android, astronomy, solar-elevation-angle]
ref: 3-sdk-android-solar-elevation-angle
---

任意时间点的全球太阳高度及方位角。

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
| getCode              | 状态码，具体含义请参考[状态码](/docs/resource/status-code/)                   | Code       |
| getRefer             | Refer 数据来源以及数据授权 | Refer                     |
| getSolarElevationAngle       | 太阳高度角                   | 70.73  |
| getSolarAzimuthAngle       |  太阳方位角，正北顺时针方向角度   | 205.95      |
| getSolarHour | 太阳时，HHmm格式                 | 1217 |
| getHourAngle | 时角                   | -4.41 |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | QWeather      |
| getLicenseList | 使用许可     | QWeather Developers License |

**Basic**

| 属性          | 说明                     | 示例值               |
| ------------- | ------------------------ | -------------------- |
| getUpdateTime | 接口更新时间             | 2017-10-25T04:34     |
| getFxLink     | 所查询城市的天气预报网页 | https://www.qweather.com/weather/beijing-101010100.html |

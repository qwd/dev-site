---
title: 分钟级降水
tag: [guide, android, minutely, precip]
ref: 1-sdk-android-minutely-precip
---

分钟级降水Android SDK（临近预报）支持中国1公里精度的未来2小时每5分钟降雨预报数据。

| 接口代码| 接口说明       | 数据类       |
| ---------- | ----------- | ------------ |
| getMinutely | 分钟级降雨 | MinutelyBean |

### 接口参数说明

{% include params.html p="location-coord lang-def" %}

### 示例代码

```java
QWeather.getMinutely(Context context, double longitude, double latitude, QWeather.OnResultMinutelyListener listener);

QWeather.getMinutely(Context context, double longitude, double latitude, Lang lang, QWeather.OnResultMinutelyListener listener);
```

### GridMinutelyBean属性

| 属性            | 说明                       | 示例值               |
| --------------- | -------------------------- | -------------------- |
| getCode         | 参考[状态码](/docs/resource/status-code/)                    | 200  |
| getSummary      | 分钟降水描述               | 未来2小时无降雨      |
| getMinutelyList | 临近预报                   | List&lt;Minutely&gt; |
| getRefer        | Refer 数据来源以及数据授权 | Refer                |
| getBasic        | Basic 基础信息             | Basic                |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | QWeather      |
| getLicenseList | 使用许可     | QWeather Developers License |

**Basic**

| 属性          | 说明                     | 示例值               |
| ------------- | ------------------------ | -------------------- |
| getUpdateTime | 接口更新时间             | 2017-10-25T04:34+08:00     |
| getFxLink     | 所查询城市的天气预报网页 | https://www.qweather.com |

**Minutely 未来两小时5分钟降水量**

| 属性      | 说明                       | 示例值           |
| --------- | -------------------------- | ---------------- |
| getFxTime | 时间 | 2013-12-30T20:35+08:00 |
| getPrecip | 5分钟累计降水量，单位毫米                     | 10               |
| getType   | 降水类型                   | rain             |

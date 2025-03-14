<!--
 * @Date: 2025-03-06 10:02:06
 * @LastEditors: 韩笑白
 * @LastEditTime: 2025-03-13 15:43:34
 * @FilePath: /dev-site/docs/_zh/android-sdk/minutely/android-minutely-precipitation.md
-->
---
title: 分钟级降水
tag: [guide, android, minutely, precip]
ref: 1-sdk-android-minutely-precip
---

分钟级降水Android SDK（临近预报）支持中国1公里精度的未来2小时每5分钟降雨预报数据。

| 接口代码| 接口说明       | 数据类       |
| ---------- | ----------- | ------------ |
| minutely | 分钟级降雨 | MinutelyBaseResponse |

### 接口参数说明

{% include params.html p="location-coord lang-def" %}

### 示例代码

```java
public void minutely(MinutelyParameter parameter, Callback<MinutelyBaseResponse> callback);
```

### MinutelyBaseResponse 属性

| 属性            | 说明                       | 示例值               |
| --------------- | -------------------------- | -------------------- |
| getCode         | 参考[状态码](/docs/resource/status-code/)                    | 200  |
| getUpdateTime | 接口更新时间             | 2017-10-25T04:34+08:00     |
| getFxLink     | 所查询城市的天气预报网页 | https://www.qweather.com |
| getSummary      | 分钟降水描述               | 未来2小时无降雨      |
| getMinutely | 临近预报                   | List&lt;Minutely&gt; |
| getRefer        | Refer 数据来源以及数据授权 | Refer                |

**Refer**

| 属性        | 说明        | 类型                | 示例值        |
| ---------- | ----------- | ------------------ | ------------ |
| getSources | 原始数据来源  | List&lt;String&gt; | QWeather     |
| getLicense | 使用许可     | List&lt;String&gt; | QWeather Developers License |

**Basic**

| 属性          | 说明                     | 示例值               |
| ------------- | ------------------------ | -------------------- |

**Minutely 未来两小时5分钟降水量**

| 属性      | 说明                       | 示例值           |
| --------- | -------------------------- | ---------------- |
| getFxTime | 时间 | 2013-12-30T20:35+08:00 |
| getPrecip | 5分钟累计降水量，单位毫米                     | 10               |
| getType   | 降水类型                   | rain             |

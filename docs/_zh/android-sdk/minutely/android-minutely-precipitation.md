---
title: 分钟级降水
tag: [guide, android, minutely, precip]
ref: 1-sdk-android-minutely-precip
---

分钟级降水提供中国地区未来2小时内每5分钟降水数据、降水类型以及未来2小时的降水概况信息。
> 仅限中国地区。

| 接口代码| 接口       | 数据类       |
| ---------- | ----------- | ------------ |
| minutely | 分钟级降水 | MinutelyResponse |

## 参数

**MinutelyParameter**

| 参数名   | 参数类型 | 必选 | 示例值 |
| -------- | -------- | ---- | ------ |
| longitude | double | 是 | 116.41 |
| latitude | double | 是 | 39.92 |
| lang | Lang | 否 | ZH_HANS |

## 示例代码

```java
public void minutely(MinutelyParameter parameter, Callback<MinutelyResponse> callback);
```

## 返回数据

**MinutelyResponse**

{% include api-response.html group="minutely" prefix="nil"  %}

<!-- | 属性            | 说明                       | 示例值               |
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

**Minutely**

| 属性      | 说明                       | 示例值           |
| --------- | -------------------------- | ---------------- |
| getFxTime | 时间 | 2013-12-30T20:35+08:00 |
| getPrecip | 5分钟累计降水量，单位毫米                     | 10               |
| getType   | 降水类型                   | rain             | -->

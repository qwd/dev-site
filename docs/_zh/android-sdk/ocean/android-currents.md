---
title: 潮流（弃用）
tag: [guide, android, ocean, currents]
deprecated: true
ref: 2-sdk-android-currents
---

未来10天全球潮流数据，包括潮流流速和流向。

> **警告：**潮流API已弃用，将在2025年11月1日停止服务。
{:.bqdanger}

| 接口代码| 接口          | 数据类  |
| -------- | ---------------- | ------- |
| oceanCurrents | 潮流  | OceanCurrentsResponse |

## 参数

**OceanParameter**

{% include params.html p="location-p6 date10" %}

## 示例代码

```java
 public void oceanCurrents(OceanParameter parameter, Callback<OceanCurrentsResponse> callback);
```

## 返回数据

**OceanCurrentsResponse**

{% include api-response.html group="ocean" type="ctable chourly" prefix="currentsTable currentsHourly" %}

<!-- | 属性            | 说明     | 示例值                    |
| --------------- | -------- | ---------------------- |
| getCode         | 参考[状态码](/docs/resource/status-code/)  | 200        |
| getUpdateTime | 接口更新时间 | 2017-10-25T04:34+08:00      |
| getFxLink | 当前数据的响应式页面，便于嵌入网站或应用  | https://www.qweather.com |
| getCurrentsHourly | 潮流小时数据 | List\<CurrentsHourly> |
| getCurrentsTable| 潮流数据 | List\<CurrentsTable> |
| getRefer         | Refer 数据来源以及数据授权 | Refer  |

**Refer**

| 属性        | 说明        | 类型                | 示例值        |
| ---------- | ----------- | ------------------ | ------------ |
| getSources | 原始数据来源  | List&lt;String&gt; | QWeather     |
| getLicense | 使用许可      | List&lt;String&gt; | QWeather Developers License |


**CurrentsTable**

| 属性         | 说明                                                                    | 示例值               |
| ------------ | ----------------------------------------------------- | -------------------- |
| getFxTime      | 潮流最大流速时间                                 | 2017-10-25T04:34+08:00|
| getSpeedMax        | 潮流最大流速，单位：厘米/秒              | 1.23            |
| getDir360       | 潮流360度方向                              |    212    |

**CurrentsHourly**

| 属性         | 说明                                                                    | 示例值               |
| ------------ | ----------------------------------------------------- | -------------------- |
| getFxTime      | 逐小时预报时间                                 | 2017-10-25T04:34+08:00|
| getSpeed        | 潮流流速，单位：厘米/秒              | 1.23            |
| getDir360       | 潮流360度方向                              |    212    | -->



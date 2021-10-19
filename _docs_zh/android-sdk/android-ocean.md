---
title: 潮汐和潮流
tag: android-sdk
version: v4
description: 和风天气潮汐和潮流SDK包含全球1万多个港口数据，提供未来10天潮汐和潮流数据，包括满潮、干潮高度和时间，逐小时潮汐和潮流数据。
toc: true
ref: 9-sdk-android-ocean
---

和风天气潮汐和潮流SDK包含全球1万多个港口数据，提供未来10天潮汐和潮流数据，包括满潮、干潮高度和时间，逐小时潮汐和潮流数据。

## 潮汐

未来10天全球潮汐数据，包括满潮、干潮高度和时间，逐小时潮汐数据。

| 接口代码| 接口说明          | 数据类  |
| -------- | ---------------- | ------- |
| getOceanTide| 潮汐数据  | TideBean |

### 接口参数说明

{% include params.html p="location-p2 date10" %}

### 示例代码

```java
QWeather.getOceanTide(Context context, String location, String date, OnResultOceanTideListener listener);
```

### TideBean属性

| 属性            | 说明     | 示例值                    |
| --------------- | -------- | ---------------------- |
| getCode         | 接口状态 | [Status Code](/docs/resource/status-code/)        |
| getBasic         | 更新信息 | Basic       |
| getRefer         | Refer 数据来源以及数据授权 | Refer  |
| getTideHourlyList | 潮汐小时数据 | List\<TideHourlyBase> |
| getTideTable | 满潮或干潮数据 | List\<TideTableBase> |

**Basic**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getUpdateTime | 接口更新时间 | 2017-10-25T04:34+08:00      |
| getFxLink | 当前数据的响应式页面，便于嵌入网站或应用  | http://hfx.link/1 |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | QWeather      |
| getLicenseList | 使用许可     | commercial license |


**TideTableBase**

| 属性         | 说明                                                                    | 示例值               |
| ------------ | ----------------------------------------------------- | -------------------- |
| getFxTime      | 满潮或干潮时间                                 | 2017-10-25T04:34+08:00|
| getHeight        | 海水高度，单位：米                                       | 1.23            |
| getType       | 满潮（H）或干潮（L）                              |    H    |

**TideHourlyBase**

| 属性         | 说明                                                                    | 示例值               |
| ------------ | ----------------------------------------------------- | -------------------- |
| getFxTime      | 逐小时预报时间                                 | 2017-10-25T04:34+08:00|
| getHeight        | 海水高度，单位：米                                       | 1.23            |


## 潮流

未来10天全球潮流数据，包括潮流流速和流向。

| 接口代码| 接口说明          | 数据类  |
| -------- | ---------------- | ------- |
| getOceanCurrents| 潮流数据  | CurrentsBean |

### 接口参数说明

{% include params.html p="location-p6 date10" %}

### 示例代码

```java
QWeather.getOceanCurrents(Context context, String location, String date, OnResultOceanTideListener listener);
```

### CurrentsBean属性

| 属性            | 说明     | 示例值                    |
| --------------- | -------- | ---------------------- |
| getCode         | 接口状态 | [Status Code](/docs/resource/status-code/)         |
| getBasic         | 更新信息 | Basic       |
| getRefer         | Refer 数据来源以及数据授权 | Refer  |
| getHourlyList | 潮流小时数据 | List\<CurrentsHourlyBase> |
| getTableList | 潮流数据 | List\<CurrentsTableBase> |

**Basic**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getUpdateTime | 接口更新时间 | 2017-10-25T04:34+08:00      |
| getFxLink | 当前数据的响应式页面，便于嵌入网站或应用  | http://hfx.link/1 |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | qweather.com      |
| getLicenseList | 使用许可     | commercial license |


**CurrentsTableBase**

| 属性         | 说明                                                                    | 示例值               |
| ------------ | ----------------------------------------------------- | -------------------- |
| getFxTime      | 潮流最大流速时间                                 | 2017-10-25T04:34+08:00|
| getSpeedMax        | 潮流最大流速，单位：厘米/秒              | 1.23            |
| getDir360       | 潮流360度方向                              |    212    |

**CurrentsHourlyBase**

| 属性         | 说明                                                                    | 示例值               |
| ------------ | ----------------------------------------------------- | -------------------- |
| getFxTime      | 逐小时预报时间                                 | 2017-10-25T04:34+08:00|
| getSpeed        | 潮流流速，单位：厘米/秒              | 1.23            |
| getDir360       | 潮流360度方向                              |    212    |



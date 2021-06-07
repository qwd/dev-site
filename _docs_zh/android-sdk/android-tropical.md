---
title: 热带气旋（台风）
tag: android-sdk
version: v4
description: 台风数据SDK提供全球主要海洋流域的热带低气压（台风）信息，包括台风实时位置、等级、气压、风力、速度，还可查询台风路径和台风预报信息。
toc: true
ref: 91-sdk-android-tropical
---

台风数据SDK提供全球主要海洋流域的热带低气压（台风）信息，包括台风实时位置、等级、气压、风力、速度，还可查询台风路径和台风预报信息。

## 台风列表 {#storm-list}

获取全球全球主要海洋流域的台风列表。

> 目前仅支持中国沿海地区，即`basin=NP`

| 接口代码| 接口说明          | 数据类  |
| -------- | ---------------- | ------- |
| getStormList| 获取台风列表和ID  | StormListBean |

### 接口参数说明

{% include params.html p="basin year" %}

### 示例代码

```java
QWeather.getStormList(Context context, String year, Basin basin, OnResultTropicalStormListListener listener);
```

### StormListBean属性

| 属性            | 说明     | 示例值                    |
| --------------- | -------- | ---------------------- |
| getCode         | 接口状态 | [Status Code](/docs/start/status-code/)        |
| getBasic         | 更新信息 | Basic       |
| getRefer         | Refer 数据来源以及数据授权 | Refer  |
| getStormList | 台风数据 | List<StormBean> |


**Basic**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getUpdateTime | 接口更新时间 | 2017-10-25T04:34+08:00      |
| getFxLink | 所查询城市的天气预报网页  | http://hfx.link/1 |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | qweather.com      |
| getLicenseList | 使用许可     | commercial license |


**StormBean**

| 属性         | 说明                                                                    | 示例值               |
| ------------ | ----------------------------------------------------- | -------------------- |
| getId      | 台风ID                               | NP_2101 |
| getName        | 台风名称                                      | 杜鹃           |
| getBasin       | 台风所处流域                              |    NP    |
| getYear       | 台风所处年份                              |    2021    |
| getActive       | 是否为活跃台风<br />`1` 活跃台风 <br /> `0` 停编                              |    0    |


## 台风实况和路径

台风实况和路径提供全球主要海洋流域的热带低气压（台风）信息，包括台风实时位置、等级、气压、风力、速度。

| 接口代码| 接口说明          | 数据类  |
| -------- | ---------------- | ------- |
| getStormTrack| 台风实况和路径数据  | StormTrackBean |

### 接口参数说明

{% include params.html p="stormid-sdk" %}

### 示例代码

```java
QWeather.getStormTrack(Context context, String stormId, OnResultTropicalStormTrackListener listener);
```

### StormTrackBean属性

| 属性            | 说明     | 示例值                    |
| --------------- | -------- | ---------------------- |
| getCode         | 接口状态 | [Status Code](/docs/start/status-code/)        |
| getBasic         | 更新信息 | Basic       |
| getRefer         | Refer 数据来源以及数据授权 | Refer  |
| getIsActive         | 是否为活跃台风<br />`1` 活跃台风 <br /> `0` 停编 | 0  |
| getNow | 台风当前信息数据 | StormTrackNowBean |
| getTrackList | 台风路径数据 | List<StormTrackBaseBean> |

**Basic**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getUpdateTime | 接口更新时间 | 2017-10-25T04:34+08:00      |
| getFxLink | 所查询城市的天气预报网页  | http://hfx.link/1 |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | qweather.com      |
| getLicenseList | 使用许可     | commercial license |


**StormTrackNowBean**

| 属性         | 说明                                                                    | 示例值               |
| ------------ | ----------------------------------------------------- | -------------------- |
| getPubTime      | 台风信息发布时间                                 | 2020-10-29T20:00+08:00 |
| getLat        | 台风所处纬度        | 22.5         |
| getLon       | 台风所处经度                           |    148.5    |
| getType       | 台风类型                        |    TS    |
| getPressure  | 台风中心气压                         |  1000 |
| getWindSpeed       | 台风附近最大风速                       |  18    |
| getMoveSpeed       | 台风移动速度                   |   27   |
| getMoveDir       | 台风移动方位                      |    西北    |
| getMove360       | 台风移动方位360度方向  ，可能为空          |    332    |
| getWindRadius30       | 台风7级风圈，**可能为空**          |    StormTrackWindBean    |
| getWindRadius50       | 台风10级风圈，**可能为空**       |    StormTrackWindBean    |
| getWindRadius64       | 台风12级风圈，**可能为空**  |    StormTrackWindBean    |


**StormTrackWindBean**

| 属性         | 说明                                                                    | 示例值               |
| ------------ | ----------------------------------------------------- | -------------------- |
| getNeRadius       | 东北半径                    | 350|
| getSeRadius       | 东南半径               | 260                  |
| getSwRadius       | 西南半径                    | 212                   |
| getNwRadius       | 西北半径                    | 212                   |


**StormTrackBaseBean**

| 属性         | 说明                                                                    | 示例值               |
| ------------ | ----------------------------------------------------- | -------------------- |
| getTime      | 台风信息发布时间                                 | 2020-10-29T20:00+08:00 |
| getLat       | 台风所处纬度        | 22.5         |
| getLon       | 台风所处经度                           |    148.5    |
| getType      | 台风类型                        |    TS    |
| getPressure  | 台风中心气压                         |  1000 |
| getWindSpeed       | 台风附近最大风速                       |  18    |
| getMoveSpeed       | 台风移动速度                   |   27   |
| getMoveDir       | 台风移动方位                      |    西北    |
| getMove360       | 台风移动方位360度方向  ，可能为空          |    332    |
| getWindRadius30       | 台风7级风圈    ，可能为空         |    StormTrackWindBean    |
| getWindRadius50       | 台风10级风圈   ，可能为空       |    StormTrackWindBean    |
| getWindRadius64       | 台风12级风圈，可能为空     |    StormTrackWindBean    |

## 台风预报

台风预报提供全球主要海洋流域的热带低气压（台风）的预报信息，包括台风预测位置、等级、气压、风力、速度

> 如果查询的台风已经结束，则返回的数据为空，建议先通过[台风列表](#storm-list)获取台风的状态

| 接口代码| 接口说明          | 数据类  |
| -------- | ---------------- | ------- |
| getStormForecast| 台风预报数据  | StormForecastBean |

### 接口参数说明

{% include params.html p="stormid-sdk" %}

### 示例代码

```java
QWeather.getStormForecast(Context context, String stormId, OnResultTropicalStormForecastListener listener);
```

### TideBean属性

| 属性            | 说明     | 示例值                    |
| --------------- | -------- | ---------------------- |
| getCode         | 接口状态 | [Status Code](/docs/start/status-code/)        |
| getBasic         | 更新信息 | Basic       |
| getRefer         | Refer 数据来源以及数据授权 | Refer  |
| getForecastList | 台风预报数据 | List<StormForecastBaseBean> |

**Basic**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getUpdateTime | 接口更新时间 | 2017-10-25T04:34+08:00      |
| getFxLink | 所查询城市的天气预报网页  | http://hfx.link/1 |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | qweather.com      |
| getLicenseList | 使用许可     | commercial license |


**StormForecastBaseBean**

| 属性         | 说明                                                                    | 示例值               |
| ------------ | ----------------------------------------------------- | -------------------- |
| getFxTime      | 台风预报时间                                 | 2020-10-29T20:00+08:00 |
| getLat        | 台风所处纬度        | 22.5         |
| getLon       | 台风所处经度                           |    148.5    |
| getType       | 台风类型                        |    TS    |
| getPressure  | 台风中心气压                         |  1000 |
| getWindSpeed       | 台风附近最大风速                       |  18    |
| getMoveSpeed       | 台风移动速度                   |   27   |
| getMoveDir       | 台风移动方位                      |    西北    |
| getMove360       | 台风移动方位360度方向  ，可能为空          |    332    |

## 台风等级

GBT 19201-2006

| 热带气旋等级        | 底层中心附近最大平均风速(m/s) | 底层中心附近最大风力(级) |
| ------------------- | ----------------------------- | ------------------------ |
| 热带气压（TD）      | 10.8-17.1                     | 6-7                      |
| 热带风暴（TS）      | 17.2-24.4                     | 8-9                      |
| 强热带风暴（STS）   | 24.5-32.6                     | 10-11                    |
| 台风（TY）          | 32.7-41.4                     | 12-13                    |
| 强台风（STY）       | 41.5-50.9                     | 14-15                    |
| 超强台风（SuperTY） | ≥51.0                         | 16或以上                 |
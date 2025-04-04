---
title: 台风预报
tag: [guide, android, storm, forecast]
ref: 3-sdk-android-storm-forecast
---

台风预报提供全球主要海洋流域的热带低气压（台风）的预报信息，包括台风预测位置、等级、气压、风力、速度。

> 如果查询的台风已经结束，则返回的数据为空，建议先通过[台风列表](/docs/android-sdk/tropical-cyclone/android-storm-list/)获取台风的状态

| 接口代码| 接口          | 数据类  |
| -------- | ---------------- | ------- |
| tropicalStormForecast| 台风预报  | StormForecastResponse |

## 参数

**StormParameter**

{% include params.html p="stormid-sdk" %}

## 示例代码

```java
public void tropicalStormForecast(StormParameter parameter, Callback<StormForecastResponse> callback)
```

## 返回数据

**StormForecastResponse**

{% include api-response.html group="storm" type="forecast" prefix="forecast"  %}

<!-- | 属性            | 说明     | 示例值                    |
| --------------- | -------- | ---------------------- |
| getCode         | 参考[状态码](/docs/resource/status-code/)  | 200       |
| getUpdateTime | 接口更新时间 | 2017-10-25T04:34+08:00      |
| getFxLink     | 所查询城市的天气预报网页  | https://www.qweather.com |
| getForecast   | 台风预报数据 | List&lt;StormForecast&gt; |
| getRefer      | Refer 数据来源以及数据授权 | Refer  |


**Refer**

| 属性        | 说明        | 类型                | 示例值        |
| ---------- | ----------- | ------------------ | ------------ |
| getSources | 原始数据来源  | List&lt;String&gt; | QWeather     |
| getLicense | 使用许可      | List&lt;String&gt; | QWeather Developers License |


**StormForecast**

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
| getMove360       | 台风移动方位360度方向  ，可能为空          |    332    | -->

### 台风等级

GBT 19201-2006

| 热带气旋等级        | 底层中心附近最大平均风速(m/s) | 底层中心附近最大风力(级) |
| ------------------- | ----------------------------- | ------------------------ |
| 热带气压（TD）      | 10.8-17.1                     | 6-7                      |
| 热带风暴（TS）      | 17.2-24.4                     | 8-9                      |
| 强热带风暴（STS）   | 24.5-32.6                     | 10-11                    |
| 台风（TY）          | 32.7-41.4                     | 12-13                    |
| 强台风（STY）       | 41.5-50.9                     | 14-15                    |
| 超强台风（SuperTY） | ≥51.0                         | 16或以上                 |

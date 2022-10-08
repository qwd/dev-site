---
title: 台风列表
tag: [guide, android, storm, list]
ref: 1-sdk-android-storm-list
---

台风列表提供全球主要海洋流域最近2年的台风列表。

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
| getCode         | 接口状态 | [Status Code](/docs/resource/status-code/)        |
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



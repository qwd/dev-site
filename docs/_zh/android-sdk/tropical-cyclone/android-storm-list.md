<!--
 * @Date: 2025-03-06 10:02:06
 * @LastEditors: 韩笑白
 * @LastEditTime: 2025-03-13 14:26:59
 * @FilePath: /dev-site/docs/_zh/android-sdk/tropical-cyclone/android-storm-list.md
-->
---
title: 台风列表
tag: [guide, android, storm, list]
ref: 1-sdk-android-storm-list
---

台风列表提供全球主要海洋流域最近2年的台风列表。

> 目前仅支持中国沿海地区，即`basin=NP`

| 接口代码| 接口说明          | 数据类  |
| -------- | ---------------- | ------- |
| tropicalStormList| 获取台风列表和ID  | StormListBaseResponse |

### 接口参数说明

{% include params.html p="basin year" %}

### 示例代码

```java
public void tropicalStormList(StormListParameter parameter, Callback<StormListBaseResponse> callback);
```

### StormListBaseResponse属性

| 属性            | 说明     | 示例值                    |
| --------------- | -------- | ---------------------- |
| getCode         | 参考[状态码](/docs/resource/status-code/)  | 200       |
| getUpdateTime | 接口更新时间 | 2017-10-25T04:34+08:00      |
| getFxLink | 所查询城市的天气预报网页  | https://www.qweather.com |
| getStorm | 台风数据 | List&lt;Storm&gt; |
| getRefer         | Refer 数据来源以及数据授权 | Refer  |


**Refer**

| 属性        | 说明        | 类型                | 示例值        |
| ---------- | ----------- | ------------------ | ------------ |
| getSources | 原始数据来源  | List&lt;String&gt; | QWeather     |
| getLicense | 使用许可      | List&lt;String&gt; | QWeather Developers License |


**Storm**

| 属性         | 说明                                                                    | 示例值               |
| ------------ | ----------------------------------------------------- | -------------------- |
| getId      | 台风ID                               | NP_2101 |
| getName        | 台风名称                                      | 杜鹃           |
| getBasin       | 台风所处流域                              |    NP    |
| getYear       | 台风所处年份                              |    2021    |
| getActive       | 是否为活跃台风<br />`1` 活跃台风 <br /> `0` 停编                              |    0    |



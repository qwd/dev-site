<!--
 * @Date: 2025-03-06 10:02:06
 * @LastEditors: 韩笑白
 * @LastEditTime: 2025-03-12 17:22:13
 * @FilePath: /dev-site/docs/_en/android-sdk/tropical-cyclone/android-storm-list.md
-->
---
title: Storm List
tag: [guide, android, storm, list]
ref: 1-sdk-android-storm-list
---
Get a list of tropical cyclones for the last 2 years in major ocean basins around the world.

> Only the coastal areas of China are supported now, i.e. `basin=NP`


| Interface Code| Interface          | Class  |
| -------- | ---------------- | ------- |
| tropicalStormList | Storm list and IDs  | StormListBaseResponse |

### Parameter

{% include params.html p="basin year" %}

### Sample Code

```java
public void tropicalStormList(StormListParameter parameter, Callback<StormListBaseResponse> callback);
```

### Properties

Properties of StormListBaseResponse

| Property            | Description     | Example                    |
| --------------- | -------- | ---------------------- |
| getCode         | Status code, please refer to [Status Code](/en/docs/resource/status-code/) | [Status Code](/docs/resource/status-code/)        |
| getUpdateTime | [Last updated time](/en/docs/resource/glossary/#update-time)  | 2017-10-25T04:34+08:00      |
| getFxLink |Responsive web page of this data, for embedded in website or APP  | https://www.qweather.com |
| getStorm | Storm list and IDs | List&lt;Storm&gt; |
| getRefer  | Reference data, includes data source, statements and license | Refer  |


**Refer**

| Property | Description  |  Type |  Example  |
| ---------- | ----------- | ------------------ | ------------ |
| getSources | Data source and other statements  | List&lt;String&gt; | QWeather     |
| getLicense | Data license      | List&lt;String&gt; | QWeather Developers License |


**Storm**

| Property         | Description                                                                    | Example               |
| ------------ | ----------------------------------------------------- | -------------------- |
| getId      | Storm ID                              | NP_2101 |
| getName        | Storm name                                      | 杜鹃           |
| getBasin       | The basin of the storm                              |    NP    |
| getYear       | Year of the storm                              |    2021    |
| getActive       | Is it an active storm?<br />`1` Active <br /> `0` Stopped                             |    0    |

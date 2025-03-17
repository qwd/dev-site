---
title: Storm List
tag: [guide, android, storm, list]
ref: 1-sdk-android-storm-list
---
Get a list of tropical cyclones for the last 2 years in major ocean basins around the world.

> Only the coastal areas of China are supported now, i.e. `basin=NP`


| Interface Code| Interface          | Class  |
| -------- | ---------------- | ------- |
| tropicalStormList | Storm list and IDs  | StormListResponse |

### Parameter

{% include params.html p="basin year" %}

### Sample Code

```java
public void tropicalStormList(StormListParameter parameter, Callback<StormListResponse> callback);
```

### Properties

Properties of StormListResponse

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

---
title: 台风实况和路径
tag: [guide, android, storm, track]
ref: 2-sdk-android-storm-track
---

台风实况和路径提供全球主要海洋流域的台风实时位置、等级、气压、风力、速度以及活跃台风的轨迹路径。

> 目前仅支持中国沿海地区，即`basin=NP`


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
| getCode         | 接口状态 | [Status Code](/docs/resource/status-code/)        |
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
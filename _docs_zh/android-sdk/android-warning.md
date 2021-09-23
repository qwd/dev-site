---
title: 天气灾害预警
tag: android-sdk
version: v4
description: 使用和风天气Android SDK获取天气灾害预警数据，实时获取台风预警、暴雨暴雪预警、寒潮预警、大风预警、空气重污染预警以及沙尘暴、高温、干旱、雷电、冰雹、霜冻、大雾、道路结冰、干热风、雷雨大风、森林火险、降温、冰冻、雷暴大风、龙卷风、低温冻害、低温雨雪冰冻、强对流、强降雨、强降温、雪灾、雷暴、严寒、沙尘等50多种气象灾害预警信息。
ref: 5-sdk-android-warning
---

和风天气灾害预警支持中国和欧盟国家天气灾害预警，预警类型包括：台风、暴雨、暴雪、寒潮、大风、沙尘暴、高温、干旱、雷电、冰雹、霜冻、大雾、霾、道路结冰、寒冷、灰霾、雷雨大风、森林火险、降温、道路冰雪、干热风、低温、冰冻、空气重污染、海上大雾、雷暴大风、持续低温、浓浮尘、龙卷风、低温冻害、海上大风、低温雨雪冰冻、强对流、臭氧、大雪、强降雨、强降温、雪灾、森林（草原）火险、雷暴、严寒、沙尘、海上雷雨大风、海上雷电、海上台风等，详细列表请查看[预警类型和等级](/docs/start/warning-info/)

## 灾害预警

| 接口代码| 接口说明        | 数据类      |
| ------------ | ---------- | ----------- |
| getWarning| 天气灾害预警  | WarningBean |

### 接口参数说明

{% include params.html p="location-android lang-zhen-sdk" %}

### 示例代码

```java
QWeather.getWarning(Context context, String location, final QWeather.OnResultWarningListener listener) ;

QWeather.getWarning(Context context, String location, Lang lang, final QWeather.OnResultWarningListener listener) ;

```

### WarningBean属性

| 属性            | 说明                       | 示例值                      |
| --------------- | -------------------------- | --------------------------- |
| getCode         | 接口状态                   | [Status Code](/docs/start/status-code/)   |
| getBeanBaseList | 灾害预警                   | List&lt;WarningBeanBase&gt; |
| getRefer        | Refer 数据来源以及数据授权 | Refer                       |
| getBasic        | Basic 基础信息             | Basic                       |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | qweather.com      |
| getLicenseList | 使用许可     | commercial license |

**Basic**

| 属性          | 说明                     | 示例值               |
| ------------- | ------------------------ | -------------------- |
| getUpdateTime | 接口更新时间             | 2017-10-25T04:34+08:00     |
| getFxLink     | 所查询城市的天气预报网页 | http://hfx.link/ae45 |

**WarningBeanBase 预警信息**

| 属性         | 说明                               | 示例值                                                           |
| ------------ | ---------------------------------- | ---------------------------------------------------------------- |
| getId        | 预警id                             | 10102010020210514101500714183119
| getPubTime   | 预警发布时间   | 2017-10-25T12:03+08:00                                                 |
| getTitle     | 预警信息标题                       | 广东省深圳市气象台发布雷电黄色预警                               |
| getSender | 预警发布单位，可能为空 |深圳市气象台 |
| getStartTime | 预警开始时间                       | 2017-10-25T12:03+08:00                                |
| getEndTime   | 预警结束时间                       | 2017-10-25T12:03+08:00                                |
| getStatus    | 预警状态                           | 预警中                                                           |
| getLevel     | 预警等级：蓝黄橙红白               | 黄色                                                             |
| getType      | 预警类型，全部类型参考本文简介     | 雷电                                                             |
| getTypeName      | 预警类型，全部类型参考本文简介     | 雷电                                                             |
| getText      | 预警详细信息                       | 深圳市气象局于10月04日12时59分发布雷电黄色预警信号，请注意防御。 |
| getRelated      | 与本条预警相关联的预警ID，当预警状态为cancel或update时返回。可能为空 | 10102010020210513101500714846231 |

## 灾害预警列表

获取当前中国和欧盟国家发生天气预警的城市列表。

| 接口代码| 接口说明                | 数据类          |
| ---------------- | -------------- | --------------- |
| getWarningList| 天气灾害预警集合  | WarningListBean |

### 接口参数说明

{% include params.html p="range-warning" %}

### 示例代码

```java
/**
 * @param context  上下文
 * @param listener 网络访问回调接口
 */
QWeather.getWarningList(Context context, final QWeather.OnResultWarningListListener listener);
```

### WarningListBean属性

| 属性           | 说明         | 示例值                      |
| -------------- | ------------ | --------------------------- |
| getCode        | 接口状态     | [Status Code](/docs/start/status-code/)     |
| getUpdateTime  | 接口更新时间 | 2017-10-25T12:34+08:00            |
| getWarningBean | 灾害预警     | List&lt;WarningListBean&gt; |

**WarningListBeanBase 预警信息**

| 属性          | 说明         | 示例值    |
| ------------- | ------------ | --------- |
| getLocationId | 地区／城市ID | 101280601 |

## 预警类型和等级

查看[预警类型和等级](/docs/start/warning-info/)
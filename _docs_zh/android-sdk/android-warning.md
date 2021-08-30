---
title: 天气灾害预警
tag: android-sdk
version: v4
description: 使用和风天气Android SDK获取天气灾害预警数据，实时获取台风预警、暴雨暴雪预警、寒潮预警、大风预警、空气重污染预警以及沙尘暴、高温、干旱、雷电、冰雹、霜冻、大雾、道路结冰、干热风、雷雨大风、森林火险、降温、冰冻、雷暴大风、龙卷风、低温冻害、低温雨雪冰冻、强对流、强降雨、强降温、雪灾、雷暴、严寒、沙尘等50多种气象灾害预警信息。
ref: 5-sdk-android-warning
---

和风天气灾害预警支持中国和欧盟国家天气灾害预警，预警类型和级别包括：

- 预警种类：台风、暴雨、暴雪、寒潮、大风、沙尘暴、高温、干旱、雷电、冰雹、霜冻、大雾、霾、道路结冰、寒冷、灰霾、雷雨大风、森林火险、降温、道路冰雪、干热风、低温、冰冻、空气重污染、海上大雾、雷暴大风、持续低温、浓浮尘、龙卷风、低温冻害、海上大风、低温雨雪冰冻、强对流、臭氧、大雪、强降雨、强降温、雪灾、森林（草原）火险、雷暴、严寒、沙尘、海上雷雨大风、海上雷电、海上台风。
- 预警级别：白色（仅限广东省内）、蓝色、黄色、橙色、红色

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

## 预警类型

> 预警类型ID和预警类型名称有可能会变更，请以返回的数据为准

| Type   | TypeName         |
| ------ | ---------------- |
| 11B01  | 台风             |
| 11B02  | 龙卷风           |
| 11B03  | 暴雨             |
| 11B04  | 暴雪             |
| 11B05  | 寒潮             |
| 11B06  | 大风             |
| 11B07  | 沙尘暴           |
| 11B08  | 低温冻害         |
| 11B09  | 高温             |
| 11B10  | 热浪             |
| 11B11  | 干热风           |
| 11B12  | 下击暴流         |
| 11B13  | 雪崩             |
| 11B14  | 雷电             |
| 11B15  | 冰雹             |
| 11B16  | 霜冻             |
| 11B17  | 大雾             |
| 11B18  | 低空风切变       |
| 11B19  | 霾               |
| 11B20  | 雷雨大风         |
| 11B21  | 道路结冰         |
| 11B22  | 干旱             |
| 11B23  | 海上大风         |
| 11B24  | 高温中暑         |
| 11B25  | 森林火险         |
| 11B26  | 草原火险         |
| 11B27  | 冰冻             |
| 11B28  | 空间天气         |
| 11B29  | 重污染           |
| 11B30  | 低温雨雪冰冻     |
| 11B31  | 强对流           |
| 11B32  | 臭氧             |
| 11B33  | 大雪             |
| 11B34  | 寒冷             |
| 11B35  | 连阴雨           |
| 11B36  | 渍涝风险         |
| 11B37  | 地质灾害气象风险 |
| 11B38  | 强降雨           |
| 11B39  | 强降温           |
| 11B40  | 雪灾             |
| 11B41  | 森林（草原）火险 |
| 11B42  | 医疗气象         |
| 11B43  | 雷暴             |
| 11B44  | 停课信号         |
| 11B45  | 停工信号         |
| 11B46  | 海上风险         |
| 11B47  | 春季沙尘天气     |
| 11B48  | 降温             |
| 11B49  | 台风暴雨         |
| 11B50  | 严寒             |
| 11B51  | 沙尘             |
| 11B52  | 海上雷雨大风     |
| 11B53  | 海上大雾         |
| 11B54  | 海上雷电         |
| 11B55  | 海上台风         |
| 11B56  | 低温             |
| 11B57  | 道路冰雪         |
| 11A01  | 洪水             |
| 11B101 | 大风             |
| 11B102 | 强降雪和结冰     |
| 11B103 | 大雾             |
| 11E101 | 海岸风险         |
| 11B104 | 森林火险         |
| 11B105 | 雨               |
| 11A106 | 大雨洪水         |
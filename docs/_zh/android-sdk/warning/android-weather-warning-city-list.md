---
title: 天气预警城市列表
tag: [guide, android, warning, list]
ref: 2-sdk-android-weather-warning-city-list
---

获取指定国家或地区当前正在发生天气灾害预警的城市列表，根据这些城市列表再查询对应城市的[天气灾害预警](/docs/ios-sdk/warning/ios-weather-warning/)。

> **注意：**目前天气预警城市列表仅适用于获取中国（包括港澳台）城市列表。其他国家和地区，请使用[天气灾害预警](/docs/ios-sdk/warning/ios-weather-warning/)。
{:.bqwarning}

> **提示：**关于更多天气预警数据的说明，请参考[实用资料-预警信息](/docs/resource/warning-info/)。

| 接口代码| 接口                | 数据类          |
| ---------------- | -------------- | --------------- |
| warningList| 灾害预警城市列表  | WarningListResponse |

## 参数

**WarningListParameter**

{% include params.html p="range-warning" %}

## 示例代码

```java
public void warningList(WarningListParameter parameter, Callback<WarningListResponse> callback);
```

## 返回数据

**WarningListResponse**

{% include api-response.html group="warning" type="list" prefix="warningLocList" fxlink=0 %}

<!-- | 属性           | 说明         | 示例值                      |
| -------------- | ------------ | --------------------------- |
| getCode        | 参考[状态码](/docs/resource/status-code/)      | 200    |
| getUpdateTime | 接口更新时间             | 2023-04-03T14:20+08:00    |
| getWarningLocList | 灾害预警     | List&lt;WarningLocation&gt; |
| getRefer | Refer 数据来源以及数据授权 | Refer       |

**Refer**

| 属性        | 说明        | 类型                | 示例值        |
| ---------- | ----------- | ------------------ | ------------ |
| getSources | 原始数据来源  | List&lt;String&gt; | QWeather     |
| getLicense | 使用许可      | List&lt;String&gt; | QWeather Developers License |

**WarningLocation**

| 属性          | 说明         | 示例值    |
| ------------- | ------------ | --------- |
| getLocationId | 地区／城市ID | 101280601 | -->

---
title: 天气预警城市列表
tag: [guide, android, warning, list]
ref: 2-sdk-android-weather-warning-city-list
---

获取指定国家或地区当前正在发生预警的城市列表，根据这些城市列表再查询详细的[预警数据](/docs/android-sdk/warning/android-weather-warning/)。

> **注意：**目前天气预警城市列表仅适用于获取中国（包括港澳台）城市列表。其他国家和地区，请使用[天气灾害预警](/docs/android-sdk/warning/android-weather-warning/)。
{:.bqwarning}

> **提示：**关于更多天气预警数据的说明，请参考[实用资料-预警信息](/docs/resource/warning-info/)。

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
QWeather.getWarningList(Context context, Range range, final QWeather.OnResultWarningListListener listener);
```

### WarningListBean属性

| 属性           | 说明         | 示例值                      |
| -------------- | ------------ | --------------------------- |
| getCode        | 参考[状态码](/docs/resource/status-code/)      | 200    |
| getUpdateTime  | 接口更新时间 | 2017-10-25T12:34+08:00            |
| getWarningBean | 灾害预警     | List&lt;WarningListBean&gt; |
| getRefer | Refer 数据来源以及数据授权 | Refer       |

**Refer**

| 属性           | 说明         | 示例值             |
| -------------- | ------------ | ------------------ |
| getSourcesList | 原始数据来源 | QWeather      |
| getLicenseList | 使用许可     | QWeather Developers License |

**WarningListBeanBase 预警信息**

| 属性          | 说明         | 示例值    |
| ------------- | ------------ | --------- |
| getLocationId | 地区／城市ID | 101280601 |

---
title: 天气生活指数
tag: android-sdk
version: v4
description: 使用和风天气Android SDK获取全球生活指数，包括洗车指数、穿衣指数、感冒指数、过敏指数、紫外线指数、钓鱼指数等数据，支持全国4000+个市县区和海外15万个城市天气预报。
ref: 4-sdk-android-indices
---

和风天气生活指数为中国和海外城市提供详细的生活指数实况和预报数据，包括：

- 中国生活指数：舒适度指数、洗车指数、穿衣指数、感冒指数、运动指数、旅游指数、紫外线指数、空气污染扩散条件指数、空调开启指数、过敏指数、太阳镜指数、化妆指数、晾晒指数、交通指数、钓鱼指数、防晒指数
- 海外生活指数：运动指数、洗车指数、紫外线指数、钓鱼指数

| 接口代码| 接口说明         | 数据类      |
| ----------- | ------------ | ----------- |
| getIndices1D| 1天生活指数  | IndicesBean |
| getIndices3D| 3天生活指数  | IndicesBean |

### 请求参数

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="location-android idx-type-android" %}

### 示例代码

```java
/**
 * 获取1天生活指数数据
 */
QWeather.get1DIndices(Context context, String location, Lang lang, List<IndicesType> types, QWeather.OnResultIndicesListener listener);

/**
 * 获取3天生活指数数据
 */
QWeather.get3DIndices(Context context, String location, Lang lang, List<IndicesType> types, QWeather.OnResultIndicesListener listener) ;
```

### IndicesBean属性

| 属性         | 说明                       | 示例值                |
| ------------ | -------------------------- | --------------------- |
| getCode      | 接口状态                   | [Status Code](/docs/start/status-code/)  |
| getDailyList | 生活指数逐天预报数据       | List&lt;DailyBean&gt; |
| getRefer     | Refer 数据来源以及数据授权 | Refer                 |
| getBasic     | Basic 基础信息             | Basic                 |

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


**DailyBean 当天生活指数**

| 属性        | 说明         |
| ----------- | ----------------------- |
| getDate     | 预报日期，格式 yyyy-MM-dd     |
| getLevel    | 生活指数预报等级          |
| getCategory | 生活指数预报级别名称     |
| getName     | 生活指数名称             |
| getType     | 生活指数类型 |
| getText     | 生活指数详细描述         |

### 生活指数类型和等级

请访问[天气指数信息](/docs/resource/indices-info/)。




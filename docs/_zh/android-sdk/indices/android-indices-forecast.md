---
title: 天气指数预报
tag: [guide, android, indices, forecast]
ref: 1-sdk-android-indices-forecast
---

获取中国和海外城市天气生活指数预报数据。

- 中国天气生活指数：舒适度指数、洗车指数、穿衣指数、感冒指数、运动指数、旅游指数、紫外线指数、空气污染扩散条件指数、空调开启指数、过敏指数、太阳镜指数、化妆指数、晾晒指数、交通指数、钓鱼指数、防晒指数
- 海外天气生活指数：运动指数、洗车指数、紫外线指数、钓鱼指数

| 接口代码| 接口         | 数据类      |
| ----------- | ------------ | ----------- |
| indices1d| 当天生活指数  | IndicesDailyResponse |
| indices3d| 3天生活指数  | IndicesDailyResponse |

## 参数

**IndicesParameter**

{% include params.html p="location-def idx-type lang-def" %}

## 示例代码

```java
/**
 * 获取1天生活指数数据
 */
public void indices1d(IndicesParameter parameter, Callback<IndicesDailyResponse> callback);

/**
 * 获取3天生活指数数据
 */
public void indices3d(IndicesParameter parameter, Callback<IndicesDailyResponse> callback);
```

## Response 

**IndicesDailyResponse**

{% include api-response.html group="indices" prefix="daily" %}

<!-- | 属性         | 说明                       | 示例值                |
| ------------ | -------------------------- | --------------------- |
| getCode      | 参考[状态码](/docs/resource/status-code/)                    | 200 |
| getUpdateTime | 接口更新时间             | 2017-10-25T04:34+08:00     |
| getFxLink     | 所查询城市的天气预报网页 | https://www.qweather.com/indices/beijing-101010100.html |
| getDaily | 生活指数逐天预报数据       | List&lt;IndicesDaily&gt; |
| getRefer     | Refer 数据来源以及数据授权 | Refer                 |

**Refer**

| 属性        | 说明        | 类型                | 示例值        |
| ---------- | ----------- | ------------------ | ------------ |
| getSources | 原始数据来源  | List&lt;String&gt; | QWeather     |
| getLicense | 使用许可     | List&lt;String&gt; | QWeather Developers License |

**IndicesDaily**

| 属性        | 说明         |
| ----------- | ----------------------- |
| getDate     | 预报日期，格式 yyyy-MM-dd     |
| getLevel    | 生活指数预报等级          |
| getCategory | 生活指数预报级别名称     |
| getName     | 生活指数名称             |
| getType     | 生活指数类型 |
| getText     | 生活指数详细描述         | -->

### 生活指数类型和等级

请访问[天气指数信息](/docs/resource/indices-info/)。




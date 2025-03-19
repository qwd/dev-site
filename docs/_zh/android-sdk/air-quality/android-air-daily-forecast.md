---
title: 空气质量每日预报(new)
tag: [guide, android, aq-v1, daily-v1]
ref: 1-sdk-android-air-daily-v1
---

空气质量每日预报API提供未来3天的空气质量（AQI）预报、污染物浓度值和健康建议。

我们推荐阅读[空气质量信息文档](/docs/resource/air-info/)，以便了解AQI的类型、污染物、支持的国家等信息。

| 接口代码 | 接口                         | 数据类       |
| --------------- | ---------------------------- | ------------ |
| airDaily | 空气质量每日预报(new)    | AirV1DailyResponse |

### 请求参数 

**AirV1Parameter**

请求参数包括必选和可选参数，如不填写可选参数将使用其默认值。

{% include params.html p="p-lat p-lon" %}

{% include params.html p="lang-def" %}

### 示例代码

```java
public void airDaily(AirV1Parameter parameter, Callback<AirV1DailyResponse> callback);
```

### 返回数据

**AirV1DailyResponse**

{% include api-response.html group="air" type="daily-v1" prefix="days" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag"  %}

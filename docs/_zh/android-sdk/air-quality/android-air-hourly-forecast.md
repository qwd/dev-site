---
title: 空气质量小时预报
tag: [guide, android, aq, hourly-v1]
ref: 1-sdk-android-air-hourly-v1
---

空气质量小时预报API提供未来24小时空气质量的数据，包括AQI、污染物浓度、分指数以及健康建议。

我们推荐阅读[空气质量信息文档](/docs/resource/air-info/)，以便了解AQI的类型、污染物、支持的国家等信息。

| 接口代码 | 接口                         | 数据类       |
| --------------- | ---------------------------- | ------------ |
| airHourly | 空气质量小时预报    | AirV1HourlyResponse |

## 参数 

**AirV1Parameter**

{% include params.html p="p-lat p-lon" %}

{% include params.html p="lang-def" %}

## 示例代码

```java
public void airHourly(AirV1Parameter parameter, Callback<AirV1HourlyResponse> callback);
```

## 返回数据

**AirV1HourlyResponse**

{% include api-response.html group="air" type="hourly-v1" prefix="hours" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag"   %}


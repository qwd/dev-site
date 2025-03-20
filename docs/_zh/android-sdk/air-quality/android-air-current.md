---
title: 实时空气质量(new)
tag: [guide, android, aq-v1, now-v1]
ref: 1-sdk-android-air-now-v1
---

实时空气质量API提供指定地点的实时空气质量数据，精度为1x1公里。

- 基于各个国家或地区当地标准的AQI、AQI等级、颜色和首要污染物
- 和风天气通用AQI
- 污染物浓度值、分指数
- 健康建议
- 相关联的监测站信息

我们推荐阅读[空气质量信息文档](/docs/resource/air-info/)，以便了解指数类型、污染物、支持的国家等信息。

| 接口代码 | 接口                         | 数据类       |
| --------------- | ---------------------------- | ------------ |
| airCurrent | 实时空气质量(new)    | AirV1CurrentResponse |

## 请求参数 

**AirV1Parameter**

{% include params.html p="p-lat p-lon" %}

{% include params.html p="lang-def" %}


## 代码示例

```Java
public void airCurrent(AirV1Parameter parameter, Callback<AirV1CurrentResponse> callback);
```

## 返回数据

**AirV1CurrentResponse**

{% include api-response.html group="air" type="now-v1" prefix="nil" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag"  %}

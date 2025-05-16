---
title: 监测站数据
tag: [guide, android, aq, station-v1]
ref: 1-sdk-android-air-station-v1
---

监测站数据API提供各个国家或地区监测站的污染物浓度值。

> **警告：**监测站的观测值仅供参考，可能由于故障、移除、维护或当地法律法规等各种原因导致数据延迟或缺失，我们无法确保该数据的可用性。
{:.bqdanger}

| 接口代码 | 接口         | 数据类型       |
| --------------- | ---------------- | ------------ |
| airStation | 监测站数据  | AirV1StationResponse |


## 参数 

**AirV1StationParameter**

{% include params.html p="p-location-id-aqsta" %}

{% include params.html p="lang-def" %}

## 代码示例

```java
public void airStation(AirV1StationParameter parameter, Callback<AirV1StationResponse> callback);
```

## 返回数据

**AirV1StationResponse**

{% include api-response.html group="air" type="station-v1" prefix="nil" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag sources"  %}
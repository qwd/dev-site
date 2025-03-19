---
title: 太阳辐射逐小时预报
tag: [guide, android, solar-radiation, hourly]
ref: 1-sdk-android-solar-radiation-hourly-forecast
---

太阳辐射API支持获取全球任意坐标的辐射数据，包括净太阳辐射，太阳散射辐射和太阳直接辐射。

| 接口代码           | 接口     | 数据类             |
| --------------------------- | ---- | ------------------ |
| solarRadiation24h | 逐小时预报（未来24小时）| SolarRadiationResponse |
| solarRadiation72h | 逐小时预报（未来72小时）| SolarRadiationResponse |

> **注意：**在一些特殊情况下，未来72小时预报有可能会缺少最后若干小时的数据。
{:.bqwarning}

## 请求参数 

**SolarRadiationParameter**

| 参数名   | 参数类型 | 必选 | 示例值 |
| -------- | -------- | ---- | ------ |
| longitude | double | 是 | 116.41 |
| latitude | double | 是 | 39.92 |

## 示例代码

```java
/*
* 逐小时预报（未来24小时）
*/
public void solarRadiation24h(SolarRadiationParameter parameter, Callback<SolarRadiationResponse> callback);

/*
* 逐小时预报（未来72小时）
*/
public void solarRadiation72h(SolarRadiationParameter parameter, Callback<SolarRadiationResponse> callback);

```

## 返回数据

**SolarRadiationResponse**

> 除非特别说明，本数据返回的太阳辐射均指地表垂直向下的短波辐射，单位w/m<sup>2</sup>

{% include api-response.html group="radiation" type="radiation" prefix="radiation" fxlink=0 %}

---
title: 格点逐小时天气预报
tag: [guide, android, grid-weather, hourly]
ref: 3-sdk-android-grid-weather-hourly-forecast
---

基于全球任意坐标的高精度逐小时天气预报，精确到3-5公里范围，包括温度、湿度、大气压、天气状况、风力、风向等。

| 接口代码           | 接口     | 数据类             |
| --------------------------- | ---- | ------------------ |
| grid24h | 逐小时预报（未来24小时）| GridHourlyResponse |
| grid72h | 逐小时预报（未来72小时）| GridHourlyResponse |

## 请求参数 

**GridWeatherParameter**

| 参数名   | 参数类型 | 必选 | 示例值 |
| -------- | -------- | ---- | ------ |
| longitude | double | 是 | 116.41 |
| latitude | double | 是 | 39.92 |
| lang | Lang | 否 | ZH_HANS |
| unit | Unit | 否 | METRIC |

## 代码示例

```java
/*
* 逐小时预报（未来24小时）
*/
public void grid24h(GridWeatherParameter parameter, Callback<GridHourlyResponse> callback);

/*
* 逐小时预报（未来72小时）
*/
public void grid72h(GridWeatherParameter parameter, Callback<GridHourlyResponse> callback);
```

## 返回数据

**GridHourlyResponse**

{% include api-response.html group="weather" type="ghourly" prefix="hourly"  %}


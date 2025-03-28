---
title: 格点每日天气预报
tag: [guide, android, grid-weather, daily]
ref: 2-sdk-android-grid-weather-daily-forecast
---

基于全球任意坐标的高精度每日天气预报，精确到3-5公里范围，包括温度、湿度、大气压、天气状况、风力、风向等。

| 接口代码            | 接口     | 数据类             |
| --------------------------- | ---- | ------------------ |
| grid3d | 格点3天预报| GridDailyResponse |
| grid7d | 格点7天预报| GridDailyResponse |


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
* 格点3天预报
*/
public void grid3d(GridWeatherParameter parameter, Callback<GridDailyResponse> callback);

/*
* 格点7天预报
*/
public void grid7d(GridWeatherParameter parameter, Callback<GridDailyResponse> callback);
```

## 返回数据

**GridDailyResponse**

{% include api-response.html group="weather" type="gdaily" prefix="daily"  %}

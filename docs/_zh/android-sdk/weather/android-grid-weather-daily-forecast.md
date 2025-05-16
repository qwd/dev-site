---
title: 格点每日天气预报
tag: [guide, android, weather, grid-daily]
ref: 2-sdk-android-grid-weather-daily-forecast
---

基于数值模式的天气预报数据，提供全球指定坐标的每日天气预报，分辨率3-5公里。

> **提示：** 格点天气预报是基于数值预报模型生成，不适宜与观测站数据对比。如需基于观测站的城市天气，请使用[城市每日天气API](/docs/android-sdk/weather/android-weather-daily-forecast/)。格点天气采用UTC 0时区表示时间。

| 接口代码            | 接口     | 数据类             |
| --------------------------- | ---- | ------------------ |
| grid3d | 格点3天预报| GridDailyResponse |
| grid7d | 格点7天预报| GridDailyResponse |


## 参数 

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

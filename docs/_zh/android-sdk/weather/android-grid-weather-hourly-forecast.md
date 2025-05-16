---
title: 格点逐小时天气预报
tag: [guide, android, weather, grid-hourly]
ref: 3-sdk-android-grid-weather-hourly-forecast
---

基于数值模式的天气预报数据，提供全球指定坐标的逐小时天气预报，分辨率3-5公里。

> **提示：** 格点天气预报是基于数值预报模型生成，不适宜与观测站数据对比。如需基于观测站的城市天气，请使用[城市逐小时天气API](/docs/android-sdk/weather/android-weather-hourly-forecast/)。格点天气采用UTC 0时区表示时间。

| 接口代码           | 接口     | 数据类             |
| --------------------------- | ---- | ------------------ |
| grid24h | 逐小时预报（未来24小时）| GridHourlyResponse |
| grid72h | 逐小时预报（未来72小时）| GridHourlyResponse |

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


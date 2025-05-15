---
title: 格点实时天气
tag: [guide, android, weather, grid-now]
ref: 1-sdk-android-grid-weather-now
---

基于数值模式的天气预报数据，提供全球指定坐标的实时天气，分辨率3-5公里。

> **提示：** 格点天气预报是基于数值预报模型生成，不适宜与观测站数据对比。如需基于观测站的城市天气，请使用[城市实时天气API](/docs/android-sdk/weather/android-weather-now/)。格点天气采用UTC 0时区表示时间。

| 接口代码          | 接口     | 数据类             |
| --------------------------- | ---- | ------------------ |
| gridNow | 格点实时天气| GridNowResponse |


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
public void gridNow(GridWeatherParameter parameter, Callback<GridNowResponse> callback);
```

## 返回数据

**GridNowResponse**

{% include api-response.html group="weather" type="gnow" prefix="now"  %}

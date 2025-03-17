---
title: 格点实时天气
tag: [guide, android, grid-weather, now]
ref: 1-sdk-android-grid-weather-now
---

基于全球任意坐标的高精度实时天气，精确到3-5公里范围，包括：温度、湿度、大气压、天气状况、风力、风向等。

| 接口代码          | 接口     | 数据类             |
| --------------------------- | ---- | ------------------ |
| gridNow | 格点实时天气| GridNowResponse |


## 请求参数 GridWeatherParameter

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

{% include api-snippet.html %}

{% include api-response.html group="weather" type="gnow" prefix="now"  %}

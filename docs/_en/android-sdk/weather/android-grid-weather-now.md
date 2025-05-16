---
title: Grid Weather Real-time 
tag: [guide, android, weather, grid-now]
ref: 1-sdk-android-grid-weather-now
---

Weather forecast data based on numerical models, to provide current weather data at specified coordinates around the world, with a spatial resolution of 3-5 kilometers.

> **Hint:** The grid weather data is based on Numerical Weather Prediction (NWP) models, and it is not suitable for comparison with observation station data. For station-based city weather data, please refer to the [City Weather API](/en/docs/android-sdk/weather/android-weather-now/). Grid weather uses UTC+0 as the time zone.

| Interface code          | Interface     | Class         |
| --------------------------- | ---- | ------------------ |
| gridNow | Grid Weather Real-time | GridNowResponse |


## Parameters 

**GridWeatherParameter**

| Name   | Type | Required | Example |
| -------- | -------- | ---- | ------ |
| longitude | double | true | 116.41 |
| latitude | double | true | 39.92 |
| lang | Lang | false | ZH_HANS |
| unit | Unit | false | METRIC |

## Sample code 

```java
public void gridNow(GridWeatherParameter parameter, Callback<GridNowResponse> callback);
```

## Response

**GridNowResponse**

{% include api-response.html group="weather" type="gnow" prefix="now"  %}

---
title: Grid Weather Daily Forecast
tag: [guide, android, weather, grid-daily]
ref: 2-sdk-android-grid-weather-daily-forecast
---

Weather forecast data based on numerical models, to provide daily weather forecasts at specified coordinates around the world, with a spatial resolution of 3-5 kilometers.

> **Hint:** The grid weather data is based on Numerical Weather Prediction (NWP) models, and it is not suitable for comparison with observation station data. For station-based city weather data, please refer to the [City Weather API](/en/docs/android-sdk/weather/android-weather-daily-forecast/). Grid weather uses UTC+0 as the time zone.

| Interface code          | Interface     | Class         |
| --------------------------- | ---- | ------------------ |
| grid3d | 3 Days Forecast by Grid| GridDailyResponse |
| grid7d | 7 Days Forecast by Grid| GridDailyResponse |


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
/*
* 3 Days Forecast by Grid
*/
public void grid3d(GridWeatherParameter parameter, Callback<GridDailyResponse> callback);

/*
* 7 Days Forecast by Grid
*/
public void grid7d(GridWeatherParameter parameter, Callback<GridDailyResponse> callback);
```

## Response

**GridDailyResponse**

{% include api-response.html group="weather" type="gdaily" prefix="daily"  %}

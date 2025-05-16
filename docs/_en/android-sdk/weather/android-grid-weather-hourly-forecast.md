---
title: Grid Weather Hourly Forecast
tag: [guide, android, weather, grid-hourly]
ref: 3-sdk-android-grid-weather-hourly-forecast
---

Weather forecast data based on numerical models, to provide hourly weather forecasts at specified coordinates around the world, with a spatial resolution of 3-5 kilometers.

> **Hint:** The grid weather data is based on Numerical Weather Prediction (NWP) models, and it is not suitable for comparison with observation station data. For station-based city weather data, please refer to the [City Weather API](/en/docs/android-sdk/weather/android-weather-hourly-forecast/). Grid weather uses UTC+0 as the time zone.

| Interface code          | Interface     | Class         |
| --------------------------- | ---- | ------------------ |
| grid24h | Hourly Forecast by Grid (24hrs)）| GridHourlyResponse |
| grid72h | Hourly Forecast by Grid (72hrs)| GridHourlyResponse |


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
* Hourly Forecast by Grid (24hrs)）
*/
public void grid24h(GridWeatherParameter parameter, Callback<GridHourlyResponse> callback);

/*
* Hourly Forecast by Grid (72hrs)
*/
public void grid72h(GridWeatherParameter parameter, Callback<GridHourlyResponse> callback);
```

## Response

**GridHourlyResponse**

{% include api-response.html group="weather" type="ghourly" prefix="hourly"  %}


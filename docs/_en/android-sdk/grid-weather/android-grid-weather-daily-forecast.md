---
title: Grid Weather Daily Forecast
tag: [guide, android, grid-weather, daily]
ref: 2-sdk-android-grid-weather-daily-forecast
---

Get daily weather forecasts at any latitude and longitude in the world, including: temperature, humidity, atmospheric pressure, weather conditions, wind, wind direction, etc.

> The spatial resolution is 1x1, 3x3 or 5x5 KM, depending on the region.

| Interface code          | Interface     | Class         |
| --------------------------- | ---- | ------------------ |
| grid3d | 3 Days Forecast by Grid| GridDailyResponse |
| grid7d | 7 Days Forecast by Grid| GridDailyResponse |


## Request Parameters

**GridWeatherParameter**

| Name   | Type | Required | Example |
| -------- | -------- | ---- | ------ |
| longitude | double | true | 116.41 |
| latitude | double | true | 39.92 |
| lang | Lang | false | ZH_HANS |
| unit | Unit | false | METRIC |

## Sample Code

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

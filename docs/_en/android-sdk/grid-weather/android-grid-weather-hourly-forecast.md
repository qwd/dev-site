---
title: Grid Weather Hourly Forecast
tag: [guide, android, grid-weather, hourly]
ref: 3-sdk-android-grid-weather-hourly-forecast
---

Get hourly weather forecasts at any latitude and longitude in the world, including: temperature, humidity, atmospheric pressure, weather conditions, wind direction, etc.

> The spatial resolution is 1x1, 3x3 or 5x5 KM, depending on the region.

| Interface code          | Interface     | Class         |
| --------------------------- | ---- | ------------------ |
| grid24h | Hourly Forecast by Grid (24hrs)）| GridHourlyResponse |
| grid72h | Hourly Forecast by Grid (72hrs)| GridHourlyResponse |


### Request Parameters  

**GridWeatherParameter**

| Name   | Type | Required | Example |
| -------- | -------- | ---- | ------ |
| longitude | double | true | 116.41 |
| latitude | double | true | 39.92 |
| lang | Lang | false | ZH_HANS |
| unit | Unit | false | METRIC |

### Sample Code

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

### Response

**GridHourlyResponse**

{% include api-response.html group="weather" type="ghourly" prefix="hourly"  %}


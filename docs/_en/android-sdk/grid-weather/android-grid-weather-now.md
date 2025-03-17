---
title: Grid Weather Real-time 
tag: [guide, android, grid-weather, now]
ref: 1-sdk-android-grid-weather-now
---

Get high-precision real-time weather at any latitude and longitude around the world.

> The spatial resolution is 1x1, 3x3 or 5x5 KM, depending on the region.

| Interface Code          | Interface     | Class         |
| --------------------------- | ---- | ------------------ |
| gridNow | Grid Weather Real-time | GridNowResponse |


## Parameters of GridWeatherParameter

| Name   | Type | Required | Example |
| -------- | -------- | ---- | ------ |
| longitude | double | true | 116.41 |
| latitude | double | true | 39.92 |
| lang | Lang | false | ZH_HANS |
| unit | Unit | false | METRIC |

## Reqeust 

```java
public void gridNow(GridWeatherParameter parameter, Callback<GridNowResponse> callback);
```

## Response

{% include api-snippet.html %}

{% include api-response.html group="weather" type="gnow" prefix="now"  %}

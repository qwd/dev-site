---
title: Air Quality Daily Forecast (new)
tag: [guide, android, air-v1, daily-v1]
ref: 1-sdk-android-air-daily-v1
---

Air quality (AQI) dailay forecasts, pollutants, and health advice for the next 3 days.

We recommend to read [Air Quality Info](/en/docs/resource/air-info/) to learn about the AQIs, pollutants, supported regions and more.

| Interface Code | Interface                         | Class       |
| --------------- | ---------------------------- | ------------ |
| airDaily | Air quality daily forecast (new)    | AirV1DailyResponse |

### Parameters of AirV1Parameter

| Name   | Type | Required | Example |
| -------- | -------- | ---- | ------ |
| longitude | double | true | 116.41 |
| latitude | double | true | 39.92 |
| lang | Lang | false | ZH_HANS |

### Reqeust Example

```java
public void airDaily(AirV1Parameter parameter, Callback<AirV1DailyResponse> callback);
```

### Response

{% include api-response.html group="air" type="daily-v1" prefix="days" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag"  %}

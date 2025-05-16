---
title: Air Quality Daily Forecast
tag: [guide, android, aq, daily-v1]
ref: 1-sdk-android-air-daily-v1
---

Air quality (AQI) dailay forecasts, pollutants, and health advice for the next 3 days.

We recommend to read [Air Quality Info](/en/docs/resource/air-info/) to learn about the AQIs, pollutants, supported regions and more.

| Interface code | Interface                         | Class       |
| --------------- | ---------------------------- | ------------ |
| airDaily | Air quality daily forecast    | AirV1DailyResponse |

## Parameters 

**AirV1Parameter**

{% include params.html p="p-lat p-lon" %}

{% include params.html p="lang-def" %}

## Sample code

```java
public void airDaily(AirV1Parameter parameter, Callback<AirV1DailyResponse> callback);
```

## Response

**AirV1DailyResponse**

{% include api-response.html group="air" type="daily-v1" prefix="days" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag"  %}

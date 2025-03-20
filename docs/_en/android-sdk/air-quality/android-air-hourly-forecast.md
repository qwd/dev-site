---
title: Air Quality Hourly Forecast (new)
tag: [guide, android, aq-v1, hourly-v1]
ref: 1-sdk-android-air-hourly-v1
---

The air quality hourly forecast API provides air quality forecast data for each hour of the next 24 hours, including AQI, pollutants concentration, sub-indexes, health effects and advice.

We recommend to read [Air Quality Info](/en/docs/resource/air-info/) to learn about the AQIs, pollutants, supported regions and more.

| Interface code | Interface                 | Class       |
| --------------- | ---------------------------- | ------------ |
| airHourly | Air quality hourly forecast (new)    | AirV1HourlyResponse |

## Request Parameters 

**AirV1Parameter**

{% include params.html p="p-lat p-lon" %}

{% include params.html p="lang-def" %}

## Sample Code

```java
public void airHourly(AirV1Parameter parameter, Callback<AirV1HourlyResponse> callback);
```

## Response

**AirV1HourlyResponse**

{% include api-response.html group="air" type="hourly-v1" prefix="hours" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag"   %}


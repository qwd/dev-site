---
title: Current Air Quality (new)
tag: [guide, android, aq-v1, now-v1]
ref: 1-sdk-android-air-now-v1
---

The current air quality (AQI) API provides real-time air quality data for specified locations, data resolution is 1x1 km.

- AQI, category, color and primary pollutant based on local standards for each country or region
- Generic QWeather AQI
- Pollutant concentration values and their sub-index.
- Health effects and advice
- Associated monitoring station information

We recommend to read [Air Quality Info](/en/docs/resource/air-info/) to learn about the AQIs, pollutants, supported regions and more.

| Interface code | Interface         | Class       |
| --------------- | ---------------- | ------------ |
| airCurrent | Current Air Quality (new)  | AirV1CurrentResponse |

### Request Parameters 

**AirV1Parameter**

{% include params.html p="p-lat p-lon" %}

{% include params.html p="lang-def" %}

### Sample Code

```Java
public void airCurrent(AirV1Parameter parameter, Callback<AirV1CurrentResponse> callback);
```

### Response

**AirV1CurrentResponse**

{% include api-response.html group="air" type="now-v1" prefix="nil" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag"  %}

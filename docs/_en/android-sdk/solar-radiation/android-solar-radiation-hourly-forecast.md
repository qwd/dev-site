---
title: Solar Radiation Hourly Forecast
tag: [guide, android, solar-radiation, hourly]
ref: 1-sdk-android-solar-radiation-hourly-forecast
---

Get the net solar radiation, diffuse solar radiation and direct solar radiation for any coordinate position in the world.

| Interface code            | Interface     | Class             |
| --------------------------- | ---- | ------------------ |
| solarRadiation24h | Hourly Forecast (24hrs)| SolarRadiationResponse |
| solarRadiation72h | Hourly Forecast (72hrs)| SolarRadiationResponse |

> **Note:** Hourly Forecast (72hrs) may be missing the last few hours data under some conditions.
{:.bqwarning}

## Request Parameters

**SolarRadiationParameter**

| Name   | Type | Required | Example |
| -------- | -------- | ---- | ------ |
| longitude | double | true | 116.41 |
| latitude | double | true | 39.92 |

## Sample Code

```java
/*
* Hourly Forecast (24hrs)
*/
public void solarRadiation24h(SolarRadiationParameter parameter, Callback<SolarRadiationResponse> callback);

/*
* Hourly Forecast (72hrs)
*/
public void solarRadiation72h(SolarRadiationParameter parameter, Callback<SolarRadiationResponse> callback);

```

## Response

**SolarRadiationResponse**

> This data is refers to the downward solar short-wave radiation at the surface, and unit in W/m<sup>2</sup>

{% include api-response.html group="radiation" type="radiation" prefix="radiation" fxlink=0 %}

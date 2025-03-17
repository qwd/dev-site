---
title: Monitoring Station Data (new)
tag: [guide, android, aq-v1, station-v1]
ref: 1-sdk-android-air-station-v1
---

Monitoring Station Data API provides pollutant concentration values from air quality monitoring stations in each country or region.

> **Warning:** Monitoring station data is for reference only, it may be delayed, incorrect or unavailable due to various reasons such as failure, removal, maintenance or local laws and regulations.
{:.bqdanger}

| Interface code | Interface         | Class       |
| --------------- | ---------------- | ------------ |
| airStation | Monitoring Station Data (new)  | AirV1StationResponse |


## Parameters of AirV1StationParameter

{% include params.html p="p-location-id-aqsta" %}

{% include params.html p="lang-def" %}

## Request Example

```java
public void airStation(AirV1StationParameter parameter, Callback<AirV1StationResponse> callback);
```

## Response

{% include api-snippet.html snippet="aq-v1-station-v1" %}

{% include api-response.html group="air" type="station-v1" prefix="nil" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag sources"  %}
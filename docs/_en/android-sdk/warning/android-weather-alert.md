---
title: Weather Alert
tag: [guide, android, warning, current]
ref: 1-sdk-android-weather-alert
---

Get officially issued real-time severe weather alert data around the world.

> **Hint:** For the implementation of weather alert, see [Resource - Alert Info](/en/docs/resource/warning-info/) in advance.

| Interface code     | Interface    | Class           |
| -------------------- | -------- | ---------------- |
| weatherAlertCurrent | Weather Alert | WeatherAlertCurrentResponse |

## Parameters

**WeatherAlertCurrentParameter**

| Name   | Type | Required | Example |
| -------- | -------- | ---- | ------ |
| longitude | Double | true | 116.41 |
| latitude | Double | true | 39.92 |
| localTime | Bool | true | true |
| lang | Lang | false | ZH_HANS |

## Sample code

```java
public void weatherAlertCurrent(WeatherAlertCurrentParameter parameter, Callback<WeatherAlertCurrentResponse> callback)
```

## Response

**WeatherAlertCurrentResponse**

{% include api-response.html group="warning" type="alert-v1" prefix="alerts" fxlink="0" refer="0" update="0" statusCode="0" metadata="tag zeroResult attributions" %}


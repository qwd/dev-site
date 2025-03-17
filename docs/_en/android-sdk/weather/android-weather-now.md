---
title: Real-time Weather
tag: [guide, android, weather, now]
ref: 1-sdk-android-weather-now
---

Get real-time weather data for 200,000+ cities around the world, including temperature, wind, humidity, pressure, precipitation, visibility, etc.


| Interface Code| Interface  | Class |
| ------------ | ------------- | -------------- |
| weatherNow | Real-time weather  | WeatherNowResponse |

### Parameter

{% include params.html p="location-def lang-def unit-def" %}

### Sample Code

```java
public void weatherNow(WeatherParameter parameter, Callback<WeatherNowResponse> callback);
```

### Properties

Properties of WeatherNowResponse

| Property | Description | Example |
| -------- | -------------------------- | ----------- |
| getCode | See [Status Code](/en/docs/resource/status-code/) | 200 |
| getUpdateTime | [Last updated time](/en/docs/resource/glossary/#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | https://www.qweather.com/weather/beijing-101010100.html |
| getNow | Real-time weather | WeatherNow |
| getRefer | Reference data, includes data source, statements and license | Refer |

**Refer**

| Property | Description | Type | Example |
| -------- | ----------- | ---- | ------- |
| getSources | Data source and other statements | List&lt;String&gt; | QWeather |
| getLicense | Data license |  List&lt;String&gt;  | QWeather Developers License |

**WeatherNow Live Weather**

| Property | Description | Example |
| ------------ | -------------------------- | ---------------- |
| getObsTime | Observation time | 2013-12-30T13:14+08:00 |
| getFeelsLike | Real feels like temperature | 23 |
| getTemp | Temperature | 21 |
| getIcon | [Icon code](/en/docs/resource/icons/) for weather conditions. See also [QWeather Icons](https://icons.qweather.com/en/) | 100 |
| getText | Weather conditions | Sunny |
| getWind360 | [Wind direction](/en/docs/resource/wind-info/#wind-direction) in azimuth degree | 305 |
| getWindDir | [Wind direction](/en/docs/resource/wind-info/#wind-direction) | NW |
| getWindScale | [Wind scale](/en/docs/resource/wind-info/#wind-scale) | 3-4 |
| getWindSpeed ​​| [Wind speed](/en/docs/resource/wind-info/#wind-speed), km/h | 15 |
| getHumidity | Relative humidity in percent | 40 |
| getPrecip | Precipitation | 0 |
| getPressure | Atmospheric pressure | 1020 |
| getVis | Visibility | 10 |
| getCloud | Cloud cover in percent | 23 |
| getDew | Dew point temperature | -1 |

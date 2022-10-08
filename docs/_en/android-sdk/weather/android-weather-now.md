---
title: Real-time Weather
tag: [guide, android, weather, now]
ref: 1-sdk-android-weather-now
---

Get real-time weather data for 200,000+ cities around the world, including temperature, wind, humidity, pressure, precipitation, visibility, etc.


| Interface Code| Interface  | Class |
| ------------ | ------------- | -------------- |
| getWeatherNow| Real-time weather  | WeatherNowBean |

### Parameter

{% include params.html p="location-android lang-sdk unit-sdk" %}

### Sample Code

```java
QWeather.getWeatherNow(Context context, String location, Lang lang, Unit unit,QWeather.OnResultWeatherNowListener listener);

QWeather.getWeatherNow(Context context, String location, QWeather.OnResultWeatherNowListener listener);
```

### Properties

Properties of WeatherNowBean

| Property | Description | Example |
| -------- | -------------------------- | ----------- |
| getCode | Status code, please refer to [Status Code](/en/docs/resource/status-code/) | Code |
| getNow | Real-tiem weather | NowBaseBean |
| getRefer | Reference data, includes data source, statements and license | Refer |
| getBasic | Basic Information | Basic |

**Refer**

| Property | Description | Example |
| -------------- | ------------ | ------------------ |
| getSourcesList | Data source and other statements | qweather.com |
| getLicenseList | Data license | commercial license |

**Basic**

| Property | Description | Example |
| ------------- | ------------------------ | ---------- ---------- |
| getUpdateTime | [Last updated time](/en/docs/resource/glossary/#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | http://hfx.link/ae45 |

**NowBaseBean Live Weather**

| Property | Description | Example |
| ------------ | -------------------------- | --------- ------- |
| getObsTime | Observation time | 2013-12-30T13:14+08:00 |
| getFeelsLike | Real feels like temperature | 23 |
| getTemp | Temperature | 21 |
| getIcon | Icon code of weather conditions, free to download [weather icons](/en/docs/resource/icons/) | 100 |
| getText | Weather conditions | Sunny |
| getWind360 | Wind direction in azimuth degree | 305 |
| getWindDir | Wind direction | NW |
| getWindScale | Wind scale | 3-4 |
| getWindSpeed ​​| Wind speed, km/h | 15 |
| getHumidity | Relative humidity in percent | 40 |
| getPrecip | Precipitation | 0 |
| getPressure | Atmospheric pressure | 1020 |
| getVis | Visibility | 10 |
| getCloud | Cloud cover in percent | 23 |
| getDew | Dew point temperature | 23 |

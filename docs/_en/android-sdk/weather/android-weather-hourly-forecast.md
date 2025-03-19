---
title: Weather Hourly Forecast
tag: [guide, android, weather, hourly]
ref: 3-sdk-android-weather-hourly-forecast
---

Get hourly weather forecasts for cities around the world for the next 24-168 hours.

| Interface code| Interface  | Class |
| ------------------- | -------------- | ----------------- |
| weather24h| 24-hours forecast  | WeatherHourlyResponse |
| weather72h| 72-hours forecast  | WeatherHourlyResponse |
| weather168h| 168-hours forecast  | WeatherHourlyResponse |

### Request Parameters

**WeatherParameter**

{% include params.html p="location-def lang-def unit-def" %}

### Sample Code

```java
WeatherParameter parameter = new WeatherParameter("101010100");

/**
 * 24 hours forecast
 */
public void weather24h(WeatherParameter parameter, Callback<WeatherHourlyResponse> callback);

/**
 * 72 hours forecast
 */
public void weather72h(WeatherParameter parameter, Callback<WeatherHourlyResponse> callback);

/**
 * 168 hours forecast
 */
public void weather168h(WeatherParameter parameter, Callback<WeatherHourlyResponse> callback);

```

### Response

**WeatherHourlyResponse**

| Property | Description | Example |
| --------- | -------------------------- | ---------------------- |
| getCode | See [Status Code](/en/docs/resource/status-code/) | 200 |
| getUpdateTime | [Last updated time](/en/docs/resource/glossary/#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | https://www.qweather.com/weather/beijing-101010100.html |
| getHourly | WeatherHourly  Hourly Weather | List&lt;WeatherHourly&gt; |
| getRefer | Reference data, includes data source, statements and license | Refer |

**Refer**

| Property | Description | Type | Example |
| -------- | ----------- | ---- | ------- |
| getSources | Data source and other statements | List&lt;String&gt; | QWeather |
| getLicense | Data license |  List&lt;String&gt;  | QWeather Developers License |

**WeatherHourly**

| Property | Description | Example |
| ------------ | ---------------------------------------- | ---------------- |
| getFxTime | Forecast time | 2013-12-30T13:00+08:00 |
| getTemp | Temperature | 2 |
| getIcon | [Icon code](/en/docs/resource/icons/) for weather conditions. See also [QWeather Icons](https://icons.qweather.com/en/) | 101 |
| getText |  Weather conditions | Cloudy |
| getWind360 | [Wind direction](/en/docs/resource/wind-info/#wind-direction) in azimuth degree | 290 |
| getWindDir | [Wind direction](/en/docs/resource/wind-info/#wind-direction) | NW |
| getWindScale | [Wind scale](/en/docs/resource/wind-info/#wind-scale) | 3-4 |
| getWindSpeed ​​| [Wind speed](/en/docs/resource/wind-info/#wind-speed), km/h | 15 |
| getHumidity | Relative humidity in percent | 30 |
| getPop | Probability of precipitation, in percent, **may be null** | 5 |
| getPrecip | Precipitation | 1.2 |
| getPressure | Atmospheric pressure | 1030 |
| getCloud | Cloud cover in percent | 15 |
| getDew | Dew point temperature | 5 |


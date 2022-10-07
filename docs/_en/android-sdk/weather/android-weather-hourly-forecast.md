---
title: Weather Hourly Forecast
tag: [guide, android, weather, hourly]
ref: 3-sdk-android-weather-hourly-forecast
---

Get hourly weather forecasts for cities around the world for the next 24-168 hours.

| Interface Code| Interface  | Class |
| ------------------- | -------------- | -------------- --- |
| getWeather24H| 24-hour forecast weather data  | WeatherHourlyBean |
| getWeather72H| 72-hour forecast weather data  | WeatherHourlyBean |
| getWeather168H| 168-hour forecast weather data  | WeatherHourlyBean |

### Parameter

{% include params.html p="location-android lang-sdk unit-sdk" %}

### Sample Code

```java
/**
 *  24-hour forecast data
 */
QWeather.getWeather24Hourly(Context context, String location, Lang lang, Unit unit,QWeather.OnResultWeatherHourlyListener listener);

QWeather.getWeather24Hourly(Context context, String location, QWeather.OnResultWeatherHourlyListener listener);

/**
 *  72-hour forecast data
 */
QWeather.getWeather72Hourly(Context context, String location, Lang lang, Unit unit,QWeather.OnResultWeatherHourlyListener listener);

QWeather.getWeather72Hourly(Context context, String location, QWeather.OnResultWeatherHourlyListener listener);

/**
 *  168 hours forecast data
 */
QWeather.getWeather168Hourly(Context context, String location, Lang lang, Unit unit,QWeather.OnResultWeatherHourlyListener listener);

QWeather.getWeather168Hourly(Context context, String location, QWeather.OnResultWeatherHourlyListener listener);

```

### Properties

Properties of WeatherHourlyBean

| Property | Description | Example |
| --------- | -------------------------- | ------------ ---------- |
| getCode | Status code, please refer to [Status Code](/en/docs/resource/status-code/) | Code |
| getHourly | HourlyBean Hourly Weather | List&lt;HourlyBean&gt; |
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
| getUpdateTime | [Last updated time](/en/docs/resource/glossary#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | http://hfx.link/ae45 |

**HourlyBean Hourly Weather**

| Property | Description | Example |
| ------------ | ------------------------------------ ---- | ---------------- |
| getFxTime | Forecast time | 2013-12-30T13:00+08:00 |
| getTemp | Temperature | 2 |
| getIcon | Icon code of weather conditions, free to download [weather icons](/en/docs/resource/icons/) | 101 |
| getText |  Weather conditions | Cloudy |
| getWind360 | Wind direction in azimuth degree | 290 |
| getWindDir | Wind direction | NW |
| getWindScale | Wind scale | 3-4 |
| getWindSpeed ​​| Wind speed, km/h | 15 |
| getHumidity | Relative humidity in percent | 30 |
| getPrecip | Precipitation | 1.2 |
| getPop | Probability of precipitation, in percent, **may be null** | 5 |
| getPressure | Atmospheric pressure | 1030 |
| getDew | Dew point temperature | 5 |
| getCloud | Cloud cover in percent | 15 |


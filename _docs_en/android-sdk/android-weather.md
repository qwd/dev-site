---
title: Weather
tag: android-sdk
version: v4
description: QWeather Android SDK support global weather real-time and forecast data in 150,000 cities around the world, including temperature, wind, relative humidity, atmospheric pressure, precipitation, visibility, dew point, cloud cover and other data.
ref: 3-sdk-android-weather
---

Get global weather real-time and forecast data in 150,000 cities around the world, including temperature, wind, relative humidity, atmospheric pressure, precipitation, visibility, dew point, cloud cover and other data.

## Real-time Weather

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
| getUpdateTime | [Last updated time](/en/docs/resource/glossary#update-time) | 2017-10-25T04:34+08:00 |
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

## Daily Forecast

| Interface Code| Interface  | Class |
| ---------------- | ------------- | ---------------- |
| getWeather3D| 3-day forecast weather data  | WeatherDailyBean |
| getWeather7D| 7-day forecast weather data  | WeatherDailyBean |
| getWeather10D| 10-day forecast weather data  | WeatherDailyBean |
| getWeather15D| 15-day forecast weather data  | WeatherDailyBean |

### Parameter

{% include params.html p="location-android lang-sdk unit-sdk" %}

### Sample Code

```java
/**
 * Get 3-day forecast data
 */
QWeather.getWeather3D(Context context, String location, Lang lang, Unit unit,QWeather.OnResultWeatherDailyListener listener);

QWeather.getWeather3D(Context context, String location, QWeather.OnResultWeatherDailyListener listener);

/**
 * Get 7-day forecast data
 */
QWeather.getWeather7D(Context context, String location, Lang lang, Unit unit,QWeather.OnResultWeatherDailyListener listener);

QWeather.getWeather7D(Context context, String location, QWeather.OnResultWeatherDailyListener listener);

/**
 * Get 10-day forecast data
 */
QWeather.getWeather10D(Context context, String location, Lang lang, Unit unit,QWeather.OnResultWeatherDailyListener listener);

QWeather.getWeather10D(Context context, String location, QWeather.OnResultWeatherDailyListener listener);

/**
 * Get 15-day forecast data
 */
QWeather.getWeather15D(Context context, String location, Lang lang, Unit unit,QWeather.OnResultWeatherDailyListener listener);

QWeather.getWeather15D(Context context, String location, QWeather.OnResultWeatherDailyListener listener);
```

### Properties

Properties of WeatherDailyBean

| Property | Description | Example |
| -------- | -------------------------- | ------------- -------- |
| getCode | Status code, please refer to [Status Code](/en/docs/resource/status-code/) | Code |
| getDaily | Daily forecast weather | List&lt;DailyBean&gt; |
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

**DailyBean Weather Forecast**

| Property | Description | Example |
| ----------------- | ------------------- | ---------- |
| getFxDate | Forecast Date | 2013-12-30 |
| getSunrise | Sunrise Time | 07:36 |
| getSunset | Sunset Time | 16:58 |
| getMoonRise | Moonrise time | 04:47 |
| getMoonSet | Moonset time | 14:59 |
| getMoonPhase | Moon Phase Name | Full Moon |
| getTempMax | The highest temperature of the day | 4 |
| getTempMin | The lowest temperature of the day | -5 |
| getIconDay | Icon code for daytime weather conditions, free to download [weather icons](/en/docs/resource/icons/) | 100 |
| getIconNight | Icon codes for night weather conditions, free to download [weather icons](/en/docs/resource/icons/) | 100 |
| getTextDay | Weather conditions for daytime | Sunny |
| getTextNight | Weather conditions for night | Sunny |
| getWind360Day | Daytime wind direction in azimuth degree | 310 |
| getWind360Night | Nightly wind direction in azimuth degree | 310 |
| getWindDirDay | Daytime wind direction | NW wind |
| getWindDirNight | Nightly wind direction | NW wind |
| getWindScaleDay | Daytime wind scale | 1-2 |
| getWindScaleNight | Nightly wind scale | 1-2 |
| getWindSpeedDay | Daytime wind speed, km/h | 14 |
| getWindSpeedNight | Nightly wind speed, km/h | 14 |
| getHumidity | Relative humidity in percent | 37 |
| getPrecip | Precipitation | 0 |
| getPressure | Atmospheric pressure | 1018 |
| getCloud | Cloud cover in percent | 23 |
| getUvIndex | UV index | 3 |
| getVis | Visibility | 10 |

## Hourly Weather Forecast

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

## Minutely Precipitation

| Interface Code| Interface  | Class |
| ---------- | ----------- | ------------ |
| getMinutely| Minutely Precipitation  | MinutelyBean |

### Parameter

{% include params.html p="location-coord lang-zhen-sdk" %}

### Sample Code

```java
QWeather.getMinuteLy(Context context, String location,QWeather.OnResultMinutelyListener listener);

QWeather.getMinuteLy(Context context, String location, Lang lang, QWeather.OnResultMinutelyListener listener);
```

### Properties

Properties of MinutelyBean

| Property | Description | Example |
| --------------- | -------------------------- | ------ -------------- |
| getCode | Status code, please refer to [Status Code](/en/docs/resource/status-code/) | Code |
| getSummary | Precipitation description | No precipitation in the next 2 hours |
| getMinutelyList | Minutely data | List&lt;Minutely&gt; |
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

**Minutely precipitation in the next two hours and 5 minutes**

| Property | Description | Example |
| --------- | -------------------------- | ------------ ---- |
| getFxTime | Forecast time | 2013-12-30T20:35+08:00 |
| getPrecip | Precipitation | 10 |
| getType | Type of precipitation <br />`rain`<br />`snow` | rain |

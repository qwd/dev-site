---
title: Weather Daily Forecast
tag: [guide, android, weather, daily]
ref: 2-sdk-android-weather-daily-forecast
---

Get weather daily forecasts for the next 3-30 days for cities around the world.

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
| getUpdateTime | [Last updated time](/en/docs/resource/glossary/#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | http://hfx.link/ae45 |

**DailyBean Weather Forecast**

| Property | Description | Example |
| ----------------- | ------------------- | ---------- |
| getFxDate | Forecast Date | 2013-12-30 |
| getSunrise | [Sunrise time](/en/docs/resource/sun-moon-info/#sunrise-and-sunset). **Maybe null in high latitude area** | 07:36 |
| getSunset | [Sunset time](/en/docs/resource/sun-moon-info/#sunrise-and-sunset). **Maybe null in high latitude area** | 16:58 |
| getMoonRise | [Moonrise time](/en/docs/resource/sun-moon-info/#moonrise-and-moonset) of current day. **Maybe null** | 04:47 |
| getMoonSet | [Moonset time](/en/docs/resource/sun-moon-info/#moonrise-and-moonset) of current day. **Maybe null** | 14:59 |
| getMoonPhase | Moon Phase Name | Full Moon |
| getMoonPhaseIcon      | Icon code for moon phase, free to download [QWeather Icons](/en/docs/resource/icons/)            | 804    |
| getTempMax | The highest temperature of the day | 4 |
| getTempMin | The lowest temperature of the day | -5 |
| getIconDay | Icon code for daytime weather conditions, free to download [weather icons](/en/docs/resource/icons/) | 100 |
| getIconNight | Icon codes for night weather conditions, free to download [weather icons](/en/docs/resource/icons/) | 100 |
| getTextDay | Weather conditions for daytime | Sunny |
| getTextNight | Weather conditions for night | Sunny |
| getWind360Day | Daytime [wind direction](/en/docs/resource/wind-info/#wind-direction) in azimuth degree | 310 |
| getWind360Night | Nightly [wind direction](/en/docs/resource/wind-info/#wind-direction) in azimuth degree | 310 |
| getWindDirDay | Daytime [wind direction](/en/docs/resource/wind-info/#wind-direction) | NW wind |
| getWindDirNight | Nightly [wind direction](/en/docs/resource/wind-info/#wind-direction) | NW wind |
| getWindScaleDay | Daytime [wind scale](/en/docs/resource/wind-info/#wind-scale) | 1-2 |
| getWindScaleNight | Nightly [wind scale](/en/docs/resource/wind-info/#wind-scale) | 1-2 |
| getWindSpeedDay | Daytime [wind speed](/en/docs/resource/wind-info/#wind-speed), km/h | 14 |
| getWindSpeedNight | Nightly [wind speed](/en/docs/resource/wind-info/#wind-speed), km/h | 14 |
| getHumidity | Relative humidity in percent | 37 |
| getPrecip | Precipitation | 0 |
| getPressure | Atmospheric pressure | 1018 |
| getCloud | Cloud cover in percent | 23 |
| getUvIndex | UV index | 3 |
| getVis | Visibility | 10 |

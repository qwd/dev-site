---
title: Weather Daily Forecast
tag: [guide, android, weather, daily]
ref: 2-sdk-android-weather-daily-forecast
---

Get weather daily forecasts for the next 3-30 days for cities around the world.

| Interface code| Interface  | Class |
| ---------------- | ------------- | ---------------- |
| weather3d| 3-days forecast | WeatherDailyResponse |
| weather7d| 7-days forecast | WeatherDailyResponse |
| weather10d| 10-days forecast  | WeatherDailyResponse |
| weather15d| 15-days forecast  | WeatherDailyResponse |
| weather30d| 30-days forecast  | WeatherDailyResponse |

## Parameters

**WeatherParameter**

{% include params.html p="location-def lang-def unit-def" %}

## Sample code

```java
WeatherParameter parameter = new WeatherParameter("101010100");
/**
 * Get 3-days forecast
 */
public void weather3d(WeatherParameter parameter, Callback<WeatherDailyResponse> callback);

/**
 * Get 7-days forecast
 */
public void weather7d(WeatherParameter parameter, Callback<WeatherDailyResponse> callback);

/**
 * Get 10-days forecast
 */
public void weather10d(WeatherParameter parameter, Callback<WeatherDailyResponse> callback);

/**
 * Get 15-days forecast
 */
public void weather15d(WeatherParameter parameter, Callback<WeatherDailyResponse> callback);
/**
 * Get 30-days forecast
 */
public void weather30d(WeatherParameter parameter, Callback<WeatherDailyResponse> callback);
```

## Response 

**WeatherDailyResponse**

{% include api-response.html group="weather" type="daily" prefix="daily" %}

<!-- | Property | Description | Example |
| -------- | -------------------------- | --------------------- |
| getCode | See [Status Code](/en/docs/resource/status-code/) | 200 |
| getUpdateTime | [Last updated time](/en/docs/resource/glossary/#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | https://www.qweather.com/weather/beijing-101010100.html |
| getDaily | Daily forecast weather | List&lt;WeatherDaily&gt; |
| getRefer | Reference data, includes data source, statements and license | Refer |

**Refer**

| Property | Description | Type | Example |
| -------- | ----------- | ---- | ------- |
| getSources | Data source and other statements | List&lt;String&gt; | QWeather |
| getLicense | Data license |  List&lt;String&gt;  | QWeather Developers License |

**WeatherDaily**

| Property | Description | Example |
| ----------------- | ------------------- | ---------- |
| getFxDate | Forecast Date | 2013-12-30 |
| getSunrise | [Sunrise time](/en/docs/resource/sun-moon-info/#sunrise-and-sunset). **Maybe null in high latitude area** | 07:36 |
| getSunset | [Sunset time](/en/docs/resource/sun-moon-info/#sunrise-and-sunset). **Maybe null in high latitude area** | 16:58 |
| getMoonRise | [Moonrise time](/en/docs/resource/sun-moon-info/#moonrise-and-moonset) of current day. **Maybe null** | 04:47 |
| getMoonSet | [Moonset time](/en/docs/resource/sun-moon-info/#moonrise-and-moonset) of current day. **Maybe null** | 14:59 |
| getMoonPhase | Moon Phase Name | Full Moon |
| getMoonPhaseIcon      | [Icon code](/en/docs/resource/icons/) for moon phase. See also [QWeather Icons](https://icons.qweather.com/en/)  | 804    |
| getTempMax | The highest temperature of the day | 4 |
| getTempMin | The lowest temperature of the day | -5 |
| getIconDay | [Icon code](/en/docs/resource/icons/) for daytime weather conditions. See also [QWeather Icons](https://icons.qweather.com/en/)| 100 |
| getIconNight | [Icon code](/en/docs/resource/icons/) for night weather conditions. See also [QWeather Icons](https://icons.qweather.com/en/) | 150 |
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
| getPrecip | Precipitation | 0.0 |
| getPressure | Atmospheric pressure | 1018 |
| getCloud | Cloud cover in percent | 23 |
| getUvIndex | UV index | 3 |
| getVis | Visibility | 10 | -->

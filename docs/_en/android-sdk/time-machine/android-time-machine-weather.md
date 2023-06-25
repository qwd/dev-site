---
title: Time Machine for Weather
tag: [guide, android, time-machine, weather]
ref: 1-sdk-android-historical-weather
---

Get the last 10 days of weather history data.

> Let's say, today is December 30, you can get historical data from Dec. 20 to Dec. 29.

> QWeather also provides historical reanalysis weather data from 2000 to present. If you need long time historical weather data data, please provide the following information to <sales@qweather.com>.
> 
> * Company name
> * Contact information
> * City or coordinates
> * Date range


| Interface Code| Interface  | Class |
| ------------ | -------------------- | --------------- --- |
| getWeatherHistorical| Historical weather data  | HistoryWeatherBean |

### Parameter

{% include params.html p="location-id-android date10back lang-sdk unit-sdk" %}

### Sample Code

```java
QWeather.getHistoricalWeather(Context context, String location, String date, QWeather.OnResultWeatherHistoricalBeanListener listener);

QWeather.getHistoricalWeather(Context context, String location, String date, Lang lang, Unit unit,QWeather.OnResultWeatherHistoricalBeanListener listener)
```

### Properties

Properties of HistoryWeatherBean

| Property | Description | Example |
| -------------- | -------------------------- | ---------------------- |
| getCode | See [Status Code](/en/docs/resource/status-code/) | 200 |
| getDailyBean | Overview of the daily forecast | DailyBean |
| getHourlyBeans | Hourly data of the day | List&lt;HourlyBean&gt; |
| getRefer | Reference data, includes data source, statements and license | Refer |
| getBasic | Basic Information | Basic |

**Refer**

| Property | Description | Example |
| -------------- | ------------ | ------------------ |
| getSourcesList | Data source and other statements | QWeather |
| getLicenseList | Data license | QWeather Developers License |

**Basic**

| Property | Description | Example |
| ------------- | ------------------------ | -------------------- |
| getUpdateTime | [Last updated time](/en/docs/resource/glossary/#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | https://www.qweather.com/historical/beijing-101010100.html |

**DailyBean**

| Property | Description | Example |
| ------------ | -------- | ---------- |
| getDate | Forecast date | 2013-12-30 |
| getSunrise | [Sunrise time](/en/docs/resource/sun-moon-info/#sunrise-and-sunset). **Maybe null in high latitude area** | 07:36 |
| getSunset | [Sunset time](/en/docs/resource/sun-moon-info/#sunrise-and-sunset). **Maybe null in high latitude area** | 16:58 |
| getMoonRise | [Moonrise time](/en/docs/resource/sun-moon-info/#moonrise-and-moonset) of current day. **Maybe null** | 04:47 |
| getMoonSet | [Moonset time](/en/docs/resource/sun-moon-info/#moonrise-and-moonset) of current day. **Maybe null** | 14:59 |
| getMoonPhase | Moon Phase | Full Moon |
| getTempMax | The highest temperature of the day | 4 |
| getTempMin | The lowest temperature of the day | -5 |
| getHumidity | Relative humidity, in percent | 37 |
| getPrecip | Precipitation | 0 |
| getPressure | Atmospheric pressure | 1018 |

**HourlyBean**

| Property | Description | Example |
| ------------ | ------------------------------------- | ---------------- |
| getTime | Historical weather time of the day | 2013-12-30T13:00+08:00 |
| getTemp | Temperature | 2 |
| getIcon | [Icon code](/en/docs/resource/icons/) for weather conditions. See also [QWeather Icons](https://icons.qweather.com/en/) | 101 |
| getText |  Weather conditions | Cloudy |
| getWind360 | [Wind direction](/en/docs/resource/wind-info/#wind-direction) in azimuth degree | 290 |
| getWindDir | [Wind direction](/en/docs/resource/wind-info/#wind-direction) | NW |
| getWindScale | [Wind scale](/en/docs/resource/wind-info/#wind-scale) | 3-4 |
| getWindSpeed ​​| [Wind speed](/en/docs/resource/wind-info/#wind-speed) ​​| 15 |
| getHumidity | Relative humidity in percent | 30 |
| getPressure | Atmospheric pressure | 1030 |
| getPrecip | Precipitation| 1.2 |

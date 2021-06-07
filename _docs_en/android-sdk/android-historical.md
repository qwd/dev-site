---
title: Historical
tag: android-sdk
version: v4
description: QWeather Android SDK supports historical weather and historical air quality AQI data from January 1, 2010 to present, The API supports query of historical data of the last 10 days, all historical data can be downloaded at one time, please contact us for details
ref: 7-sdk-android-historical
---

Get the last 10 days of weather and air quality data.

If you need a longer period of historical city data or grid historical data, please please [contact us](https://www.qweather.com/en/contact).

## Historical Weather

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
| getCode | Status code, please refer to [Status Code](/en/docs/start/status-code/) | Code |
| getDailyBean | Overview of the daily forecast | DailyBean |
| getHourlyBeans | Hourly data of the day | List&lt;HourlyBean&gt; |
| getRefer | Reference data, includes data source, statements and license | Refer |
| getBasic | Basic Information | Basic |

**Refer**

| Property | Description | Example |
| -------------- | ------------ | ------------------ |
| getSourcesList | Data source and other statements | qweather.com |
| getLicenseList | Data license | commercial license |

**Basic**

| Property | Description | Example |
| ------------- | ------------------------ | -------------------- |
| getUpdateTime | [Last updated time](/en/docs/start/glossary#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | http://hfx.link/ae45 |

**DailyBean**

| Property | Description | Example |
| ------------ | -------- | ---------- |
| getDate | Forecast date | 2013-12-30 |
| getSunrise | Sunrise time | 07:36 |
| getSunset | Sunset time | 16:58 |
| getMoonRise | Moonrise time | 04:47 |
| getMoonSet | Moonset time | 14:59 |
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
| getIcon | Icon code of weather conditions, free to download [weather icons](/en/docs/start/icons/) | 101 |
| getText |  Weather conditions | Cloudy |
| getWind360 | Wind direction in azimuth degree | 290 |
| getWindDir | Wind direction | NW |
| getWindScale | Wind scale | 3-4 |
| getWindSpeed ​​| Wind Speed ​​| 15 |
| getHumidity | Relative humidity in percent | 30 |
| getPressure | Atmospheric pressure | 1030 |
| getPrecip | Precipitation| 1.2 |

## Historical Air Quality

| Interface Code| Interface  | Class |
| ---------------- | ---------------- | ---------------- |
| getHistoricalAir| Historical air quality data  | HistoricalAirBean |

### Parameter

{% include params.html p="location-id date10back lang-sdk" %}

### Sample Code

```java
QWeather.getHistoricalAir(Context context, String location, String date, Q
Weather.OnResultAirHistoricalBeanListener listener);

QWeather.getHistoricalAir(Context context, String location, String date, Lang lang, Unit unit,QWeather.OnResultAirHistoricalBeanListener listener)
```

### Properties

Properties of HistoricalAirBean

| Property | Description | Example |
| ----------------- | -------------------------- | ------------------------- |
| getCode | Status code, please refer to [Status Code](/en/docs/start/status-code/) | Code |
| getRefer | Reference data, includes data source, statements and license | Refer |
| getBasic | Basic Information | Basic |
| getAirHourlyBeans | Hourly air quality data for the day | List&lt;AirHourlyBean&gt; |

**Refer**

| Property | Description | Example |
| -------------- | ------------ | ------------------ |
| getSourcesList | Data source and other statements | qweather.com |
| getLicenseList | Data license | commercial license |

**Basic**

| Property | Description | Example |
| ------------- | ------------------------ | -------------------- |
| getUpdateTime | [Last updated time](/en/docs/start/glossary#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | http://hfx.link/ae45 |

**AirHourlyBean historical day by hour air quality data**

| Property | Description | Example |
| ----------- | --------------------------------- | --------------- |
| getPubTime | The data release time from the data source. | 2017-03-20T12:30+08:00 |
| getAqi | Air quality index | 74 |
| getPrimary | The main pollutants per hour of the day. When the air quality category is `excellent`, return `NA` | pm25 |
| getLevel | Air quality index level  | 2 |
| getCategory | Air quality index category  | Good |
| getPm10 | PM10 | 78 |
| getPm2p5 | PM25 | 66 |
| getNo2 | Nitrogen dioxide | 40 |
| getSo2 | Sulfur dioxide | 30 |
| getCo | Carbon monoxide | 0.3 |
| getO3 | Ozone | 20 |

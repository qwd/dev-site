---
title: Air Quality Daily Forecast
tag: [guide, android, air, daily]
ref: 2-sdk-android-air-daily-forecast
---

Air Quality Daily Forecast API for Chinese cities, including AQI, air quality levels, primary pollutants.

| Interface | Interface Code | Class |
| ------------------- | -------- | ------------ |
| getAir5D| Air quality 5-day forecast  | AirDailyBean |

### Parameter

{% include params.html p="location-def lang-def" %}

### Sample Code

```java
QWeather.getAir5D(Context context, String location, Lang lang, QWeather.OnResultAirDailyListener listener)
```

### Properties

Properties of AirDailyBean

| Property | Description | Example |
| ----------- | -------------------------- | --------------- |
| getCode | See [Status Code](/en/docs/resource/status-code/) | 200 |
| getAirDaily | Air quality 5-day forecast | List&lt;DailyBean&gt; |
| getRefer | Reference data, includes data source, statements and license | Refer |
| getBasic | Basic Information | Basic |

**Refer**

| Property | Description | Example |
| -------------- | ------------ | ------------------ |
| getSourcesList | Data source and other statements | QWeather |
| getLicenseList | Data license | QWeather Developers License |

**Basic**

| Property | Description | Example |
| ------------- | ------------------------ | -------------- |
| getUpdateTime | [Last updated time](/en/docs/resource/glossary/#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | https://www.qweather.com/air/beijing-101010100.html |

**DailyBean**

| Property | Description | Example |
| ----------- | ----------------------------- | -------- |
| getFxDate | Forecast date, format yyyy-MM-dd | 2017-08-09 |
| getAqi | Air quality index | 74 |
| getPrimary | The main pollutant. When the air quality category is `excellent`, return `NA` | PM2.5 |
| getLevel | Real-time air quality index level  | 2 |
| getCategory | Real-time air quality index category  | Good |

## Air Quality Index Level

See [Air Quality Info](/en/docs/resource/air-info/).

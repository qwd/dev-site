---
title: Time Machine for Air Quality
tag: [guide, android, time-machine, air]
ref: 2-sdk-android-historical-air
---

Get the last 10 days of air quality history data.

> Let's say, today is December 30, you can get data from Dec. 20 to Dec. 29.



| Interface Code| Interface  | Class |
| ---------------- | ---------------- | ---------------- |
| getHistoricalAir| Historical air quality data  | HistoricalAirBean |

### Parameter

{% include params.html p="location-id date10back lang-sdk" %}

### Sample Code

```java
QWeather.getHistoricalAir(Context context, String location, String date, QWeather.OnResultAirHistoricalBeanListener listener);

QWeather.getHistoricalAir(Context context, String location, String date, Lang lang, Unit unit, QWeather.OnResultAirHistoricalBeanListener listener)
```

### Properties

Properties of HistoricalAirBean

| Property | Description | Example |
| ----------------- | -------------------------- | ------------------------- |
| getCode | Status code, please refer to [Status Code](/en/docs/resource/status-code/) | Code |
| getRefer | Reference data, includes data source, statements and license | Refer |
| getBasic | Basic Information | Basic |
| getAirHourlyBeans | Hourly air quality data for the day | List&lt;AirHourlyBean&gt; |

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

**AirHourlyBean historical day by hour air quality data**

| Property | Description | Example |
| ----------- | --------------------------------- | --------------- |
| getPubTime | The data release time from the data source. | 2017-03-20T12:30+08:00 |
| getAqi | Air quality index | 74 |
| getPrimary | The main pollutants per hour of the day. When the air quality category is `excellent`, return `NA` | pm25 |
| getLevel | Air quality index level  | 2 |
| getCategory | Air quality index category  | Good |
| getPm10 | PM10 | 78 |
| getPm2p5 | PM2.5 | 66 |
| getNo2 | Nitrogen dioxide | 40 |
| getSo2 | Sulfur dioxide | 30 |
| getCo | Carbon monoxide | 0.3 |
| getO3 | Ozone | 20 |

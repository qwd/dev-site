---
title: Moon and Moon Phase
tag: [guide, android, astronomy, moon]
ref: 2-sdk-android-moon
---

Get moonrise and moonset and hourly moon phase data for the next 60 days at any location worldwide.

| Interface Code| Interface          | Class      |
| ------ | ---------- | ----------- |
| getMoon| Moonrise, moonset and moon phase data  | MoonBean |

### Parameter

{% include params.html p="location-def date60" %}

### Sample Code

```java
QWeather.getMoon(Context context, String location, String date, final OnResultMoonListener listener) ;

QWeather.getMoon(Context context, String location, Lang lang, String date, final OnResultMoonListener listener)                                
```

### Properties

Properties of MoonBean

| Property | Description | Example |
| -------------------- | -------------------------- | ------------------------- |
| getCode | See [Status Code](/en/docs/resource/status-code/) | 200 |
| getRefer | Reference data, includes data source, statements and license | Refer |
| getMoonrise       | [Moonrise time](/en/docs/resource/sun-moon-info/#moonrise-and-moonset) of current day. **Maybe null**                   | 2017-10-25T01:34+08:00           |
| getMoonset       | [Moonset time](/en/docs/resource/sun-moon-info/#moonrise-and-moonset) of current day. **Maybe null**                   | 2017-10-25T04:34+08:00           |
| getMoonPhaseBeanList | Moon phase data                   | List\<MoonPhaseBean> |

**Refer**

| Property | Description | Example |
| -------------- | ------------ | ------------------ |
| getSourcesList | Data source and other statements | QWeather |
| getLicenseList | Data license | QWeather Developers License |

**Basic**

| Property | Description | Example |
| ------------- | ------------------------ | ---------- ---------- |
| getUpdateTime | [Last updated time](/en/docs/resource/glossary/#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | https://www.qweather.com/weather/beijing-101010100.html |

**MoonPhaseBean**

| Property | Description | Example |
| --------------- | ---------------------- | ---------------------- |
| getFxTime       | Moon phase forecast time     | 2013-12-31T23:31+08:00 |
| getValue        | Moon phase value               | 0.25                   |
| getName         | Moon Phase Name               | 上弦月                 |
| getIllumination | Moon illuminance in percent | 30                     |
| getIcon | [Icon code](/en/docs/resource/icons/) for moon phase. See also [QWeather Icons](https://icons.qweather.com/en/) | 802                     |

---
title: Moon and Moon Phase
tag: [guide, android, astronomy, moon]
ref: 2-sdk-android-moon
---

Get moonrise and moonset and hourly moon phase data for the next 60 days at any location worldwide.

| Interface code| Interface    | Class      |
| ------ | ---------- | ----------- |
| astronomyMoon | Moonrise, moonset and moon phase data  | AstronomyMoonResponse |

### Request Parameters

**AstronomyMoonParameter**

{% include params.html p="location-def date60" %}

### Sample Code

```java
public void astronomyMoon(AstronomyMoonParameter parameter, Callback<AstronomyMoonResponse> callback);                                
```

### Response

**AstronomyMoonResponse**

| Property | Description | Example |
| -------------------- | -------------------------- | ------------------------- |
| getCode | See [Status Code](/en/docs/resource/status-code/) | 200 |
| getUpdateTime | [Last updated time](/en/docs/resource/glossary/#update-time) | 2017-10-25T04:34+08:00 |
| getFxLink | Responsive web page of this location, easy to embed in your website or APP | https://www.qweather.com/weather/beijing-101010100.html |
| getMoonrise       | [Moonrise time](/en/docs/resource/sun-moon-info/#moonrise-and-moonset) of current day. **Maybe null**                   | 2017-10-25T01:34+08:00           |
| getMoonset       | [Moonset time](/en/docs/resource/sun-moon-info/#moonrise-and-moonset) of current day. **Maybe null**                   | 2017-10-25T04:34+08:00           |
| getMoonPhase | Moon phase data                   | List\<MoonPhase> |
| getRefer | Reference data, includes data source, statements and license | Refer |


**Refer**

| Property | Description  |  Type |  Example  |
| ---------- | ----------- | ------------------ | ------------ |
| getSources | Data source and other statements  | List&lt;String&gt; | QWeather   |
| getLicense | Data license     | List&lt;String&gt; | QWeather Developers License |

**MoonPhase**

| Property | Description | Example |
| --------------- | ---------------------- | ---------------------- |
| getFxTime       | Moon phase forecast time     | 2013-12-31T23:31+08:00 |
| getValue        | Moon phase value               | 0.25                   |
| getName         | Moon Phase Name               | 上弦月                 |
| getIllumination | Moon illuminance in percent | 30                     |
| getIcon | [Icon code](/en/docs/resource/icons/) for moon phase. See also [QWeather Icons](https://icons.qweather.com/en/) | 802                     |

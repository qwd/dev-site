---
title: Supported AQIs
description: Air quality indexes and standards supported by the QWeather Air Quality API.
toc: false
translationKey: api-aqi-list
aliases:
- "/docs/resource/air-info/"
---

QWeather supports two types of AQI and may return up to two AQI datasets in an API response: QAQI and a local AQI.

### QAQI

**QAQI** is a universal air quality index defined by QWeather. It is based on the [WHO Global Air Quality Guidelines 2021](https://www.who.int/news-room/feature-stories/detail/what-are-the-who-air-quality-guidelines) and adjusted for differences in natural environments, economies, and social conditions among countries and regions.

*Note: QAQI is not currently available in China.*

### Local AQI {#local-aqi}

National or regional environmental authorities generally define and manage local AQIs according to local conditions. These indexes use different standards and calculation methods, and a region may publish more than one AQI standard.

### AQI list {#aqi-list}

The following table lists the supported AQIs, value ranges, categories, and related information:

{{< aqi-table >}}

*Download the full table: [aqis.csv](https://raw.githubusercontent.com/qwd/dev-site/master/assets/table/aqis.csv)*

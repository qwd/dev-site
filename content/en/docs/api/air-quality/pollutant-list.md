---
title: Pollutant List
description: Pollutants supported by the QWeather Air Quality API.
toc: false
translationKey: api-aqi-pollutant
---

Air quality is determined by air pollutants, and higher pollutant concentrations generally pose greater health risks. Pollutants are mixtures of solid particles, liquid droplets, and gases from sources such as household fuel use, industrial production, vehicle emissions, power generation, open burning, and dust. The [WHO Global Air Quality Guidelines](https://www.who.int/news-room/feature-stories/detail/what-are-the-who-air-quality-guidelines) cover PM2.5, PM10, O3, NO2, SO2, and CO, but environmental authorities define pollutants differently. For example, China uses six pollutants to calculate air quality, while the European Union uses five.

The pollutants included in an AQI vary, and detailed pollutant data may be unavailable in some areas because:

- Local standards define pollutants differently
- Monitoring stations are offline or closed
- Monitoring stations do not measure some pollutants
- Laws or regulations restrict the data

## Primary pollutant {#primary-pollutant}

The pollutant with the highest concentration or worst pollutant sub-index is the primary pollutant. It represents the main contributor to current air pollution.

## Pollutant sub-index {#pollutant-sub-index}

A pollutant sub-index is the air quality index for an individual pollutant. It makes the relative levels of pollutants easier to compare, and the worst sub-index determines the primary pollutant.

In general, the worst sub-index is also the current AQI value:

```
AQI = max {SUB-INDEX1,SUB-INDEX2,SUB-INDEX3,...SUB-INDEXn}
```

## Supported pollutants {#supported-pollutants}

The following table lists the pollutants and concentration units currently supported:

{{< pollutants-table >}}

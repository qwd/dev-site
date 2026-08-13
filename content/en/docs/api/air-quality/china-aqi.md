---
title: Air Quality in China
description: Specifications and notes for air quality indices in China.
toc: false
translationKey: api-aqi-china
---

For air quality data in China, note the following:

- AQI calculations follow the [Technical specifications on ambient air quality index (HJ 633—2026)](https://www.mee.gov.cn/ywgz/fgbz/bz/bzwb/jcffbz/202602/t20260225_1144441.shtml).
- QAQI is not currently supported.
- Detailed pollutant data is not available in air quality forecasts.
- When a pollutant sub-index is below 50, the primary pollutant for AQI (CN) and AQI-1H (CN) is null.
- Air quality indices are calculated from numerical models and monitoring station data. They **have not been revised or confirmed through a complete review process and must not be used to assess compliance or for any official evaluation.** They are provided for reference only.

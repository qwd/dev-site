---
title: Unit
toc: false
description: QWeather only supports metric units. This document describes the units supported for each data element in QWeather APIs.
aliases:
- "/docs/start/unit/"
translationKey: res-unit
---

All new API versions released by QWeather after 2023 only support metric units, with the unit marked in each API response.

## Unitless

The following data types are returned without a unit:

- Dimensionless quantities, for example: UV index
- Percentage data, represented as [0, 1] with two decimal places. For example: relative humidity
- Angles data, default unit is "degree". For example: solar elevation angle or wind direction

## Unit List {#unit-list}

| Data                    | Unit name             | Unit |
| ----------------------- | --------------------- | ---- |
| Temperature             | Celsius               | °C   |
| Wind speed              | Meter per second      | m/s  |
| Wind gust               | Meter per second      | m/s  |
| Visibility              | Meter                 | m    |
| Atmospheric pressure    | Hectopascal           | hPa  |
| Precipitation           | Millimeter            | mm   |
| Precipitation intensity | Millimeter per hour   | mm/h |
| Solar irradiance        | Watt per square meter | W/m² |
| Sea level               | Meter                 | m    |

## Legacy Unit Parameters {#legacy-unit-parameters}

All Web API v7 versions support unit conversion via the **unit** query parameter. When an imperial unit does not exist for a data item, the metric unit is used by default.

| Unit           | API parameter | iOS Unit  | Android Unit |
| -------------- | ------------- | --------- | ------------ |
| Metric unit    | m             | METRIC    | METRIC       |
| Imperial unit  | i             | IMPERIAL  | IMPERIAL     |

### Web API v7 Unit List

| Data item              | Metric unit       | Imperial unit     |
| ---------------------- | ----------------- | ----------------- |
| Temperature            | Celsius           | Fahrenheit        |
| Wind speed             | km/h              | mile/h            |
| Visibility             | Kilometer         | Mile              |
| Atmospheric pressure   | hPa               | hPa               |
| Precipitation          | mm                | mm                |

---
title: Unit
tag: resource
toc: false
description: QWeather use metric units by default, such as kilometers, Celsius, etc. If you need to use imperial units, you can select the unit by adding the parameter `unit=i` (imperial system) or `unit=m` (metric system) in the interface.
redirect_from: /en/docs/start/unit/
ref: 8-res-unit
---

Metric units are used by default for QWeather, such as kilometers, degrees Celsius, etc. If you need to use imperial units, you can set them by adding the following parameters.

## Unit Parameters

| Unit           | API parameters | iOS SDK parameters | Android SDK parameters |
| -------------- | -------------- | ------------------ | ---------------------- |
| Metric units   | m              | UNIT_TYPE_M        | METRIC                 |
| Imperial units | i              | UNIT_TYPE_I        | IMPERIAL               |

## Unit Information

> There are some data items that do not exist in imperial units and only metric units are used.
 
| Data item | Metric unit | Imperial unit |
| --------- | ----------- | ------------- |----------------- |
| Temperature | celsius | fahrenheit |
| Wind speed | km/h km/h | mile/h mile/h |
| Visibility | Kilometer |  mile |
| Atmospheric pressure | hPa | hPa |
| Precipitation | mm | mm |
| PM2.5 |  μg/m<sup>3</sup> |  μg/m<sup>3</sup> |
| PM10 |  μg/m<sup>3</sup> |  μg/m<sup>3</sup> |
| O3 |  μg/m<sup>3</sup> |  μg/m<sup>3</sup> |
| SO2 |  μg/m<sup>3</sup> |  μg/m<sup>3</sup> |
| CO | mg/m<sup>3</sup> | mg/m<sup>3</sup> |
| NO2 |  μg/m<sup>3</sup> |  μg/m<sup>3</sup> |